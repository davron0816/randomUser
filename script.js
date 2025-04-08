function changeUser() {
    fetch('https://randomuser.me/api/')
    .then(responive => responive.json())
    .then(data =>{
        let user = data.results[0];
        document.getElementById("userImage").src = user.picture.large;
        document.getElementById("userName").textContent = `${user.name.first} ${user.name.last}`
        document.getElementById("userPhone").textContent = user.phone;
        document.getElementById("userLocation").textContent = `${user.location.city} ${user.location.street}`
        document.getElementById("userAge").textContent = user.dob.age;
        document.getElementById("userEmail").textContent = `${user.email};`
    })

}