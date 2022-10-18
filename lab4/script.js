// task 1
const fourth_elem_id = document.getElementById("fourth-elem");
const fifth_elem_id = document.querySelector("#fifth-elem");

fourth_elem_id.addEventListener("click", function() {
    if(fourth_elem_id.style.color == "black") {
        fourth_elem_id.style.background = "grey";
        fourth_elem_id.style.color = "blue";
    } else {
        fourth_elem_id.style.background = "white";
        fourth_elem_id.style.color = "black";
    }
});

fifth_elem_id.onclick = function() {
    if(fifth_elem_id.style.color == "black") {
        fifth_elem_id.style.background = "grey";
        fifth_elem_id.style.color = "blue";
    } else {
        fifth_elem_id.style.background = "white";
        fifth_elem_id.style.color = "black";
    }
}


// task 2
function add() {
    const container = document.querySelector(".img")
    const img_link = document.createElement("a")
    const img = document.createElement("img")

    img_link.setAttribute("href", "https://en.parisinfo.com/");
    img.setAttribute("src", "https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/09/Berlin-e1505798693967.jpg");
   

    img_link.appendChild(img);
    container.appendChild(img_link);
}

function size_up() {
    const img_link = document.querySelector("a:last-child");
    const img = img_link.firstElementChild;
    img.style.height = (img.clientHeight * 1.5).toString() + "px";
}

function size_down() {
    const img_link = document.querySelector("a:last-child");
    const img = img_link.firstElementChild;
    img.style.height = (img.clientHeight * 0.75).toString() + "px";
}

function del() {
    const container = document.querySelector(".img");
    container.removeChild(container.lastChild);
}