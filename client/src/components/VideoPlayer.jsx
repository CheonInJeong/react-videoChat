import {React,useContext} from 'react';
import {SocketContext} from '../SocketContext';

const VideoPlayer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);
    return (
        <div>
           <div>
                <h2>Video Chat</h2>
                <div>
                    <div>My Video</div>
                    {
                        stream && (
                        <div>
                            {name || 'name'}
                            <video playsInline muted ref={myVideo} autoPlay/>
                        </div>
                        )
                    }
                    
                </div>
                <div>
                    <div>other Video</div>
                    {
                        callAccepted && !callEnded && (
                            <div>
                                {call.name || 'name'}
                                <video playsInline muted ref={userVideo} autoPlay/>
                            </div>
                        )
                    }
                </div>
           </div>
        </div>
    )
}

export default VideoPlayer;