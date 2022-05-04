import React, {useState} from 'react';

function CreateEvent(props){

 const [note,setNote]=useState({eTitle:"",eDate:"",ePrice:"",eLocation:"",eDescription:""})   

function handleChange(event)
{
    const {name,value}=event.target;
    setNote((prevNote) => 
    {
        return {
            ...prevNote,
            [name]:value
        };
    });
}

function handleEeventAdd(event)
{
    props.onAdd(note);
    event.preventDefault();
}
    return (
        <div>
        <form>
            <input onChange={handleChange} name="eTitle" placeholder="Event Name" value={note.title}/>
            <input onChange={handleChange} name="eDate" placeholder="Date" value={note.date}/>
            <input onChange={handleChange} name="ePrice" placeholder="Price" value={note.price}/>
            <input onChange={handleChange} name="eLocation" placeholder="Location" value={note.lcoation}/>
            <textarea onChange={handleChange} name="eDescription" placeholder="Describe event" rows="2" 
            value={note.description}/>
            <button onClick={handleEeventAdd}>Add</button>
        </form>
        </div>
    );
}

export default CreateEvent;