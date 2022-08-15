import React from 'react'
import Noentry from './Noentry';
import {firebase} from '../lib/firebase';
import NavBar from './components/NavBar';
import Starting from './components/Starting';
import Table from './components/Table';

const List = () => {
  if(firebase.auth().currentUser != null){
    return (
      <>
       <NavBar/>
       <hr/>
       <Starting/>
       <br/>
       <br/>
       <Table/>
      </>
    );
  }
  else{
    return <Noentry/>
  }
  }


export default List