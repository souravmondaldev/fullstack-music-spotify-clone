import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;
    console.log("req.headers.authorization", req.headers.authorization);
    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
          throw new Error("User not found");
        }
      } catch (e) {
        res.status(401);
        res.json({ error: "Unauthorized" });
        return;
      }
      return handler(req, res, user);
    }
    if (!token) {
      return res.status(401).json({
        error: "No token provided",
      });
    }
  };
};
