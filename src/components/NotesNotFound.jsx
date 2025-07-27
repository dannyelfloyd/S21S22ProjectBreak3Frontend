import { NotebookIcon } from "lucide-react";
import { Link } from "react-router"

const NotesNotFound = () => {
    return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
       <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon  className="size-10 text-primary"/> 
        </div>         
           <h3 className="text-2xl font-bold">No notes yeet</h3>
           <p className="text-base-cpntent/70">
             Ready to organize your thoughts? Create your frist note to get started on your journey.
           </p>
            <Link to="/create" className="btn btn-primary">
                Create your first Note
            </Link>
    </div>
 

    );
};  

export default NotesNotFound