import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/CaracterItem.css'

const CaracterItem = ({url}) => {

    const [character, setCharacter] = useState({ });

    useEffect(( )=>{
        axios.get(url)
        .then(res => setCharacter(res.data))
    }, [url])

    return (
        <div className='Caracter-item'>
            <div className='image-container'>
                <img src={character.image} alt="" />
            </div>

            <div className='character-info'>

                <p className='character-name'>{character.name}</p   >
                <p className='status'>{character.species}</p>
                <div className='origin-container'>
                    <p className='origin'>Origin:</p>
                    <p>{character.origin?.name}</p>
               </div>
               <div className='episodes-container'>
                   <p className='episodes'>Episodes where appear:</p>
                   <p>{character.episode?.length}</p>
              </div>

              <div className='status-container'>
                  {
                      character.status === 'Alive' ? (
                          <p><i className='bx bxs-heart' style={{color: "Green"}}></i>{character.status}</p>
                      ) : (
                          character.status === 'Dead' ? (
                              <p><i className='bx bxs-skull' style={{color: "red"}}></i>{character.status}</p>
                          ) : (
                              <p><i className='bx bx-question-mark' style={{color: "gray"}}></i>{character.status}</p>
                          )
                      )
                  }
              </div>
              
            </div>
        </div>
    );
};

export default CaracterItem;