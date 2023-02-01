import React,{useRef} from 'react';
import {Formik , Field, Form, ErrorMessage} from 'formik';
import Contact from './src/models/Contact.model';
import * as Yup from 'yup';


const addcontactformik =({addContact, amountContact})=> {
    const initialvalues ={
        index : (contact.lenght+1),
        nombre : useRef(''),
        apellido : useRef(''),
        email : useRef(''),
        conect : useRef('Off Line'),
    }
    const handleAddContactformik = (e) => {
        e.preventDefault();
    
        const newContact = new Contact(
          index.current.value,
          nombre.current.value,
          apellido.current.value,
          email.current.value,
          conect.current.value,
        );
    
        addContact(newContact);

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
            localStorage.setItem('contactdata',values)
        }}
        >
        {({values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur})=>(
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
                    <button type='submit'>Add Contact</button>
                    {isSubmitting?(<p>Adding a new contact...</p>):null}
                </Form>
            )
            }
      </Formik>
    </div>
  )}
}

export default addcontactformik
