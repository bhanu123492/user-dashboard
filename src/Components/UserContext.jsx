import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
const UserProvider = createContext()
const UserContext = ({children}) => {
    const [users,setUsers] = useState([]);
    const [user,setUser] = useState();
    const [status,setStatus] = useState(true);
    const [singleStatus,setSingleStatus] = useState(false);
    const [userSearched,setuserSearched] = useState();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => {console.log(data.data);
          setUsers(data.data);
        }
        )
        .catch(error => console.log(error)
        )
      },[]);
      
      
      const deleteUser = (id)=>{
        console.log(users.filter((user)=>user.id===id));
        setUsers(users.filter((user)=>user.id!==id))
      };

      const getUserById = (id)=>{
        let data = users.filter((user)=>user.id == id);
        console.log(data);
        if(data.length>0){
        setuserSearched(data);
        setStatus(true);
        setSingleStatus(true);
      }
        else{
          setStatus(false);
          setSingleStatus(true);
        }
      }
      const selectedUser = (id)=>{
        let data = users.filter((user)=>user.id===id);
        console.log(data);
        if(data.length>0){
          setUser(data);
          setStatus(true);
        }
          else{
            setStatus(false)
          }
      }


  return (
    <UserProvider.Provider value={{users,deleteUser,getUserById,user,selectedUser,status,userSearched,singleStatus}}>
        {children}
    </UserProvider.Provider>
  )
}
const useUserProvider = ()=> useContext(UserProvider);
export {UserContext,useUserProvider}

 
