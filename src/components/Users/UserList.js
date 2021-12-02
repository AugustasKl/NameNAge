import UserItem from "./UserItem";
import "./UserList.css";
const UserList = (props) => {

  console.log(props.userData);




  return  <ul className="users-list">
      {props.userData.map((user) => {
        return <UserItem key={user.id} name={user.name} age={user.age} />;
      })}
    </ul>
  
};

export default UserList;
