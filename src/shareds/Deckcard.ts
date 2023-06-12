import { Entity, Fields, Field } from "remult"
import { Card } from './Card'
import { Deck } from './Deck'

@Entity('deck_cards', {
  allowApiCrud: true
})
export class DeckCard {
  @Fields.uuid()
  id!: string;

  @Field(() => Deck)
  deck?: Deck;

  @Field(() => Card)
  card?: Card;
}
