import React from 'react'

export default function FuncComp2(props: any) {
  return (
    <div>
        FuncComp2
        <h1>Bài tập</h1>    
        <div className = 'alert alert-info'>
            <p>Full name: {props.fullName}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <p>Address: {props.address}</p>
        </div>
    </div>

  )
}
