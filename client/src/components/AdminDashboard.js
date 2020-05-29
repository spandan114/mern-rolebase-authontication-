import React from 'react'
import AdminNav from './elements/adminnav/AdminNav'

function AdminDashboard() {

    const AdminDashcomponent = () => {
        return(
            <div>
            AdminDashboard
        </div>
        )
    }

    return (
        <AdminNav className="container-fluid">
         <div>{ AdminDashcomponent() }</div>
        </AdminNav>
    )
}

export default AdminDashboard
