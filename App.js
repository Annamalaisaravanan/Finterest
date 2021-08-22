
import './App.css';
import React, { useState,useEffect } from 'react';
import Mainboard from './Pages/Mainboard';
import {Route,Switch,BrowserRouter, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Pages/Header';
import Axios from 'axios';
import unsplash from './api/Unsplash';
import { PinDropSharp } from '@material-ui/icons';

function App(){


    const [pins,setpins] = useState([])


const getImages = (term) =>{
    console.log("Entered get Images")
    return unsplash.get("https://api.unsplash.com/search/photos",{
     params: {
         query: term
        }
    });
};


const getNewPins = () =>{
   let promises =[];
   let pinData = [];

   let pins =['ocean','Tokyo','dogs','cats','mac']

   pins.forEach((pinTerm) =>{
       promises.push(
           getImages(pinTerm).then((res)=>{
               let results = res.data.results;

               pinData = pinData.concat(results);

               pinData.sort(function (a,b){
                   return 0.5 - Math.random();
               });
           })
       );
   });
    Promise.all(promises).then(()=>{
          setpins(pinData);
    });
};

useEffect(()=>{
    getNewPins();
},[]);



const onSearchSubmit = (term) =>{
      getImages(term).then((res)=>{
              let results = res.data.results;

              let newPins = [
                  ...results,
                  ...pins,
              ]

              newPins.sort(function(a,b) {
                  return 0.5 - Math.random();
              });
              setpins(newPins);
      })
}

    return(
        <div className='App'>
                     <Header onSubmit={onSearchSubmit}/>
                     <Mainboard  pins={pins}/>
        </div>
    )
}


export default App;
 