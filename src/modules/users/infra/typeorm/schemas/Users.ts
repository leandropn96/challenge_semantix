import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class Users {
    @ObjectIdColumn()
    id: string;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    addressNumber: number;

    @Column()
    phoneNumber: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}