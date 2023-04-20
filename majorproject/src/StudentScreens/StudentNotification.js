import React, { useState,useEffect} from 'react'
import "./TAData"
import DisplayTaships from './DisplayTaships'
import TAData from './TAData';

export default function () {
    const[taShip,settaShip]=useState([])

    useEffect(() => {
        settaShip(TAData);
        console.log(TAData);
      }, []);

  return (
    <div>
         <div className='overflow-auto' style={{height:'90vh'}}>
            <h1 className='font-semibold  text-center m-3'>   TAship requirement</h1>
            <div className='my-3'>
                {taShip.map((e, i) => {
                    return <DisplayTaships e={e} key={i} />
                })}
            </div>
        </div>
    </div>
  )
}
