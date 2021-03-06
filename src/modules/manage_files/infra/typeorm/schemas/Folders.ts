import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('folders')
export class Folders {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    folder_id: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}