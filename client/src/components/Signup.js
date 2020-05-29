import React,{useContext,useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { isAuthenticated } from '../auth'
import { AuthContext } from '../contexts/AuthContect'

function Signup() {

    const {state,dispatch} = useContext(AuthContext)
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [err , setErr] =useState("")
    const history = useHistory()


    useEffect(() => {
        
        if(state ){
            history.push("/admin/dashboard")
        }
        if(state && state.role == 0 ){
         history.push("/user/dashboard")
        }

      }, [ state !== null ])


    const clickSubmit = (e) => {
        e.preventDefault();

      fetch("/auth/register",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    }).then(res=>res.json())
    .then(data=>{
       if(data.error){
        setErr(data.error)
       }
       else{
           history.push("/signin")
           console.log(data.message)
       }
    }).catch(err=>{
        console.log(err)
    })

    }

    return (
        <div className="container pt-5">
            
            {
                err?
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>{err}</strong> 
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
            </div>  :""
            }
            

             <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input  type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input  type="password" className="form-control" value={password} onChange={(e)=>setPasword(e.target.value)} />
            </div>
            <button  className="btn btn-primary">
                Submit
            </button>
        </form>
        </div>
    )
}

export default Signup

