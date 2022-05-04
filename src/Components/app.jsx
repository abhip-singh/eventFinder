import React, { useState } from 'react';
import Header from './header';
import CreateEvent from './createEvent';
import ToGo from './togo'

function App() {
    const [eevents, setEevents] = useState([]);
    function AddEvent(newEevent) {
        setEevents(prevEvents => {
            return [...prevEvents, newEevent];
        });
    }
    function deleteEevent(id){
        setEevents(prevEvents => {
            return prevEvents.filter((eventItem, index) => {
                return index!==id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateEvent onAdd={AddEvent} />
            {eevents.map((eventItem,index) => {
                return (
                    <ToGo key={index} id={index} title={eventItem.eTitle} date={eventItem.eDate} price={eventItem.ePrice}
                    location={eventItem.eLocation} description={eventItem.eDescription}  onDelete={deleteEevent}/>
                );
            })}
            {/* <ToGo key={1} title="Event Name" date="22-Feb-2022" 
            price ="2000 Rs" location="Delhi" description="This is an event you must attend" /> */}
        </div>
    );
}

export default App;