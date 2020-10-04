import React, from "react";

const CreatePost=()=>{

    

    return (
        <div className="card input-field" style={{margin:"30px auto", maxWidth:"600px",padding:"20px",textAlign:"center"}}  >
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>

            <div classNmae="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input  style={{visibility:"hidden"}}  type="file"  />
                </div>
                <div className="file-path-wrapper">
                <input className="file-path validate" type="text"  / >
                 </div>
            </div>

            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" type="submit" name="action">
               Post
           
            </button>



        </div>
    )


}


export default CreatePost;