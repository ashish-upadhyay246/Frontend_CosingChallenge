import React, { useState } from "react";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
import GetBooks from "./GetBooks";
import GetBookById from "./GetBookById";
import RemoveBook from "./RemoveBook";

const Dashboard = () => {
  const [op, setOp] = useState("");
  return (
    <div className="dashboard">
      <center><div className="operation-buttons">
        <button onClick={() => setOp("Add")}><h1>Add Book</h1></button>
        <button onClick={() => setOp("Get")}><h1>List Books</h1></button>
        <button onClick={() => setOp("Update")}><h1>Update Title</h1></button>
        <button onClick={() => setOp("GetById")}><h1>Get Book</h1></button>
        <button onClick={() => setOp("Remove")}><h1>Remove Book</h1></button><br /><br />
      </div></center>

      <div className="operation-container">
        {op === "Add" && <AddBook />}
        {op === "Update" && <UpdateBook />}
        {op === "Get" && <GetBooks />}
        {op === "GetById" && <GetBookById />}
        {op === "Remove" && <RemoveBook />}
      </div>
    </div>
  );
};

export default Dashboard;
