import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { IContact } from './utils/CustomTypes';
import ContactsList from './components/ContactsList';
import {MyContext} from './utils/MyContext';
import SearchBar from './components/SearchBar';

function App() {

  const [contacts, setContacts] = useState<IContact[]>([])
  const loading = useRef<boolean>(true);
  const [currentContacts,setCurrentContacts] = useState<IContact[]>([])
  const selectedContacts = useRef<number[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");


  useEffect(()=>{
    loading.current = true;
    axios.get('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json')
    .then((res:{data:IContact[]})=>{
      loading.current=false;
      const sortedContacts = res.data.sort((a,b)=>a.last_name > b.last_name?1:-1)
      setContacts(sortedContacts);
      setCurrentContacts(sortedContacts);  
    })
  .catch(e=>console.error(e))
  
  },[]) 

  return (
    <MyContext.Provider value={{contacts,setContacts,currentContacts,setCurrentContacts,selectedContacts:selectedContacts.current}}>

    <div className="App flex flex-col items-center justify-center w-full">
     <span className=" bg-blue-300 py-3 w-full text-center text-white text-2xl uppercase font-bold"> Contacts</span>
     <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
     <ContactsList />
    </div>
    </MyContext.Provider>
  );
}

export default App;
