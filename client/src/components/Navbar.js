import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'



const Navbar= ()=>{

  const {state,dispatch}=useContext(UserContext)
  const history=useHistory()
  const renderList = ()=>{
    if(state){

      return [
        
        <li><Link to="/profile">profile</Link></li>,
        <li><Link to="/createpost">Create Post</Link></li>,
        <li><Link to="/myfollowingpost">My following Post</Link></li>,
        <li>
          <button className="btn waves-effect waves-light #b71c1c red darken-4" type="submit" name="action"
           onClick={()=> {
             localStorage.clear()
             dispatch({type:"CLEAR"})
            history.push('/signin')

           }
           } >logout
               
           
            </button>
        </li>
      ]

    }
    else
    {
      return [
        <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">signup</Link></li>

      ]

    }
  }

    return (
        <nav>
        <div className="nav-wrapper white" >
          <Link to={state?'/':'/signin'} className="brand-logo left">Instagram</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;