import React, { useState } from "react";
import axios from "axios";

const GetBooks = ({ onResult }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch books
  const getBooks = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/admin/getBooks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        setError("Failed to fetch books.");
      });
  };

  return (
    <div className="operation-form">
      <center><button className="get" onClick={getBooks}>View</button></center>
      <center>{error && <p>{error}</p>}</center>
      {books.length > 0 && (
        <div className="card-container">
          {books.map((book) => (
            <div key={book.isbn} className="card">
              <div className="card-content">
                <h3>TITLE: {book.title}</h3>
                <h4>ISBN: {book.isbn}</h4>
                <h4>AUTHOR: {book.author}</h4>
                <h4>PUBLISHED: {book.publicationYear}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetBooks;
