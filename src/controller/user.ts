import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export class User {
  public async create(req: Request, res: Response) {
    try {
      const { email, name, last_name, address, tel, password } = req.body;
      const data = await prisma.user.create({
        data: {
          email,
          name,
          last_name,
          address,
          tel,
          password,
        },
      });

      res.status(201).json({
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        msg: "Error creating user",
      });
    }
  }
  public async findAll(_req: Request, res: Response) {
    try {
      const data = await prisma.user.findMany({
        include: {
          cart: { include: { order: { include: { Product: true } } } },
        },
      });
      res.status(202).json({
        data,
      });
    } catch (error) {
      res.status(400).json({
        msg: "not found users",
      });
    }
  }
  public async finOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const data = await prisma.user.findUnique({
        where: { id: parseInt(id) },
        include: { cart: true },
      });

      res.status(200).json({
        data,
      });
    } catch (error) {
      res.status(404).json({
        msg: "User not exits ",
      });
    }
  }
  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { email, name, last_name, address, tel, password } = req.body;
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });

      if (!user) {
        res.status(404).json({
          msg: "User not found",
        });
        return;
      }

      const data = await prisma.user.update({
        data: {
          email,
          name,
          last_name,
          address,
          tel,
          password,
        },
        where: { id: parseInt(id) },
      });
      res.status(200).json({
        msg: "Update success",
        data,
      });
    } catch (error) {
      res.status(404).json({
        msg: "Update Failes",
      });
    }
  }
  public async detele(req: Request, res: Response) {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      res.status(404).json({
        msg: "User not found",
      });
      return;
    }
    const data = await prisma.user.delete({ where: { id: parseInt(id) } });
    res.status(200).json({
      data,
    });
  }
}
