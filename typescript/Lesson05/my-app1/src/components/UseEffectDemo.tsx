import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
    // Callback
    useEffect(()=>{
        console.log("Callback function. Called every render")
    })

    // Callback with array
    useEffect(()=>{
        console.log("Callback function with array. Called every render")
    }, [])

    // callback w deps
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("Callback w deps", count)
    }, [count])
    return (
    <div className='alert alert-primary'>
        <h2>UseEffectDemo</h2>
        <button onClick={()=>setCount(count+1)}>Count +1: {count}</button>
    </div>
  )
}
