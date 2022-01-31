const loginButton = document.getElementById('button');

function checkResponse(res) {
    if (res.ok) {
        console.log('Success');
        console.log(res);
    } else {
        throw new Error(`The HTTP status of the response: ${res.status} (${res.statusText})`);
    }
}


function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let loguser = { username, password };
    console.log(loguser);

    fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(loguser),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => checkResponse(res))
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

loginButton.addEventListener("click", loginUser, false);