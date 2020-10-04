import { findByLabelText } from '@testing-library/react';
import React from 'react'


const Profile=()=>{

    return(
        <div style={{maxWidth:"750px",margin:"0px auto"}}>
            <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px ",borderBottom:"2px  solid grey"}}   >
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div>
                    <h4>Abhishek</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>40 post</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>


            <div className="gallary">

            <img className="item" src="https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            <img className="item" src="https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            <img className="item" src="https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            <img className="item" src="https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>

                


            </div>
        </div>
        
    )
}

export default Profile;