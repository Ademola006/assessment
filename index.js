document.title = "AssessmentAPI"

let url = "https://randomuser.me/api"

const getUserInfo = () => {
    fetch(url).then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data);

        let profilePicture = document.querySelector("#profile-picture")
        profilePicture.src = data.results[0].picture.medium

        console.log(data.results[0]);

        

        let userName = document.querySelector("#username")
        userName.innerHTML = `UserName: ${data.results}[0].login.name.first`;

        let gender = document.querySelector("#gender")
        gender.textContent = `Gender: ${data.results[0].gender}`;

        let email = document.querySelector("#email")
        email.textContent = `Email: ${data.results[0].email}`

        let phone = document.querySelector("#phone")
        phone.textContent = `Phone: ${data.results[0]}`

        let location = document.querySelector("#location")
        location.textContent = `Location: ${data.results[0].location.city}`

    })
}
getUserInfo()
