import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export class Cart {
  async create(req: Request, res: Response) {
    const { userId } = req.body;

    const data = await prisma.cart.create({
      data: {
        userId: parseInt(userId),
      },
    });
    res.json({ data });
  }

  async createOrder(req: Request, res: Response) {
    const { productId, cartId, cant } = req.body;
    const data = await prisma.order.create({
      data: {
        cartId: parseInt(cartId),
        productId: parseInt(productId),
        cant: cant,
      },
    });

    res.status(200).json({
      data,
    });
  }

  async findCart(_req: Request, res: Response) {
    const data = await prisma.cart.findMany({
      include: { order: { include: { Product: true } } },
    });

    res.status(200).json({
      data,
    });
  }
}
