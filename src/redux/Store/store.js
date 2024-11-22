import { createStore, applyMiddleware } from 'redux';  // Assure-toi d'importer createStore et applyMiddleware
import {thunk} from 'redux-thunk';  // Redux Thunk pour gérer les actions asynchrones
import rootReducer from '../Reducers/Index'; // Vérifie que le chemin vers ton reducer est correct

// Création du store avec redux-thunk middleware
const store = createStore(
  rootReducer, // Root reducer combinant tous les reducers
  applyMiddleware(thunk)  // Application de redux-thunk pour gérer les actions asynchrones
);

export default store;

