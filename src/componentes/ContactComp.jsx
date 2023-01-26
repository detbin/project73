import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import Contact from './Contact.model'
import '../styles/contactComponent.scss'



const ContactComp= ({contact, addContact, removeContact, toggleConect}) =>{
  useEffect(() => {
    console.log("the task has been modified");
    return () => {
      console.log(`the task is going to unmount`);
    };
  }, []);
     return(
    <tr>
    <td>
        {contact.nombre}
      </td>
      <td>
        {contact.apellido}
      </td>
        {contact.email}
      <td>
        {(contact.conect)?'Online':'OffLine'}
     </td>
     <td className="text-center fs-3">
        {contact.conect ? (
          <i
            onClick={() => {
              toggleConect(contact);
            }}
            style={{ color: "#7abb7a" }}
            className="bi bi-toggle-on"
          ></i>
        ) : (
          <i
            onClick={() => {
              toggleConect(contact);
            }}
            className="bi bi-toggle-off"
            style={{ color: "#a18d8d" }}
          ></i>
        )}
        <i
          onClick={() => {
            removeContact(contact);
          }}
          className="ms-2 text-danger bi bi-trash3-fill"
        ></i>
      </td>
    </tr>
  )
}

ContactComp.propTypes = {
contact: PropTypes.instanceOf(Contact)
}

export default ContactComp


