import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Posto from "./Posto";
import QRCode from "./QRCode";
import Visitante from "./Visitante";
import Dependente from "./Dependente";
import Veiculo from "./Veiculo";

@Entity("registro_acesso")
class RegistroAcesso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 20, nullable: false })
  tipo!: string;

  @Column({ type: "date", nullable: false, default: () => "CURRENT_DATE" })
  data!: Date;

  @Column({ type: "time", nullable: false, default: () => "CURRENT_TIMESTAMP" })
  hora!: Date;

  @ManyToOne(() => Posto)
  @JoinColumn({ name: "id_posto" })
  id_posto!: number;

  @ManyToOne(() => QRCode)
  @JoinColumn({ name: "qrcode" })
  qrcode!: number;

  @ManyToOne(() => Visitante, { nullable: true })
  @JoinColumn({ name: "id_visitante" })
  id_visitante!: number | null;

  @ManyToOne(() => Dependente, { nullable: true })
  @JoinColumn({ name: "id_dependente" })
  id_dependente!: number | null;

  @ManyToOne(() => Veiculo, { nullable: true })
  @JoinColumn({ name: "id_veiculo" })
  id_veiculo!: number | null;

  @Column({ type: "varchar", length: 30, nullable: true })
  autorizador!: string | null;

  @Column({ type: "bigint", nullable: true })
  sinc_acesso!: number | null;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
    nullable: false,
  })
  updated_at!: Date;
}

export default RegistroAcesso;
