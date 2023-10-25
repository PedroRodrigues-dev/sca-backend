import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("visitante")
class Visitante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 30, nullable: false })
  tipo_doc!: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  num_doc!: string;

  @Column({ type: "varchar", length: 45, nullable: false })
  nome!: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  rua!: string;

  @Column({ type: "varchar", length: 10, nullable: false })
  numero!: string;

  @Column({ type: "varchar", length: 40, nullable: false })
  bairro!: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  estado!: string;

  @Column({ type: "varchar", length: 11, nullable: true })
  telefone!: string | null;

  @Column({ type: "bytea", nullable: true })
  foto!: Buffer;

  @Column({ type: "varchar", length: 45, nullable: true })
  empresa!: string | null;

  @Column({ type: "varchar", length: 45, nullable: true })
  autorizador!: string | null;

  @Column({ type: "integer", nullable: true })
  qr_code!: number | null;

  @Column({ type: "boolean", nullable: true })
  ativo_visitante!: boolean | null;

  @Column({ type: "bigint", nullable: true })
  sinc!: number | null;

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

export default Visitante;
