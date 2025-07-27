import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx';

const NotesPage = () => {
    const [isRateLimited, setIsRateLimited] = useState(true);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchNotes = async () => {
            try {
                const  res = await fetch("http:localhost:5001/api/notes");
                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.log("Error fetching notes", error);
            }
        }
        fetchNotes();
    },[]);
  return (
    <div className='min-h-screen'>
        <Navbar />
        {isRateLimited && <RateLimitedUI />}
    </div>
  )
}

export default NotesPage