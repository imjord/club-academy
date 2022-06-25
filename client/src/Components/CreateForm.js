import React, {useState} from 'react'
import axios from 'axios'
import './Form.css';


const CreateForm = () => {

    const [clubName, setClubName] = useState('');
    const [clubDescription, setClubDescription] = useState('');
    const [clubOwner, setClubOwner] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/clubs', {
            club_name: clubName,
            club_description: clubDescription,
            club_owner_id: clubOwner,
        })
        .then(res => {
            setClubName('');
            setClubDescription('');
            setClubOwner('');
        }
        )
    }

  return (
    <div className='form-main'>
        
        <div className='container'>
        <h1>Create a club</h1>
            <div className='form-container'>
            <form>
            <label>Club Name:</label>
            <input type='text' value={clubName} name='club_name' placeholder='Club Name'  onChange={(e) => setClubName(e.target.value)} />
            <label>Club Description:</label>
            <input type='text' name='club_description' value={clubDescription} placeholder='Club Description'  onChange={(e) => setClubDescription(e.target.value)}/>
            <label>Club Owner id</label>
            <input type='text' name='club_owner_id' placeholder='Club Owner ID'  value={clubOwner}  onChange={(e) => setClubOwner(e.target.value)} />
            <input type='submit' onClick={handleSubmit} value='Create Club'/>
            </form>
            </div>
     
        </div>
      
    </div>

  )
}

export default CreateForm