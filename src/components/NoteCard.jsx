import { Link } from 'react-router'

const NoteCard = ({note}) => {
  return (
    <Link to={`/note/${note._id}`}>
        <div className='card bg-base-100 hover:'>
            <h3 className=''></h3>
        </div>
    </Link>
  )
}

export default NoteCard