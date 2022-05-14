import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CaracterItem from './CaracterItem';
import '../styles/Caracter.css'

const Caracter = () => {

    const [location, setLocation] = useState([]);
    const [id, setId] = useState("");

    useEffect(()=>{
        const random = Math.floor(Math.random() * 20) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res => setLocation(res.data))
    },[]);

    // Search button
    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then((res) => setLocation(res.data));
    }

    // Aleatory button
    const randomChange = () => {
        const random = Math.floor(Math.random() * 20) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res => setLocation(res.data));
    }

    return (
        <div className='Caracter'>

           <div className='search'>
                <button className='btn1' onClick={searchType}><i className='bx bx-search'></i></button>
                <input type="text" onChange={(e) => setId(e.target.value)} value={id} placeholder="type a location id"/>
                <button className='btn2' onClick={randomChange}><i className='bx bx-rotate-right'></i></button>
           </div>

           <div className='location-container'>
               <h3 className='name'>{location.name}</h3>
               <div className='description'>
               <p><span>Type: </span>{location.type}</p>
               <p><span>Dimension: </span>{location.type}</p>
               <p><span>Population: </span>{location.residents?.length}</p>
               </div>
           </div>

           <div className='caracter-item-container'>
               {
                   location.residents?.length === 0 ? (
                       <h3>This place is uninhabited</h3>
                   ) : (
                       <>
                       <h3>Characters</h3>
                       <div className='character-box'>
                           {location.residents?.map((resident) => (
                           <CaracterItem url={resident} key={resident}/>
                           ))}  
                       </div>
                       </>
                   )
               }
           </div>

        </div>
    );
};

export default Caracter;