import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
// import {useState} from 'react'


const Signup=()=>{
    const History=useHistory()
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const PostData=()=>{
        fetch("http://localhost:3000/signup",{
        method:"post",    
        headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
                M.toast({html: data.error,classes:"#b71c1c red darken-4"})
            }
            else
            {
                M.toast({html:data.message,classes:"#2e7d32 green darken-3"})
                History.push('./signin')
            }
            
        }).catch(err=>{
            console.log(err);
        })
    }

    return(
        <div className='mycard'>
            <div className="card auth-card">
                
          <h2>Instagram</h2>
          <input
          type='text'
          placeholder="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input
          type='text'
          placeholder="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
           <input
          type='text'
          placeholder="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}

          />

           <button className="btn waves-effect waves-light #64b5f6 blue darken-1" type="submit" name="action"
           onClick={()=>PostData()}
           >
               Signup
           
            </button>
             <h5><Link to='/signin'>Already have an account?</Link>  
            </h5>

        </div>
        </div>
    )
}

export default Signup;