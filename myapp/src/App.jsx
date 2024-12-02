import React from "react";
//import ReactDOM from "react-dom/client";
import contacts from "./contacts";
import Card from "./Card";

function populate(contacts){
    return(<Card 
        name={contacts.name}
        img={contacts.imgURL}
        email={contacts.email}
        phone={contacts.phone}
        company={contacts.company}
        />);
}

function App() {
  return (
        <div className="cardcontainer">
            
            <h2 className="heading"> MY CONTACTS</h2>
            {contacts.map(populate)}
            
        </div>
  );
}

export default App;
