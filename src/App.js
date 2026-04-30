import "./App.css";
import UserForm from "./components/UserForm";
import { UserTable } from "./components/UserTable";
import { useState } from "react";

const App = () => {
  const [userList, setUSerList] = useState([]);
  const addUser = (userObj) => {
    console.log(userObj);
    setUSerList([...userList, userObj]);
  };

  return (
    <div className="container pt-4">
      <h2 className="text-center">UserList</h2>
      <hr />
      {/* form component */}
      <UserForm addUser={addUser} />
      {/* table component */}
      <UserTable userList={userList} />
    </div>
  );
};

export default App;
