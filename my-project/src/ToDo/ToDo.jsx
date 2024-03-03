import React, { useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function Form() {
    const [id, setId] = useState('');
    const [person, setPerson] = useState({
        name: '',
        age: '',
        email: ''
    });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.name && person.age && person.email) {
            const newPerson = { ...person, id: id || new Date().getTime().toString() };
            const updatedPeople = id ? people.map((p) => (p.id === id ? newPerson : p)) : [...people, newPerson];
            setPeople(updatedPeople);
            setPerson({ name: '', age: '', email: '' });
            setId('');
        }
    };

    const handleEdit = (id) => {
        const personToEdit = people.find((person) => person.id === id);
        if (personToEdit) {
            setId(id);
            setPerson({ ...personToEdit });
        }
    };

    const handleDelete = (id) => {
        const updatedPeople = people.filter((person) => person.id !== id);
        setPeople(updatedPeople);
        if (id === id) {
            setPerson({ name: '', age: '', email: '' });
            setId('');
        }
    };

    return (
        <article className="flex flex-col h-screen gap-2 justify-center items-center pt-12 bg-slate-400 mx-32">
            <form onSubmit={handleSubmit} className='bg-slate-200 p-8 rounded-xl flex flex-col gap-2 '>
                <div className='flex gap-2'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' name='name' value={person.name} onChange={handleChange} className='rounded-lg' />
                    <label htmlFor='age'>Age</label>
                    <input type="number" id='age' name='age' value={person.age} onChange={handleChange} className='rounded-lg' />
                    <label htmlFor='email'>Email</label>
                    <input type="text" id='email' name='email' value={person.email} onChange={handleChange} className='rounded-lg' />
                </div>

                <div className='flex justify-center'>
                    <button type='submit' className='px-4 w-fit py-2 bg-blue-400 rounded-xl'>
                        {id ? 'Update' : 'Submit'}
                    </button>
                </div>

            </form>
            <section className='bg-slate-300 w-full min-h-32 rounded-2xl flex justify-center items-center p-2'>

                <div className='flex gap-2 '>
                    {people.map((item) => {
                        return <div key={item.id} className='bg-white rounded-lg p-2 flex flex-col'>
                            <div> {item.name} </div>
                            <div> {item.age} </div>
                            <div> {item.email} </div>
                            <div className='flex justify-between'>
                                <button onClick={() => handleEdit(item.id)}><BiSolidEdit /></button>
                                <button onClick={() => handleDelete(item.id)}><MdDelete /></button>
                            </div>
                        </div>;
                    })}
                </div>

            </section>
        </article>
    );
}

export default Form;
