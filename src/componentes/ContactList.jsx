import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import Contact from './Contact.model';
import ContactComp from './ContactComp';
import AddFormContact from './AddFormContact';




const ContactList = () => {

    const [contact, setContact] = useState(null)

    const handleAddContact = (contactParam) => {
      setContact([...contact, contactParam]);
    };

    const handleRemoveContact = (contactParam) => {
      let contactTemp = contact.filter((elem) => {
        return elem !== contactParam;
      });
      setContact(contactTemp);
    };

    const handleConectContact = (contactParam) => {
      let contactTemp = contact.map((elem) => {
        if (elem === contactParam) {
          elem.conect = !elem.conect;
        }
  
        return elem;
      });
  
      setContact(contactTemp);
    };

    useEffect(() => {
      console.log("the task has been mounted");
      const contacto1 = new Contact(0,'david','perez','dp@pp',false);
      const contacto2 = new Contact(1,'pedro','gonzalez','wenfnw@kbk',true);
     
      let contacts=[contacto1,contacto2]
      setTimeout(() => {
        setContact(contacts);
      }, 2000);
      return () => {
        console.log("the task has been unmounted");
      };
      }, []);
    
    if (contact === null)
      return <p className="text-center w-100 py-5">Cargando tareas...</p>;
  
    return (
    <>
      {contact.length > 0 ? (
      <div>
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
          <th>Conected</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
      {contact.map((contactElement,ind)=>{
        return(
                <ContactComp
                key={ind}
                contact={contactElement}
                addContact={handleAddContact}
                removeContact={handleRemoveContact}
                toggleConect={handleConectContact}>
                </ContactComp>)
        })}
      </tbody>
    </Table>
    </div>
     ):(
          <p className="h3 text-center w-100 py-5">There are not contacts</p>
    )}
    <AddFormContact addContact={handleAddContact} amountContact={contact.length} />
  </>
  );
};


export default ContactList



