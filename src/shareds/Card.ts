import { Entity, Fields, Field } from "remult"
import { User } from './User'

@Entity('cards', {
  allowApiCrud: true
})
export class Card {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  name = '';

  @Fields.string()
  illustration = '';

  @Fields.string()
  race = '';

  @Fields.string()
  effect = '';

  @Fields.string()
  attribute = '';

  @Fields.string()
  description = '';
  
  @Fields.number()
  starRating = 0;

  @Field(() => User)
  creator?: User;
}
