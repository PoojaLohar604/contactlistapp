import { createStore } from "redux";
import ContactsAction from "./actions/ContactsAction.js"; 

const store = createStore(ContactsAction);

export default store;
