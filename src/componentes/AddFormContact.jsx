import React, { useRef } from "react";
import Contact from '../models/Contact.model';
import {Formik , Field, Form, FormikProps, ErrorMessage} from 'formik';
import * as Yup from 'yup';


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
   const initialvalues ={
    index : (0),
    nombre : (''),
    apellido : (''),
    email : (''),
    conect : ('Off Line'),
  }

    const addformSchema = Yup.object().shape(
    {
        nombre: Yup.string()
        .min(3,'Name too short')
        .max(18,'Name too long')
        .required('Name is required'),

        apellido: Yup.string()
        .min(3,'Lastname too short')
        .max(18,'Lastname too long')
        .required('Lastame is required'),

        email: Yup.string()
        .email('Invalid email format')
        .required('Name is required'),
      }
  )


  return (
   {/* <form onSubmit={handleAddContact}>
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
  */},
  <div>
      <h4>Add Contact Form with Formik</h4>
      <Formik
        initialvalues={initialvalues}
        //*Yup validation schema
        validationSchema={addformSchema}
        //* On submit wait 1 second and localstorage the data
        onSubmit={async(values)=>{
            await new Promise((r)=> setTimeout(r,1000));
            alert(JSON.stringify(values,null,2));
            localStorage.setItem('contactdata',values);
            handleAddContact()
        }}
        >
        {(touched,isSubmitting,values,errors) => (
                <Form>
                    <label htmlFor='nombre'>Name</label>
                    <Field id='nombre' type='string' name='nombre' placeholder='Name'/>
                    {errors.nombre && touched.nombre &&
                    (<ErrorMessage name='nombre' component='div'></ErrorMessage>)
                    }
                    <label htmlFor='apellido'>Lastname</label>
                    <Field id='apellido' type='string' name='apellido' placeholder='Lastname'/>
                    {errors.apellido && touched.apellido &&
                    (<ErrorMessage name='apellido' component='div'></ErrorMessage>)
                    }
                    <label htmlFor='email'>e-mail</label>
                    <Field id='email' type='email' name='email' placeholder='example@email.com'/>
                    {errors.email && touched.email &&
                    (<ErrorMessage name='email' component='div'></ErrorMessage>)
                    }
                    <button onSubmit type='submit'>Add Contact</button>
                    {isSubmitting?(<p>Adding a new contact...</p>):null}
                    
                </Form>
            )
            }
      </Formik>
    </div>
    );
};

export default AddFormContact;