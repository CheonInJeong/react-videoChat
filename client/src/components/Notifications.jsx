import {React,useContext} from 'react';
import {SocketContext} from '../SocketContext';

const Notifications = () => {
    const {call, callAccepted, answerCall} = useContext(SocketContext);
    return (
        <div>
           <div>
           {console.log(`${call}<---isRecived`)}
               {console.log(`${call.isReceivedCall}<---isRecived`)}
               {console.log(callAccepted+"<---callAccepted")}
             {call.isReceivedCall && !callAccepted && (
                 <div>
                     <h1>{call.name} is calling</h1>
                     <button onClick={answerCall}>Answer</button>
                </div>
             )}
           </div>
        </div>
    )
}

export default Notifications;