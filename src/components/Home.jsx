import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdAddReaction } from "react-icons/md";
import { BiSolidMessageRoundedEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";


const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <div className="home-page-container">
      <div className="home-page-main-content">
        <Link to={"/add"}>
        <button className="add-contact-button"><MdAddReaction /> Add Contact</button>
        </Link>
      </div>
      <div className="all-list-of-apis">
        <div className="heading-of-list-and-data">
          <div className="heading-list">
            <h5>#</h5>
            <h5>Name</h5>
            <h5>Email</h5>
            <h5>Number</h5>
            <h5>Action</h5>
          </div>
        </div>
      </div>
      <div className="contact-list-data">
            {contacts.map((contact, id) => (
              <div key={id} className="main-data-of-list">
                <p>{id + 1}</p>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.number}</p>
                <div className="both-buttons">
                  <Link
                    to={`/edit/${contact.id}`}
                    className="edit-button"
                  >
                    Edit
                    <BiSolidMessageRoundedEdit />
                  </Link>
                  <button
                    type="button"
                    onClick={() => deleteContact(contact.id)}
                    className="delete-button"
                  >
                    Delete
                    <RiDeleteBin6Fill />
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
