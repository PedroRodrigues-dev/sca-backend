import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("posto")
class Posto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 60, nullable: false })
  nome!: string;

  @Column({ type: "integer", nullable: false })
  nivel_acesso!: number;

  @Column({ type: "boolean", nullable: false })
  ativo_posto!: boolean;

  @Column({ type: "bigint", nullable: true })
  sinc_posto!: number | null;

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

export default Posto;
