import React, { useContext, useRef, useState } from "react";
import { MyContext } from "../utils/MyContext";

const SearchBar = ({searchValue, setSearchValue}:{searchValue:string,setSearchValue:(newState:string)=>void})=>{

    const {contacts,setCurrentContacts} = useContext(MyContext);
    const cVal = useRef("");

    const handleChange=(val:string)=>{
        setSearchValue(val);
        cVal.current = val;
    }

    const handleSubmit = ()=>{
        
        if(cVal.current.trim()!==""){
        let tempContacts:number[] = [];
        for(const contact of contacts){
            
            if((contact.first_name+" "+contact.last_name).toLowerCase().indexOf(cVal.current.toLowerCase())>-1){
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
            <input
                className="w-full px-5 py-3 border-gray-400 border-2" 
                value={searchValue}   
                onInput={(e)=>{handleChange(e.currentTarget.value);handleSubmit()}}
                onBlur={e=>handleChange(e.currentTarget.value)}

                type="text"
                placeholder="Find contacts" />
        </form>
    )
}

export default SearchBar;