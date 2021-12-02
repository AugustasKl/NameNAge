import './Users.css'
import UserList from "./UserList";
const Users =(props)=>{
   console.log(props.data);




    return(
    <div className='users'>
        
    <UserList key={props.data.id} userData={props.data}/>
            
       
        
        </div>
    )
}

export default Users