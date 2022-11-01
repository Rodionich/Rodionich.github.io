const regex_name = /^[А-ЯІЇ][А-Яа-яІЇії'\- ]+ [А-ЯІЇ]\.[А-ЯІЇ]\.$/;
const regex_tel = /^\([0-9]{3}\)\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}/;
const regex_idcard = /^[А-ЯІЇ]{2} №\d{6}$/;
const regex_faculty = /^[А-ЯІЇ]{4}/;
const regex_date = /^(0[1-9]|[1-2]\d|3[0-1])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;

const valide_name = (str) => regex_name.test(str);
const valide_tel = (str) => regex_tel.test(str);
const valide_idcard = (str) => regex_idcard.test(str);
const valide_faculty = (str) => regex_faculty.test(str);
const valide_date= (str) => regex_date.test(str);

const validetors = [valide_name, valide_tel, valide_idcard, valide_faculty, valide_date]

function clear_output() {
    const outputs = document.querySelectorAll(".post-container div");
    outputs.forEach(el => {
        el.textContent = el.textContent.slice(0, el.textContent.indexOf(":") + 1);
    });
}

function validate_input() {
    clear_output();
    const inputs = document.querySelectorAll("input");
    var f = true;

    for(var i = 0; i < 5; i++) {
        if(validetors[i](inputs[i].value))  {
            inputs[i].style.borderColor =  "blue";
        }
        else {
            inputs[i].style.borderColor =  "red";
            f = false;
        }
    }
    if(f) {
        const outputs = document.querySelectorAll(".post-container div");
        for(var i = 0; i < 5; i++) {
            outputs[i].textContent += " " + inputs[i].value;
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function random_color(el) {
    let red = getRandomInt(256);
    let green = getRandomInt(256);
    let blue = getRandomInt(256);
    el.style.background = `rgb(${red}, ${green}, ${blue})`;
}

function selected_color(el) {
    const pallete = document.querySelector('input[type="color"]');
    el.style.background = pallete.value;
}

function set_dbl() {
    console.log("nope");
    let table = document.querySelector("table");
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      random_color(row.cells[i]);
    }
}

