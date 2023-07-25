import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import state from './redux/state';


rerenderEntireTree(state);

//https://bit.ly/CRA-vitals
reportWebVitals();
