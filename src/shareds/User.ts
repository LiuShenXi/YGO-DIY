import { Entity, Fields } from "remult"

@Entity('users', {
  allowApiCrud: true
})
export class User {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  username = '';

  @Fields.string()
  password = '';
}
