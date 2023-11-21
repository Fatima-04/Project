/*
Add methods for accessing each of the user CRUD API endpoints,
which the React components can use to exchange user data with
the server and database as required
*/

/* 
This is a create method, which take data from the view component.
This view component is where we invoke the create method.
*/
const create = async (user) => {
    try {
        //This method will use fetch to make a POST call at the API route '/api/users'
        //to create new user in the back end with the provided data from the front end. 
        let response = await fetch ('/api/users/', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringigy(user)
        })
        //This method returns a promise to the server
        //The component that calls this method can use this promise 
        //to handle the respone appropriately, depending on what is returned from the server
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

/* 
This list method will use fetch to make a GET call
to retrieve all the users in the database, and then return the response
from the server as a promise to the component
*/

const list = async (signal) => {
    try {
        let response = await fetch('/api/users/', {
            method: 'GET',
            signal: signal,
        })
        //This method returns a promise
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

/*
When the returned promise is resolved successfully,
it will give the component an array containing the user objects
that were retrieved from the database
*/

/*
The read method will use fetch to make a GET call
to retrieve a specific user by ID. 
However this is a protected route, besides passing the user ID as a parameter,
the method also must provide a valid credential (a valid JWT received after a succesful sign-in)
*/

const read = async (params, credentials, signal) => {
    try {
        let respone = await fetch('/api/users/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                //JWT is attached to the GET fetch call in the Authorization header
                //using a Bearer scheme
                'Authorization' : 'Bearer ' + credentials.t
            }
        })
        //This method return a promise
        //When this promise is resolved, it will give requested user details
        //or notify that access is restricted to authenticated users
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

/*
The updated method for specific user requires access to a protected route. 
Therefore, it will also needs to be passe valid JWT credentials 
for the PUT fetch call. 
*/

const update = async (params, credentials, user) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer' + credentials.t
            },
            body: JSON.stringify(user)
        })
        //Return a promise
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

/*
The remove method use fetch to make a DELETE call. 
This method allow the view component to delete a specific user from the database.
This is also a protected route that require valid JWT as a credential.
*/

const remove = async (params, credentials) => {
    try {
        let response = await fetch ('/api/users/' + params.userId, {
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json', 
                'Authorization' : 'Bearer' + credentials.t
            }
        })
        //This method returns a promise
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export {create, list, read, update, remove}