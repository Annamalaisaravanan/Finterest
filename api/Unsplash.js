import  React from 'react';
import axios from 'axios';


export default axios.create({
    baseUrl:"https://api.unsplash.com/",
    headers:{
          Authorization: "Client-ID qDBbcZWvg8IDiclyFTLoXM4UAgiUMI1hLiEouxjKrso"
    }
})


