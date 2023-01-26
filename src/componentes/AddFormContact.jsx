import React, { useRef } from "react";
import Contact from "./Contact.model";

const AddFormContact = ({ addContact, amountContact }) => {
  const index = useRef();
  const nombre = useRef("");
  const apellido = useRef("");
  const email = useRef("");
  const conect = useRef("");

  const handleAddContact = (e) => {
    e.preventDefault();

    const newContact = new Contact(
      index.current.value,
      nombre.current.value,
      apellido.current.value,
      email.current.value,
      conect.current.value,
    );

    addContact(newContact);

    e.target.reset();
  };

  return (
    <form onSubmit={handleAddContact}>
      <h2 className="display-6 mb-2 mt-4">Add a Task</h2>
      <div className="row">
        <div className="col">
        <div className="form-group my-1">
            <input
              ref={index}
              type="text"
              id="index"
              nombre="nombre"
              placeholder="Insert index..."
              className="form-control"
            ></input>
          <div className="form-group my-1">
            <input
              ref={nombre}
              type="text"
              id="nombre"
              nombre="nombre"
              placeholder="Insert name..."
              className="form-control"
            ></input>
          </div>
          <div className="form-group my-1">
            <input
              ref={apellido}
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Insert lastname..."
              className="form-control"
            ></input>
          </div>
          <div className="form-group my-1">
            <input
              ref={email}
              type="text"
              id="email"
              name="email"
              placeholder="Insert your email..."
              className="form-control"
            ></input>
          </div>
        </div>
        <div className="col">
          <div className="form-group my-1 w-100">
            <label className="my-1" htmlFor="Connected">
              Connected:
            </label>
            <select
              name="conect"
              id="conect"
              className="form-control"
              defaultValue="Off Line"
              ref={conect}
            >
              <option value="On Line">On Line</option>
              <option value="Off Line">Off Line</option>
            </select>
          </div>
        </div>
       </div>
      </div>
      <div className=" form-group text-center">
        <button className="btn btn-success m-2" type="submit">
          {amountContact > 0 ? "Add Contact" : "Create First Contact"}
        </button>
      </div>
    </form>
  );
};

export default AddFormContact;