import React, { useState } from 'react'

export default function UseStateDemo() {
    // khởi tạo state
    const [count, setCount] = useState(0);
    
    // state là 1 mảng
    const listInit = [1,3,2,4,5]
    const [list, setList] = useState(listInit)

    // add random num to list
    const handleList = ()=>{
        setList([
            ...list,
            parseInt((Math.random()*100).toString())
        ])
    }

    // state là object
    const personInit = {
        id: 11,
        name: "Hai Tran",
        age: 20
    }
    const [person, setPerson] = useState(personInit);

    return (
    <div className='alert alert-danger'>
        UseStateDemo
        <p>Count: {count} </p>
        <div>
            <button onClick={() => setCount(count+1)}> Add 1</button>
            <button onClick={() => setCount(count-1)}> Minus 1</button>
        </div>
        <hr />
        <h3>List: {list.toString()}</h3>
        <button onClick={handleList}>Add a random num</button>
        <hr />
        <h3>Person: {person.name}, {person.age}</h3>
    </div>
  )
}
