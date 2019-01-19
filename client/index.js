import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import {addFavorite, removeFavorite, addWatchLater, RemoveWatchLater, authenticate,signup,search,logout} from './client/actions'


const store = createStore(appState);

ReactDOM.render(
  <App 
  currentState = {store.getState()}
  onAddFavorite = {()=>{store.dispatch(addFavorite())}}
  onRemoveFavorite = {()=>{store.dispatch(removeFavorite())}}
  onAddWatchLater = {()=>{store.dispatch(addWatchLater())}}
  onRemoveWatchLater = {()=>{store.dispatch(removeWatchLater())}}
  onLogin = {()=>store.dispatch(authenticate())}
  onSignup = {()=>store.dispatch(signup())}
  onSearch = {()=>store.dispatch(search())}
  onLogout = {()=>store.dispatch(logout())}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);