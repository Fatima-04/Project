import React, { useState } from 'react';


//Take props in the argument that contain React Router variables
export default function signin(props){
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        //redirectToReferrer component from React Router
        redirectToReferrer: false
    })
}
