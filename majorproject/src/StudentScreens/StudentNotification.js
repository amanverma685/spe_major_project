import React, { useState,useEffect} from 'react'
import "./TAData"
import DisplayTaships from './DisplayTaships'

import axios from "axios"

export default function () {
    const[taShip,settaShip]=useState([])
    const [iserror,setIsError]=useState("");
    const token=sessionStorage.getItem("token")
    // useEffect(() => {
    //     settaShip(TAData);
    //     console.log(TAData);
    //   }, []);

    useEffect(() => {
        getTaship();
      }, []);
    const getTaship = async () =>{
        try {
        const res= await axios.get("https://wche6pxyti.execute-api.ap-south-1.amazonaws.com/dev/ta_vacancy/get_ta_vacancy_list",
        {
            headers: {
                Authorization: "Bearer " + token,
            },   
        });
         settaShip(res.data)
         console.log("TA list")
        } catch (error) {
        setIsError(error.message);
        }
        // let config = {
        //     method: "get",
        //     maxBodyLength: Infinity,
        //     url:
        //     "https://wche6pxyti.execute-api.ap-south-1.amazonaws.com/dev/ta_vacancy/get_ta_vacancy_list"+
        //       {
        //     headers: {
        //       Authorization: "Bearer " + token,
        //     },
        //     }
        //   };
      
        //   await axios
        //     .request(config)
        //     .then((response) => {
        //       console.log(response.data)
        //       console.log("TA list")
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
    
    }
    

  return (
    <div>
         <div className='overflow-auto' style={{height:'90vh'}}>
            <h1 className='font-semibold  text-center m-3'>   TAship requirement</h1>
            <div className='my-3'>
              {/* {console.log(taShip)} */}
                {taShip.map((e, i) => {
                    return <DisplayTaships e={e} key={i} />
                })}
            </div>
        </div>
    </div>
  )
}
