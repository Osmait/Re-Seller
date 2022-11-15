import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export class Categori {
  public async create(req: Request, res: Response) {
    try {
      const { name, description } = req.body;

      const data = await prisma.category.create({
        data: {
          name,
          description,
        },
      });
      res.status(201).json({
        data,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Error creating  Category",
      });
    }
  }
  public async findAll(_req: Request, res: Response) {
    try {
      const data = await prisma.category.findMany({
        include: { product: true },
      });
      res.status(200).json({
        data,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Error  Not found Categories",
      });
    }
  }
  public async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const data = await prisma.category.findUnique({
        where: { id: parseInt(id) },
        include: {
          product: true,
        },
      });
      res.status(200).json({
        data,
      });
    } catch (error) {
      res.status(404).json({
        msg: "Categori not exits ",
      });
    }
  }
  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const categori = await prisma.category.findUnique({
        where: { id: parseInt(id) },
      });

      if (!categori) {
        res.status(404).json({
          msg: "Categori not found",
        });
        return;
      }

      const data = await prisma.category.update({
        data: {
          name,
          description,
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
  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const categori = await prisma.category.findUnique({
      where: { id: parseInt(id) },
    });

    if (!categori) {
      res.status(404).json({
        msg: "User not found",
      });
      return;
    }
    const data = await prisma.category.delete({ where: { id: parseInt(id) } });
    res.status(200).json({
      data,
    });
  }
}
