import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export class Cart {
  async create(req: Request, res: Response) {
    const { userId, product_id, cant } = req.body;

    const data = await prisma.cart.create({
      data: {
        userId: parseInt(userId),
        product_id: product_id,
        cant,
      },
    });
    res.json({ data });
  }

  async findCart(req: Request, res: Response) {
    const { id } = req.params;
    const data = await prisma.cart.findMany({
      where: { userId: parseInt(id) },
    });
    res.status(200).json({
      data,
    });
  }
}
