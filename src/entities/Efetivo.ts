import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Graduacao from "./Graduacao";
import Alerta from "./Alerta";
import Unidade from "./Unidade";
import QRCode from "./QRCode";

@Entity("efetivo")
class Efetivo {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Graduacao)
  @JoinColumn({ name: "id_graduacao" })
  id_graduacao!: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  nome_completo!: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  nome_guerra!: string;

  @Column({ type: "bytea", nullable: true })
  foto!: Buffer;

  @Column({ type: "boolean", nullable: true })
  dependente!: boolean | null;

  @ManyToOne(() => Alerta)
  @JoinColumn({ name: "id_alerta" })
  id_alerta!: number;

  @ManyToOne(() => Unidade)
  @JoinColumn({ name: "id_unidade" })
  id_unidade!: number;

  @ManyToOne(() => QRCode)
  @JoinColumn({ name: "qrcode_efetivo" })
  qrcode_efetivo!: number;

  @Column({ type: "varchar", length: 40, nullable: false })
  email!: string;

  @Column({ type: "boolean" })
  ativo_efetivo!: boolean;

  @Column({ type: "bigint", nullable: true })
  sinc_efetivo!: number | null;

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

export default Efetivo;
