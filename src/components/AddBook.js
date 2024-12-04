import React, { useState } from "react";
import axios from "axios";

const AddBook = ({ onResult }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pyear, setPyear] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const addBook = () => {
    const token = localStorage.getItem("token");
    const data = { title, author, publicationYear: pyear };
    axios
      .post("http://localhost:8080/api/admin/addNewBook", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(()=>{
        setMessage("Book added")
      })
      .catch((err) => {
        setError("Failed to add book.");
      });
  };

  return (
    <div className="operation-form">
      <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Enter Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="number" placeholder="Enter Publication Year" value={pyear} onChange={(e) => setPyear(e.target.value)} />
      <center><button className="add" onClick={addBook}>Add</button></center>
      {message && <center><p style={{ color: "green" }}>{message}</p></center>}
      {error && <center><p style={{ color: "red" }}>{error}</p></center>}
    </div>
  );
};

export default AddBook;