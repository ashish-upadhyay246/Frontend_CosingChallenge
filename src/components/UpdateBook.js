import React, { useState } from "react";
import axios from "axios";

const UpdateBook = ({ onResult }) => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");

  const updateBook = () => {
    const token = localStorage.getItem("token");
    axios
      .put(
        `http://localhost:8080/api/admin/updateBook/${isbn}/${title}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setMessage("Book updated");
      })
      .catch((err) => {
        setMessage("Failed to update book.");
      });
  };

  return (
    <div className="operation-form">
      <input type="number" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <center><button className="add" onClick={updateBook}>Update</button></center>
      {message && <center><p>{message}</p></center>}
    </div>
  );
};

export default UpdateBook;
