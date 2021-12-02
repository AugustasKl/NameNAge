import './UserItem.css'
const UserItem =(props)=>{

    if(props.name.lenght===0 && props.age.lenght===0){
        return (
        <div>
           <h2>empty data</h2>  
        </div>
       
        )
    }
  


    return(
        <li>
        <div className='user-item'>
        <div className='user-item__description'>
            <h3>{props.name}</h3>
            <div>{`(${props.age} years old)`}</div>
        </div>

        </div>
        </li>
    )
}

export default UserItem