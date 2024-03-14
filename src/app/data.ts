import { Dispatch, SetStateAction, createContext } from 'react';

export type PropType = {
  id?: string;
  company: string;
  position: string;
  src?: string;
  logobg?: string;
  location: string;
  postedAt: string;
  contract: string;
  description: string;
  requirements: string;
  items: string[];
  content: string;
  bullet: string[];
};

type GlobalType = {
  isOn: boolean;
  setIson: Dispatch<SetStateAction<boolean>>;
};

export const GlobalStates = createContext<GlobalType | null>(null);
