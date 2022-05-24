import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('files')
export class Files {
    @ObjectIdColumn()
    id: string;

    @Column()
    file_id: string;

    @Column()
    folder_id: string;

    @Column({ default: false })
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}