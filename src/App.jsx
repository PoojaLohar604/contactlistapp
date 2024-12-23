import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarHead from "./components/NavbarHead";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      const formattedData = data.map((contact) => ({
        id: contact.id.toString(),
        name: contact.name,
        number: contact.phone,
        email: contact.email,
      }));

      dispatch({ type: 'FETCH_CONTACTS', payload: formattedData });
    };

    if (appState.length === 0) fetchContacts();
  }, [appState, dispatch]);

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <NavbarHead />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
