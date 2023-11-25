// api-user.js

const create = async (user) => {
    try {
        let response = await fetch('/api/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYwZmIxZmJiYTgyYjliMzIxY2VlYzAiLCJpYXQiOjE3MDA4NTkxMDR9.3Ex5lK_pd6TJmmqL1RDJCLRfjG-kQ1POJw-I6G_p4ik', // Include your JWT here
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const list = async (signal) => {
    try {
        let response = await fetch('/api/users/', {
            method: 'GET',
            signal: signal,
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const read = async (params, credentials, signal) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};



const update = async (params, credentials, user) => {
    try {
      let response = await fetch('/api/users/' + params.userId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(user)
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  const remove = async (params) => {
    try {
      let response = await fetch(`/api/users/${params.userId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + params.credentials.t
        }
      });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  };
  

export { create, list, read, update, remove};
