import UserForm from './UserForm'
import './NewUser.css'
const NewUser=(props)=>{


    const saveUserData = (userData)=>{
        const data ={
            ...userData,
            id: Math.random().toString()
        }
        console.log(data);
        props.onAddUser(data)
    }




    return(
        <div className='new-user'>
            <UserForm onSaveUserData={saveUserData} />
        </div>
    )
}
export default NewUser