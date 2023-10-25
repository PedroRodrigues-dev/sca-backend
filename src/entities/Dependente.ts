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

@Entity("dependente")
class Dependente {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Efetivo)
  @JoinColumn({ name: "id_efetivo" })
  id_efetivo!: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  nome!: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  parentesco!: string;

  @Column({ type: "integer", nullable: true })
  qrcode!: number | null;

  @Column({ type: "boolean", nullable: false })
  ativo_dependente!: boolean;

  @Column({ type: "bigint", nullable: true })
  sinc_dependente!: number | null;

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

export default Dependente;
