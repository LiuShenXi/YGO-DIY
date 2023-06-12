import { Entity, Fields, Field } from "remult"
import { User } from './User'

@Entity('decks', {
  allowApiCrud: true
})
export class Deck {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  name = '';

  @Field(() => User)
  owner?: User;
}
