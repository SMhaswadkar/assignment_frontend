import React, {useState, useEffect} from 'react';

import axios from 'axios';

const useEditUserHook = (record_id) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUser( record_id );
    }, []);

    const getUser = ( _id ) => {    
        axios.get('http://localhost:5050/users/get-user/' + record_id)
        .then( res => { console.log( res ); setUserData( res?.data?.data) })
        .catch( error => console.log( error ));
      }

    return [userData];
}

export default useEditUserHook