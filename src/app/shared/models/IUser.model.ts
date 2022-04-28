import { IAddress } from "./IAddress.model";
import { ICompany } from "./ICompany.model";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
