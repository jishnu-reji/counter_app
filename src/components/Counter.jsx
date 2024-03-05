import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../counterSlice'

function Counter() {

  const [amount,setAmount] = useState()
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counterReducer.count)

  const handleIncrementAmount = () =>{
    if(amount){
      dispatch(incrementByAmount(amount))
      setAmount("")
    }
    else{
      alert("Enter a valid Amount")
    }
  }

  return (
    <div style={{width:"400px"}} className='border rounded p-3'>
        <h1 className='text-center mb-3' style={{fontSize:"80px"}}>{count}</h1>
        <div className="d-flex justify-content-around">
            <button onClick={()=>dispatch(decrement())} type="button" className="btn btn-warning">Decrement</button>
            <button onClick={()=>dispatch(reset())} type="button" className="btn btn-danger">Reset</button>
            <button onClick={()=>dispatch(increment())} type="button" className="btn btn-success">Increment</button>
        </div>

        <div className="d-flex justify-content-between mt-4">
            <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="text" className="form-control me-2" placeholder='Increment Amount'/>
            <button onClick={handleIncrementAmount} type="button" className="btn btn-primary">Increment by Amount</button>
        </div>
    </div>
  )
}

export default Counter