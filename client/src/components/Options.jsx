import {React,useContext,useState} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {SocketContext} from '../SocketContext';
const Options = ({children}) => {
    const {me, name, callAccepted, setName, leaveCall, callEnded,callUser} = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div>
           
                <input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <CopyToClipboard text={me}>
                    <button>copy your ID</button>
                </CopyToClipboard>
           
                <input placeholder="idToCall" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)}/>
                {callAccepted && !callEnded ? (
                    <button onClick={leaveCall}>Hang up</button>
                ) : (
                    <button onClick={()=>callUser(idToCall)}>Call</button> //callback으로 놓지 않으면 자바스크립트가 자동으로 실행시킴..why? idk..
                )}
          {children}
          {console.log(children)}
        </div>
    )
}

export default Options;