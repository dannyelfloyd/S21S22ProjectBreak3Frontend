import {useEffect, useState} from 'react';
import api from "../lib/axios.js";
import toast from 'react-hot-toast';
import {Link, useNavigate, useParams } from 'react-router';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NotesDetail = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams();
  console.log({id});

  useEffect(() => {
    const fechtNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };
    fechtNote();
  }), [id];

  console.log({note});
  
  const handleDelete = async () => {
    if (!window.confirm("¿Estas segura que quieres eliminar esta idea?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Idea eliminada");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note"), error;
      toast.error("Fallo al elimniar la idea");
    }
  };
  const handleSave = async () => {
    if(!note.title.trim() || !note.content.trim()) {
      toast.error("Por favor, añade un titulo");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Se ha actualizado correctamente");
    } catch (error) {
      console.log("Error saving the note", error);
      toast.error("Fallo al actualizar");
    } finally {
      setSaving(false);
    }
  };


  if(loading) {
    return (
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <div className='flex items-center justify-between mb-6'>
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Volver
            </Link>
            <button onClick={handleDelete} className='btn btn-error btn-outline'>
              <Trash2Icon className="h-5 w-5" />
              Borrar Idea
            </button>
          </div>
          <div className='card bg-base-100'>
            <div className='card-body'>

              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Titulo</span>
                  <input 
                  type="text"
                  placeholder='Titulo'
                  className='input input-bordered'
                  value={note.title}
                  onChange={(e) => setNote({...note, title: e.target.value})} />
                </label>
              </div>

              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Contenido</span>
                </label>
                <textarea 
                placeholder="Escribe aquí tu idea"
                className="textarea textarea-bordered h-32" 
                value={note.content}
                onChange={(e) => setNote({...note, content: e.target.value})} />
              </div>

              <div className="card-actions justify-end">
                <button className='btn  btn-primary' disabled={saving} onClick={handleSave}>
                  {saving ?"Guardando..." : "Guardar cambios"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NotesDetail;