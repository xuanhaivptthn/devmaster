import React from 'react'

export default function JsxExpression() {

    const usrname = "Hai Tran";
    const user01 = {
        name: "Hai Tran",
        age: 20
    }

    // hàm
    const formatName = (u: any) => {
        return u.name + ': ' + u.age;
    }

    const element = (
        <div className='alert alert-danger'>
            <h2>Xin chao, {usrname}</h2>
            <h3>Welcome, {formatName(usrname)}</h3>
        </div>
    )

    const sum = (...nums:number[]):number=>{
        return nums.reduce((sum, nums) => sum+nums)
    }
  return (
    <div>
        JsxExpression

        <hr />
        <p>Xin chao: {usrname}</p>    
        <p>Ho ten: {user01.name} - Tuoi: {user01.age}</p>
        <p>Goi ham: {formatName(user01)}</p>
        {element}
        <hr />
        <p>Ket qua: {sum(1,2,3)}</p>
        <p>Ket qua 2: {sum(20,40,60,80)}</p>
    </div>
  )
}
