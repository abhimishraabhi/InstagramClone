import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'


const Login=()=>{


    const History=useHistory()
    
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const PostData=()=>{
        fetch("/signin",{
        method:"post",    
        headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{

            console.log(data)

            if(data.error)
            {
                M.toast({html: data.error,classes:"#b71c1c red darken-4"})
            }
            else
            {
                localStorage.setItem("jwt",data.token)
                 localStorage.setItem("user",JSON.stringify(data.user))
                M.toast({html:"signed in successfully",classes:"#2e7d32 green darken-3"})
                History.push('./')
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
          placeholder="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}

          />

           <button className="btn waves-effect waves-light #64b5f6 blue darken-1" type="submit" name="action"
           onClick={()=>PostData()} >
               Login
           
            </button>

            <h5><Link to='/signup'>Don't have an account?</Link>
            </h5>

        </div>
        </div>
    )
}

export default Login;