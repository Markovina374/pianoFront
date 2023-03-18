import {IOwner} from "./IOwner";
import {IDate} from "./IDate";

export interface IQuestion {
  owner: IOwner
  title: string
  link: string
  is_answered: boolean
  creation_date: IDate
}
