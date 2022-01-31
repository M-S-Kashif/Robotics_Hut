const submitButton = document.getElementById('button');

function checkResponse(res) {
    if (res.ok) {
        // everything went fine...
        console.log('Success');
        console.log(res);
    } else {
        throw new Error(`The HTTP status of the response: ${res.status} (${res.statusText})`);
    }
}


function registerUser(event) {
    event.preventDefault();
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let newuser = {firstname, lastname, email, username, password};
    console.log(newuser);
    fetch('http://localhost:8080/register', {
        method: 'POST',
        body: JSON.stringify(newuser),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => checkResponse(res))
        .catch(err => console.log(err))
}

submitButton.addEventListener("click", registerUser, false);