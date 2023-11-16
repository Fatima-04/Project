/*
The sign in method will take user sign-in data from the view component,
then use fetch to make a POST call to verify the user with the backend
*/

const Signin = async (user) => {
    try {
        let respone = await fetch('/auth/signin/', {
            method : 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        //Return a promise w JWT token only if the sign-in is successful.
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

/*
The signout method use GET fetch to call te signpout API endpoint on the server
*/

const Signout = async () => {
    try {
        let response = await fetch('/auth/signout/', {
            method: 'GET'
        })
        //Return a promise
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export {Signin, Signout}