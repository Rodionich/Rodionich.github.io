function load_account() {
    const fetch_promise = fetch("https://randomuser.me/api");
    fetch_promise.then(response => {
        return response.json();
    }).then(user => {
        add_new_user(user.results[0]);
    });
}

function add_new_user(user_info) {
    const user = document.createElement("div");
    const image = document.createElement("img");
    const city = document.createElement("p");
    const country = document.createElement("p");
    const postcode = document.createElement("p");
    const email = document.createElement("p");

    user.setAttribute("class", "user");
    image.setAttribute("src", user_info.picture.large);
    
    city.innerHTML = "City: " + user_info.location.city;
    country.innerHTML = "Country: " + user_info.location.country;
    postcode.innerHTML = "Postcode: " + user_info.location.postcode;
    email.innerHTML = "Email: " + user_info.email;

    user.appendChild(image);
    user.appendChild(city);
    user.appendChild(country);
    user.appendChild(postcode);
    user.appendChild(email);

    const block = document.querySelector(".content");
    block.appendChild(user);
}