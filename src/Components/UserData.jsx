
import React from "react";
import '../index.css';
import { Link } from "react-router-dom";
import { useUserProvider } from "./UserContext";
function UserData(){
    const {user} = useUserProvider()
    return(
        <>
        {user.map((user)=>{
            return <UserDesc key={user.id} user={user}/>
        })}
        </>
    )
}

function UserDesc({user}){
    return <>
    <div className="user-profile">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
    </svg>
    <ul>
        <li><span>ID : </span>{user.id}</li>
        <li><span>Full Name : </span>{user.name}</li>
        <li><span>User Name : </span>{user.username}</li>
        <li><span>Email : </span>{user.email}</li>
        <li><h5>Address</h5></li>
        <li> &nbsp; &nbsp; <span>Street : </span>{user.address.street}</li>
        <li> &nbsp; &nbsp; <span>Suite : </span>{user.address.suite}</li>
        <li> &nbsp; &nbsp; <span>City : </span>{user.address.city}</li>
        <li> &nbsp; &nbsp; <span>Zip Code : </span>{user.address.zipcode}</li>
        <br></br>
        <li><span>Phone : </span>{user.phone}</li>
        <li><span>Website : </span>{user.website}</li>
        <li><span>Company : </span>{user.company.name}</li>
    </ul>
    <Link to={'/'} >
        <button className="back-button" >Back</button>
    </Link>
    </div>
    </>
    
}
export default UserData