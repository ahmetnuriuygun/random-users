import React, { useEffect, useState } from 'react'
import axios from 'axios'
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"
import './PeopleAxios.css'

const PeopleAxios = () => {
    
    const[users,SetUser] = useState([]);

    useEffect(()=>{
        ChangeUsers();
        
    },[]);
   
    
    const ChangeUsers = () =>{
        axios
        .get("https://randomuser.me/api/")
        // .then((res)=> console.log(res.data.results[0]))
        .then((res)=> SetUser(res.data.results[0]))
        .catch((err)=> console.log(err))
};

console.log(users)


return (
    <div>
        <div className='container'>
            <div className='card'>

                <div className="div div2">
                    <img className="profile" src={users.picture?.large} alt="" />
                    <h3 className='name'>{users.name?.title} {users.name?.first} {users.name?.last}</h3>
                </div>

                <div className='div div1'>
                    <img className='icons' src={email} alt="" />
                    <h3>{users.email}</h3>
                </div>

                <div className='div div1'>
                    <img className='icons' src={phone} alt=""  />
                    <h3>{users.phone}</h3>
                </div>

                <div className='div1'>
                    <img className='icons' src={location} alt=""  />
                    <h3>{users.location?.city}-{users.location?.country}</h3>
                </div>

                <div className=' div div5'>
                    <h6>Age:{users.dob?.age}</h6>
                </div> 
                

                <div>
                    <h6>Register Date:{users.registered?.date.slice(0,10)}</h6>
                </div>
                
                
            
                
            
                </div>
        </div>      
        <button className='btn' onClick={ChangeUsers}>Change</button>
    </div>

    
  )
}

export default PeopleAxios




    



  