import React ,{useState,useEffect} from 'react'
import SampleData from '../SampleData'
import DisplayCard from './DisplayCard';

function AddProject() {
  const [value, setvalue] = useState(0)

  const [requested, setRequested] = useState([]);

  useEffect(() => {
    setRequested(SampleData);
    console.log(requested);
  }, []);
  return (
   
    <div style={{
      flex: 1,
    }}>
        <nav className="bg-gray-300 py-2">
          <ul className="flex justify-around">
            <li className="mx-4">&nbsp;&nbsp;&nbsp; 
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>{
              setvalue(0)
            }} >Requested</button>
            </li>
            <li className="mx-4">
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>{
              setvalue(1)
            }} >Accepted</button>
            </li>
            <li className="mx-4">
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>{
              setvalue(2)
            }} >Rejected</button>
            </li>
          </ul>
        </nav>
      {
        (value===0) && (
          <>
          <div className='overflow-auto' style={{height:'90vh'}}>
            <h1 className='font-semibold' > List of student requested for TAship</h1>
            <div className='my-3'>
                {console.log(requested)}
                {requested.map((e, i) => {
                    return <DisplayCard e={e} key={i} />
                })}
            </div>
        </div>
          </>
        )
      }
            {
        (value===1) && (
          <>
         <div className='overflow-auto' style={{height:'90vh'}}>
            <h1 className='font-semibold' > List of student requested for TAship</h1>
            <div className='my-3'>
                {console.log(requested)}
                {requested.map((e, i) => {
                    return <DisplayCard e={e} key={i} value={0}/>
                })}
            </div>
        </div>
          </>
        )
      }
            {
        (value===2) && (
          <>
          This is page 2
          </>
        )
      }
      
      

    </div>
  )
}

export default AddProject