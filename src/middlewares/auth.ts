import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../configs/env";

export const authenticateToken = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      message: "Acesso não autorizado. Token de autenticação não fornecido.",
    });
  }

  const tokenParts = token.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(401).json({ message: "Token inválido." });
  }

  const actualToken = tokenParts[1];

  jwt.verify(actualToken, JWT_SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido." });
    }

    req.user = decoded;
    next();
  });
};
