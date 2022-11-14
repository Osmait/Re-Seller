import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export class User {
  async create(req: Request, res: Response) {
    try {
      const { email, name, last_name, address, tel, password } = req.body;
      const userDB = await prisma.user.create({
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
        userDB,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        msg: "Error ",
      });
    }
  }

  async findAll(_req: Request, res: Response) {
    try {
      const data = await prisma.user.findMany();
      res.status(202).json({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
