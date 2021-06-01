import { useContext, useEffect, useState } from "react";
import { MyContext } from "../utils/MyContext";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  
    const [contactsToRender,setContactsToRender] = useState<JSX.Element[] | string>("Not Found Any Contacts")
    const {currentContacts,selectedContacts,setContacts, contacts} = useContext(MyContext);


    const handleSelectContacts = (id:number,addContact:boolean)=>{
      
      if(addContact && selectedContacts.indexOf(id)>-1)return;

      
      const index = contacts.findIndex((step)=>{return step.id===id});

      const tempContacts = contacts;
      
      if(addContact){
        selectedContacts.push(id)
        
        tempContacts[index].isChecked = true
            
        }
        else{
          selectedContacts.splice(selectedContacts.indexOf(id),1)
          tempContacts[index].isChecked = false;

        }

        setContacts(tempContacts);

        console.log(selectedContacts)
    }

    useEffect(() => { 

    if (currentContacts) {

      setContactsToRender(
          currentContacts.map((contact) => {
            return <ContactItem {...contact} key={contact.id} handleSelectContacts={(id:number,addContact:boolean)=>handleSelectContacts(id,addContact)}/>;
      }))
      
    }
    //eslint-disable-next-line
  },[currentContacts]);

  
  
  return (<div className="contatsList flex flex-col items-center w-full">{contactsToRender}</div>)


};

export default ContactsList; 

