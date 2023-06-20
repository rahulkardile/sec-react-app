import React from "react";
import Card from "./Component/Card";
import Contact from "./Component/Contact";
import Avatar from "./Component/Avatar";

function createCard(contact){
    return(
        <Card
        key= {contact.id}
        tag={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
         />
    )
}

const App = () => {

    return (
        <div>

            <h1 className="heading">My Contact</h1>

            {Contact.map(createCard)}
            
        </div>
    )
}

export default App;