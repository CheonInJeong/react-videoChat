import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
    return (
        <div>
           <div>
               <h2>Video Chat</h2>
               <VideoPlayer/>
               <Options>
                    <Notifications/>
               </Options>
           </div>
        </div>
    )
}

export default App;