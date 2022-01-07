import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity('users')
export class User{
    // @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string
}