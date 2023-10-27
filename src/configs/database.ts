import { createConnection, ConnectionOptions } from "typeorm";
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
} from "./env";
import Alerta from "../entities/Alerta";
import Dependente from "../entities/Dependente";
import Efetivo from "../entities/Efetivo";
import Graduacao from "../entities/Graduacao";
import Posto from "../entities/Posto";
import QRCode from "../entities/QRCode";
import RegistroAcesso from "../entities/RegistroAcesso";
import Sincronismo from "../entities/Sincronismo";
import Unidade from "../entities/Unidade";
import Usuario from "../entities/Usuario";
import Veiculo from "../entities/Veiculo";
import Visitante from "../entities/Visitante";

export async function connectDatabase() {
  try {
    const connectionOptions: ConnectionOptions = {
      name: "default",
      type: "postgres",
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      username: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
      entities: [
        Alerta,
        Dependente,
        Efetivo,
        Graduacao,
        Posto,
        QRCode,
        RegistroAcesso,
        Sincronismo,
        Unidade,
        Usuario,
        Veiculo,
        Visitante,
      ],
      synchronize: true,
      logging: false,
    };

    const connection = await createConnection(connectionOptions);
    console.log("Database connection established");

    return connection;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}
