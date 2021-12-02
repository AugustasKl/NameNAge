import { useState } from "react";
import "./UserForm.css";
import Error from "../Error";
const UserForm = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: name,
      age: age,
    };

    setName("");
    setAge("");

    console.log(userData);

    props.onSaveUserData(userData);
  };

  const onErrorHandler = (event) => {
    if (age.length === 0 || name.length === 0 || +age < 0) {
      setIsEditing(true);
    }
  };

  const stopErrorHandler = () => {
    setIsEditing(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>

        <div className="new-user__control">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            step="1"
            onChange={ageChangeHandler}
          />
        </div>
      </div>
      <div className={`new-user__actions ${isEditing ? "overlay" : ""}`}>
        {!isEditing ? (
          <button type="submit" onClick={onErrorHandler}>
            Add User
          </button>
        ) : (
          isEditing && (
            <Error age={age} name={name} onCancel={stopErrorHandler} />
          )
        )}
      </div>
    </form>
  );
};
export default UserForm;
