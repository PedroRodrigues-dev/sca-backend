import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Efetivo from "./Efetivo";
import Visitante from "./Visitante";
import QRCode from "./QRCode";

@Entity("veiculo")
class Veiculo {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Efetivo, { nullable: true })
  @JoinColumn({ name: "id_efetivo" })
  id_efetivo!: number | null;

  @ManyToOne(() => Visitante, { nullable: true })
  @JoinColumn({ name: "id_visitante" })
  id_visitante!: number | null;

  @Column({ type: "varchar", length: 20, nullable: false })
  tipo!: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  cor_veiculo!: string;

  @Column({ type: "varchar", length: 7, nullable: true })
  placa!: string | null;

  @Column({ type: "varchar", length: 40, nullable: true })
  modelo!: string | null;

  @Column({ type: "bigint", nullable: false })
  renavam!: number;

  @ManyToOne(() => QRCode, { nullable: true })
  @JoinColumn({ name: "qrcode" })
  qrcode!: number | null;

  @Column({ type: "boolean", nullable: false })
  ativo_veiculo!: boolean;

  @Column({ type: "bigint", nullable: true })
  sinc_veiculo!: number | null;

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

export default Veiculo;
