import { IUser } from './IUser';

export interface IExampleDataReadOnly {
  id: string;
}

export interface IExampleDataEditable {
  name: string;
  website?: string;
  description: string | null;
  users: IUser[];
}

type IExampleData = IExampleDataReadOnly & IExampleDataEditable;

export default IExampleData;
