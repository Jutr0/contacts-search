import {createContext} from 'react';
import { IMyContext } from './CustomTypes';

export const MyContext = createContext<IMyContext>({
    contacts:[],
    setContacts:()=>{},
    selectedContacts:[],
    currentContacts:[],
    setCurrentContacts:()=>{}
})