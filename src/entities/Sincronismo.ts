import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("sincronismo")
class Sincronismo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "bigint", nullable: true })
  sinc_pessoa_geral!: number | null;

  @Column({ type: "bigint", nullable: false })
  sinc_posto_geral!: number;

  @Column({ type: "bigint", nullable: false })
  sinc_dependente_geral!: number;

  @Column({ type: "bigint", nullable: false })
  sinc_veiculo_geral!: number;

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

export default Sincronismo;
