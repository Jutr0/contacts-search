import { IContact } from "../utils/CustomTypes";

interface IProps extends IContact {
  
  handleSelectContacts:(id:number, addContact:boolean)=>void
}

const ContactItem = (props:IProps) => {


  const {id, first_name, last_name, isChecked, avatar, handleSelectContacts } = props;
  

  const defaultAvatar = "https://icons.iconarchive.com/icons/papirus-team/papirus-status/48/avatar-default-icon.png"
  
  

  return (
      <label htmlFor={"contactCheckbox" + id} style={{width:"90%"}}>
        <div className="flex items-center justify-between border-b-2 border-black">
          <div className="contactLeftSide flex items-center justify-center">
              <img src={avatar || defaultAvatar} alt={`${first_name}`} className="m-5" />
              <span className="contactName block text-xl h-5" style={{lineHeight:"20px"}}>{`${first_name} ${last_name}`}</span>
          </div>
          <input id={"contactCheckbox" + id} type="checkbox" defaultChecked={!!isChecked} className="block h-5 w-5 mr-5" onChange={(e)=>{handleSelectContacts(id,e.target.checked)}}/>
        </div>
      </label>
  );
};

export default ContactItem;
