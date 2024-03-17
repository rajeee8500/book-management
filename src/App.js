import "./App.css";
import { useState } from "react";

function App() {
  const [bookName, setBookName] = useState("");
  const [price, setprice] = useState("");
  const [author, setauthor] = useState("");
  const [publisher, setpublisher] = useState("");
  const [address, setaddress] = useState("");

  const getUser = async () => {
    let response = await fetch("http://localhost:8080/bookfrom", {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    let json = await response.json();
    console.log(json);
  };
  const btnClicked = async () => {
    let data = {
      bookname: bookName,
      price: price,
      author: author,
      publisher: publisher,
      address: address,
    };

    let response = await fetch("http://localhost:8080/booklist", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    console.log(response);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="enter book name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setprice(e.target.value)}
        placeholder="enter price"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setauthor(e.target.value)}
        placeholder="enter author name"
      />
      <input
        type="text"
        value={publisher}
        onChange={(e) => setpublisher(e.target.value)}
        placeholder="enter publisher"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setaddress(e.target.value)}
        placeholder="enter address"
      />
      <button onClick={getUser}>click to get users</button>;
      <button onClick={btnClicked}>click to post users</button>;
    </div>
  );
}

export default App;
