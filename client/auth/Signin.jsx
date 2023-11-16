import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';


//Take props in the argument that contain React Router variables
export default function Signin(props){
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        //redirectToReferrer component from React Router
        //will be set to true when the user successfully signs in
        redirectToReferrer: false
    })

    const clickSubmit = () => {
        const user = {
            //Create user object with values taken from the 'values' state
            email: values.email || undefined,
            password: values.password || undefined
        }

        //Calls the signin fetch method to sign-in the user with the backend
        Signin(user).then((data) => {
            if(data.error){
                //if there's error, set the error in state
                setValues({...values, error: data.error})
            } else {
                //auth.authenticate() method from auth-helper.js
                //will save the received JWT credentials in local storage
                auth.authenticate(data, () => {
                    setValues({...values, error: '', redirectToReferrer: true})
                })
            }
        })

        //Define a 'from' variable using the location state from the props
        const {from} = props.location.state || {
            //Or default to the home path
            from: {
                pathname: '/'
            }
        }

        //If redirectToReferrer is true, redirect the user to the page they were on
        const {redirectToReferrer} = values
        if(redirectToReferrer){
            return (<Redirect to={from}/>)
        }

    }
}
