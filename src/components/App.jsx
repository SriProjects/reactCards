import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function App() {
  function CreateCard(contact) {
    return (
      <Card
        //id={contact.id}
        key={contact.id}
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  }
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
