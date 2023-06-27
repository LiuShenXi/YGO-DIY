import { Entity, Fields, Field } from "remult";
import { User } from './User';
import { Card } from './Card';

@Entity('comments', {
  allowApiCrud: true
})
export class Comment {
  @Fields.uuid()
  id!: string;

  @Field(() => Card)
  card?: Card;

  @Field(() => User)
  user?: User;

  @Fields.string()
  text = "";

  @Fields.createdAt()
  createdAt?: Date;
}
