export interface IContact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: "Male" | "Female";
  avatar: string;
  isChecked?:boolean
}
export interface IMyContext{
  contacts:IContact[],
  setContacts:(newState:IContact[])=>void,
  currentContacts:IContact[],
  setCurrentContacts:(newState:IContact[])=>void,
  selectedContacts:number[],
}