import React, { useEffect, useState } from 'react'
import User from './User'
import Form from './Form'
import { useNavigate } from 'react-router-dom'

function Home({users}) {

    const displayUsers = users.map(user => <User key={user.id} user={user}/> )
  return (
    <div className='users'>

    {displayUsers}
    </div>
    
  )
}

export default Home