import { Entity, Fields, Field } from "remult"
import { User } from './User'
import { Card } from './Card'

@Entity('ratings', {
  allowApiCrud: true
})
export class Rating {
  @Fields.uuid()
  id!: string;

  @Field(() => Card)
  card?: Card;

  @Field(() => User)
  user?: User;

  @Fields.number()
  score = 0;
}
