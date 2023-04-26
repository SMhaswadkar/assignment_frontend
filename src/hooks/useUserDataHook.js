import axios from 'axios';
import { useEffect, useState } from 'react';

const useUserDataHook = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        refersh();
    }, []);

    const refersh = () => {
        axios.get('http://localhost:5050/users')
        .then( res => setUserData( res?.data?.data))
        .catch( error => console.log( error));
      }

    const deleteUserRequest = ( _id ) => {    
        axios.delete('http://localhost:5050/users/delete-user/' + _id)
        .then( res => { console.log( res ); refersh() })
        .catch( error => console.log( error ));
      }

    return [userData, deleteUserRequest];
}

export default useUserDataHook