import React, { useContext, useState } from "react";
import { MyContext } from "../utils/MyContext";

const SearchBar = ()=>{

    const [searchValue, setSearchValue] = useState<string>("");
    const {contacts,setCurrentContacts} = useContext(MyContext);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.target.value);
    }

    const handleSubmit = ()=>{
        if(searchValue.trim()!==""){
        let tempContacts:number[] = [];
        for(const contact of contacts){
            
            if((contact.first_name+" "+contact.last_name).toLowerCase().indexOf(searchValue.toLowerCase())>-1){
                tempContacts.push(contacts.indexOf(contact));
            }
        }
        setCurrentContacts(tempContacts.map(step=>{
            return contacts[step];
        }))
    }
    else setCurrentContacts(contacts);
    }

    return (
        <form
        onSubmit={e=>{
            e.preventDefault();
            handleSubmit()}}
            style={{width:"90%"}}
        >
            <input className="w-full px-5 py-3 border-gray-400 border-2" 
            value={searchValue}   
            onChange={(e)=>{handleChange(e)}}
            onBlur={e=>handleChange(e)}

            type="text"
            placeholder="Find contacts" />
        </form>
    )
}

export default SearchBar;