import {  ArrowLeftIcon, Icon } from 'lucide-react';
import { useState } from 'react';
import toast from 'react';
import { Link, useNavigate } from 'react-router';
import api from '../lib/axios';

const NotesCreated = () => {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            toast.error('All fields are required');
            return;
        }

        setLoading(true)
        try {
            await api.post('/notes',{
                title,
                content
            })
            toast.success('Note created successfully!');
            navigate('/')
        } catch (error) {
            console.log('Error creating note', error);
            toast.error('Error al crear la Idea');
            if (error.response.status === 429) {
                toast.error('Acción bloqueada. Estas creando demasiadas notas a la vez', {
                duration: 4000,
                Icon: '☠️',
                });
            }else {
                toast.error('Error al crear la idea');
            }
        }finally {
            setLoading(false)
        }
    }

  return <div className='min-h-screen bg-base-200'>
    <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
            <Link to={'/'} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5'/>
            Volver
            </Link>

            <div className='card bg-base-100'>
                <div className='card-body'>
                    <h2 className='card-title text-2xl mb-4'>Crear nueva idea</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-control mb-4'>
                            <label className='label'>
                            <span className='label-text'>Titulo</span>
                            </label>
                            <input type='text'
                            placeholder='Note Title'
                            className='input input-bordered'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className='form-control mb-4'>
                            <label className='label'>
                                <span className='label-text'>Contenido</span>
                            </label>
                            <textarea
                                placeholder='Escribe aquí tu idea...'
                                className='textarea textarea-bordered h-32'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>

                        <div className='card-actions justify-end'>
                            <button type='submit' className='btn btn-primary' disabled={loading}>
                                {loading ? 'Creando...' : 'Idea creada'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>;
  
};

export default NotesCreated