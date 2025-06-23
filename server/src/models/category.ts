import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class Category {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  name!: string;
}
