
import React, { useState, useEffect } from 'react';
import {axiosInstance} from '../redux/api/api'; // Потрібно замінити на власний екземпляр axios


const UsersPage = () => { 
    const [users, setUsers] = useState([]);



    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axiosInstance.get('accounts');
                const results = response.data.results;
                setUsers(results);
            } catch (error) {
                console.error(error);
            }
        };

        getUsers();
    }, []); 

    return (
        <>
        {users.map(user => (
            
           <div key={user.id}>
            <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.discription}</div>
           </div>
        ))}
        </>
    );
};

export default UsersPage;
