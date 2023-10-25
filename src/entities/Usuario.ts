import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("usuario")
class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "integer", nullable: true })
  usuario!: number | null;

  @Column({ type: "varchar", length: 50, nullable: false })
  senha!: string;

  @Column({ type: "integer", nullable: false })
  nivel_acesso!: number;

  @Column({ type: "boolean", nullable: false })
  flag!: boolean;

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

export default Usuario;
