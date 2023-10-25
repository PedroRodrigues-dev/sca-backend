import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("graduacao")
class Graduacao {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 10, nullable: false })
  sigla!: string;

  @Column({ type: "varchar", length: 15, nullable: false })
  descricao!: string;

  @Column({ type: "integer", nullable: false })
  ordem!: number;

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

export default Graduacao;
