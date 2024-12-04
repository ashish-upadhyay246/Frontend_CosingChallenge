import React, { useState } from "react";
import axios from "axios";

const GetBookById = ({ onResult }) => {
  const [isbn, setIsbn] = useState("");
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  const getBookById = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/api/admin/getBookById/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        setError("Failed to fetch book.");
      });
  };

  return (
    <div className="operation-form">
      <input type="number" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      <center><button className="get" onClick={getBookById}>Get</button></center>
      {error && <p>{error}</p>}
      {book && (
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <h4>ISBN: {book.isbn}</h4>
              <h4>Title: {book.title}</h4>
              <h4>Author: {book.author}</h4>
              <h4>Publication Year: {book.publicationYear}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetBookById;
