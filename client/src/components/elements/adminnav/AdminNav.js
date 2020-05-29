import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import './AdminNav.css'
import './style'

const AdminNav = ({
    className,
    children
}) => {

  const history = useHistory()

    return (
        <div className="wrapper">
        <nav id="sidebar" className="px-3 pt-3 pb-5">
          {/* <!-- Step 2 --> */}
          <ul className="nav flex-column">
           <li className="nav-item mb-4">
              <h4>
                <a className="nav-link font-weight-bold text-white" href="#">LOGO</a>
              </h4>
            </li>
            <li className="nav-item my-2">
              <a className="nav-link text-white" href="#">
                <i className="fas fa-tachometer-alt"></i>
                Dashboard</a>
            </li>
            <li className="nav-item my-2">
              <a className="nav-link text-white" href="#">
                <i className="fas fa-book"></i>
                All Books</a>
            </li>
             <li className="nav-item my-2">
              <a className="nav-link text-white" href="#" onClick={()=>{
                localStorage.clear()
                 // dispatch({type:"CLEAR"})
                  history.push('/signin')
                window.location.reload()
               }}> Logout</a>
            </li>
          </ul>
          {/* <!-- Step 2 --> */}
        </nav>
        <div className="main-content">
          <nav className="navbar nav-bg py-3">
            <button type="button" id="sidebarCollapse" className="btn">
              <i className="fas fa-align-left icon-toggle"></i>
            </button>
          </nav>
          <div className={className}>{children}</div>
        </div>
      </div>
    )
}

export default AdminNav
