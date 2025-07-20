import React from 'react'
type Props = {
  name:string;
  company:string;
};

export default function FuncComp1({name, company}: Props) {
  return (
    <div>
        <h2>Function component demo</h2>
        <hr />
        <p>My name is {name}</p>
        <p>Company: {company}</p>
    </div>
    
  )
}
