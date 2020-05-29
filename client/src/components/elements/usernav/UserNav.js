import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import { isAuthenticated } from '../../../auth'

function UserNav() {

  const history = useHistory()

  const renderList = ()=>{
  
   if(isAuthenticated() && isAuthenticated().user.role == 0){
      return[
      <li className="nav-item active" key="2">
         <Link className="nav-link" to="#"
         onClick={()=>{
          localStorage.clear()
          // dispatch({type:"CLEAR"})
           history.push('/signin')
          window.location.reload()
         }}
         >logout <span className="sr-only">(current)</span></Link>
      </li>
      ]
    }
    else{
      return [
        <li className="nav-item active" key="0">
        <Link className="nav-link" to="/signin">Login <span className="sr-only">(current)</span></Link>
      </li>,
      <li className="nav-item active" key="1">
        <Link className="nav-link" to="/signup">Register <span className="sr-only">(current)</span></Link>
      </li>
      ]
    }
  }

    return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      {renderList()}
    </ul>
  </div>
</nav>
    )
}

export default UserNav
