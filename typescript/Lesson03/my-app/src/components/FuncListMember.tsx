import React from 'react'
import FuncMember from './FuncMember'

export default function FuncListMember() {
  return (
    <div className='border p-3'>FuncListMember

        <h2>Danh sách thành viên</h2>
        <FuncMember name="Hai" age="21" />
        <FuncMember name="Tran" age="20" />
        <FuncMember name="Hai Tran" age="19" />

    </div>
  )
}
