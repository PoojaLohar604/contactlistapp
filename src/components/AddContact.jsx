import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// function generateId() {
//     const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let id = '';

//     for (let i = 0; i < 8; i++) {
//         const randomIndex = Math.floor(Math.random() * alphanumeric.length);
//         id += alphanumeric.charAt(randomIndex);
//     }
//     return id;
// }
function generateId() {
  return Math.random().toString(36).substr(2, 8); // Generates a string ID
}

const AddContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelSubmit = e => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number)

        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkEmail) {
            return toast.error("This email already Exists!");
        }

        if (checkNumber) {
            return toast.error("This number already Exists!");
        }

        const id = generateId();
        const data = {
            id,
            name,
            email,
            number
        }

        dispatch({ type: 'ADD_CONTACT', payload: data });
        toast.success("Contact added successfully!!")
        navigate('/');
    };

    return (
        <div className='container-edit-page'>
            <h1 className='heading-of-edit'>Add Contact</h1>
            <div className='edit-contacts-details'>
                <div className='all-edit-contact'>
                    <form className='edit-form' onSubmit={handelSubmit}>
                        <div className='form-group'>
                            <input type='text' placeholder='Name' className='form-control'
                                value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <input type='email' placeholder='Email' className='form-control'
                                value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <input type='number' placeholder='Phone Number' className='form-control'
                                value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <input type='submit' value='Add Contact' className='update-button' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;
