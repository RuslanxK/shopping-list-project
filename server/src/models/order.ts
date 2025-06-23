import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("orders")
export class Order {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  date!: Date; 

  @Column()
  order!: {
    categoryName: string;
    items: {
      name: string;
      quantity: number;
    }[];
  }[];
}
