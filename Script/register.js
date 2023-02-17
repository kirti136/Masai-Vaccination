let id = document.getElementById("unique-id")
let name = document.getElementById("name")
let age = document.getElementById("age")
let priority = document.getElementById("priority")
let vaccine = document.getElementById("vaccine")
let formSubmit = document.getElementById("registration-form")
let dataArr = JSON.parse(localStorage.getItem("formData")) || [];
id.value = generateId();

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = {
        unique_id: id = generateId(),
        name: name.value,
        age: age.value,
        designation: document.querySelector('input[name="designation"]:checked').value,
        priority: priority.value,
        vaccine: vaccine.value,
        otp: a = generateOTP(),
    }
    allAlerts(formData);
})


//***************************************TO GENERATE RANDOM ID*********************************
function generateId() {
    let id = "";
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 1, 3, 4, 5]
    let symbols = ['!', '@', '#', '$', '&', '*', '+', '-', '!', '_', '#', '$', '&', '*', '+', '-', '!', '@', '#', '$', '&', '*', '+', '-', '!', '@']

    for (let i = 0; i < alphabets.length; i++) {
        let randomStr = Math.floor(Math.random() * alphabets.length);
        let item1 = alphabets[randomStr];

        let randomNumber = Math.floor(Math.random() * numbers.length);
        let item2 = numbers[randomNumber];

        let randomSymbol = Math.floor(Math.random() * symbols.length);
        let item3 = symbols[randomSymbol];

        id += item1 + item2 + item3 + item1.toUpperCase();

        if (id.length === 8) {
            break;
        }
    }

    let flag = false;
    dataArr.forEach(element => {
        if (element.unique_id == id) {
            flag = true;
        }
    });

    if (flag == false) {
        return id;
    } else {
        generateId();
    }
}

/// *************************************** ALERTS ******************************************
function allAlerts(obj) {
    if (obj.name.length >= 4) {
        if (obj.age >= 18 && obj.age <= 40) {
            dataArr.push(obj);
            localStorage.setItem("formData", JSON.stringify(dataArr));
            formSubmit.reset();
        } else {
            alert("Age cannot be less than 18 or greater than 40")
        }
    } else {
        alert("Name should be at least 4 characters")
    }
}

//********************* OTP GENERATOR*********************
function generateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}