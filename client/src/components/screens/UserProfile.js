import { findByLabelText } from '@testing-library/react';
import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from "../../App" 
import {useParams} from 'react-router-dom'

const Profile=()=>{
    const [UserProfile,setProfile]=useState(null)
    const [showfollow,setShowFollow]=useState(true)
    const {state,dispatch}=useContext(UserContext)
    const {userid}=useParams()
    useEffect(()=>{
        fetch(`/user/${userid}`,{
           headers:{ "Authorization":"Bearer "+localStorage.getItem('jwt')}

        }).then(res=>res.json())
        .then(result=>{

            setProfile(result)
        })

    },[])

    const followUser=()=>{
        fetch('/follow',{
            method:'put',
            headers:{
                "Content-Type":'application/json',
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({followId:userid})
            }).then(res=>res.json())
            .then(data=>{
                    console.log(data)
                    dispatch({type:'UPDATE',payload:{following:data.following,followers:data.followers}})
                    localStorage.setItem('User',JSON.stringify(data))
                    setProfile((prevState)=>{
                        return {
                            ...prevState,
                            user:{
                                ...prevState.user,
                                followers:[...prevState.user.followers,data._id]
                            }
                        }
                    })
                    setShowFollow(false)


            })
        
    }

    const unfollowUser=()=>{
        fetch('/unfollow',{
            method:'put',
            headers:{
                "Content-Type":'application/json',
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({unfollowId:userid})
            }).then(res=>res.json())
            .then(data=>{
                    console.log(data)
                    dispatch({type:'UPDATE',payload:{following:data.following,followers:data.followers}})
                    localStorage.setItem('User',JSON.stringify(data))
                    
                    setProfile((prevState)=>{
                        const newFollower=prevState.user.followers.filter(item=>item!==data._id)
                        return {
                            ...prevState,
                            user:{
                                ...prevState.user,
                                followers:newFollower
                            }
                        }
                    })

                    setShowFollow(true)


            })
        
    }


    return(
        <>
        {UserProfile?
        
        <div style={{maxWidth:"750px",margin:"0px auto"}}>
        <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px ",borderBottom:"2px  solid grey"}}   >
            <div>
                <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            </div>
            <div>
                <h4>{UserProfile.user.name}</h4>
                <h5>{UserProfile.user.email}</h5>
                <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                    <h6>{UserProfile.posts.length} post</h6>
                    <h6>{UserProfile.user.followers.length} followers</h6>
                    <h6>{UserProfile.user.following.length} following</h6>
                </div>

                {showfollow?
                
                <button  style={{margin:"20px"}} className="btn waves-effect waves-light #64b5f6 blue darken-1" type="submit" name="action"
                onClick={()=>followUser()} >
                follow
           
                </button>
                :

                <button style={{margin:"20px"}} className="btn waves-effect waves-light #64b5f6 blue darken-1" type="submit" name="action"
                onClick={()=>unfollowUser()} >
                unfollow
           
                </button>
                }


            </div>
        </div>


        <div className="gallary">

            {
                UserProfile.posts.map(item=>{
                    return(
        <img key={item._id} className="item" src={item.photo} alt={item.title}  />


                    )
                })
            }


            


        </div>
        </div>
        
        
        
        :<h2>loading.....</h2>}
        

        </>
        
    )
}

export default Profile;