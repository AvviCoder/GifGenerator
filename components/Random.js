import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';
export const Random = () => { 
     
    const API_KEY= 'PLOjHdLLRfC26HREOIfLnY50Lw9a9YZL';
   
    const[gif, setGif] = useState('');
    const [loading, setloading] = useState("false");

    async function fetchData() {
        setloading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const response = await axios.get(url);
         // destructing of data we got through API call 
        const { data } = response.data;
        const imageSource = data.images.downsized_large.url;
        setGif(imageSource);
        console.log(data);
        setloading(false);
      }
      
    
    useEffect( () =>{
       fetchData();
    },[])

    function clickhandler()
    {
         fetchData();
    }
    return (
    <div className='w-1/2  bg-green-500 border-black border
    rounded-lg flex flex-col gap-y-5 '>
        <h1 className='text-center uppercase underline 
        text-2xl font-bold'>Random Gif</h1>
       
       {
        loading ? (<Spinner/>):( <img src={gif} className='p-3' />)
       }
       
       
       
       
        <button onClick={clickhandler} 
         className='bg-white w-10/12 mx-auto font-bold rounded-lg text-lg mb-[20px]
         bg-yellow-300'>
            Generate
        </button>
    </div>
  )
}
