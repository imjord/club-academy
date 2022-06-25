import React from 'react'
import CreateForm from '../Components/CreateForm'
import { Link } from 'react-router-dom'

const CreateClub = () => {
  return (
    <div>
        <Link id='back-link' to="/clubs">Back to clubs</Link>
        <CreateForm />
        </div>
  )
}

export default CreateClub