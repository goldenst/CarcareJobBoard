import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <Link to='/job/add' className='btn btn-success btn-block'>
      <i className='fas fa-plus'></i> Add New Job
    </Link>
  )
}
