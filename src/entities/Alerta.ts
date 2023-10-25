import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("alerta")
class Alerta {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 30, nullable: false })
  nome_alerta!: string;

  @Column({ type: "varchar", length: 15, nullable: false })
  cor!: string;

  @Column({ type: "boolean", nullable: false })
  ativo_alerta!: boolean;

  @Column({ type: "bigint", nullable: true })
  sinc!: number;

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

export default Alerta;
