import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('cats')
export class Cats {
    @ObjectIdColumn()
    id: string;

    @Column({ default: false })
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}