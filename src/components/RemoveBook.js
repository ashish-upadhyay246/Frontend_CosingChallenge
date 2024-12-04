import React, { useState } from "react";
import axios from "axios";

const RemoveBook = ({ onResult }) => {
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");

  const removeBook = () => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:8080/api/admin/removeBook/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMessage("Book Removed");
      })
      .catch((err) => {
        setMessage("Failed to remove book.");
      });
  };

  return (
    <div className="operation-form">
      <input type="number" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
      <center><button onClick={removeBook}className="remove">Remove</button></center>
      {message && <center><p>{message}</p></center>}
    </div>
  );
};

export default RemoveBook;