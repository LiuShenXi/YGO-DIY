import { Entity, Fields, Field } from "remult"
import { User } from './User'
import { Card } from './Card'

@Entity('favorites', {
  allowApiCrud: true
})
export class Favorite {
  @Fields.uuid()
  id!: string;

  @Field(() => Card)
  card?: Card;

  @Field(() => User)
  user?: User;
}
