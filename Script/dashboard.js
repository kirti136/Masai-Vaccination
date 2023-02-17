let dataArr = JSON.parse(localStorage.getItem("formData")) || [];
let vaccinatedData = JSON.parse(localStorage.getItem("vaccinatedData")) || [];
let tbody = document.getElementById("body")

// sort and filter id catched here
let filterByVaccine = document.getElementById("filterByVaccine");
let sortByAge = document.getElementById("sortByAge");
let filterByPriority = document.getElementById("filterByPriority");

// SHOW DATA FUNCTION
showData(dataArr);
function showData(dataArr) {
    tbody.innerHTML = null;

    dataArr.forEach((element, index) => {
        let tr = document.createElement("tr");

        let name = document.createElement("td");
        name.textContent = element.name;

        let age = document.createElement("td");
        age.textContent = element.age;

        let designation = document.createElement("td");
        designation.textContent = element.designation;

        let priority = document.createElement("td");
        priority.textContent = element.priority;

        let vaccine = document.createElement("td");
        vaccine.textContent = element.vaccine;

        let otp = document.createElement("td");
        otp.textContent = element.otp;

        let Delete = document.createElement("td");
        Delete.style.color = "red"
        // Delete.style.backgroundColor = "#ffd7d7"
        // Delete.style.fontWeight = "bold";

        Delete.textContent = "Delete";

        Delete.addEventListener("click", () => {
            dataArr.splice(index, 1);
            localStorage.setItem("formData", JSON.stringify(dataArr));
            showData(dataArr);
        })

        let Vaccinate = document.createElement("td");
        Vaccinate.style.color = "green"
        // Vaccinate.style.backgroundColor = "#e1fdf4"
        Vaccinate.textContent = "Vaccinate";
        // Vaccinate.style.fontWeight = "bold";

        Vaccinate.addEventListener("click", () => {
            a = prompt("Enter OTP")
            // if(a===element.otp){
            //     alert("successfull")
            // }else{
            //     alert("Wrong OTP")
            // }
            let promise = new Promise(function (resolve, reject) {
                if (a === otp.textContent) {
                    resolve("successfull")
                } else {
                    reject("wrong otp")
                }
            })
            promise
                .then((res) => {
                    alert(res)
                    setTimeout(() => {
                        alert(`${element.name}  Added to Queue`);
                    }, 0)

                    setTimeout(() => {
                        alert(`Vaccinating ${element.vaccine}`);
                    }, 5000)

                    setTimeout(() => {
                        alert(`${element.name} Vaccinated`);
                        vaccinatedData.push(element);
                        localStorage.setItem("vaccinatedData", JSON.stringify(vaccinatedData));

                        dataArr.splice(index, 1);
                        localStorage.setItem("formData", JSON.stringify(dataArr));
                        showData(dataArr);
                    }, 10000)

                })
                .catch((error) => {
                    alert(error);
                })
        })

        tr.append(name, age, designation, priority, vaccine, otp, Delete, Vaccinate);
        tbody.append(tr);
    })
}

// FILTER BY VACCINE
filterByVaccine.addEventListener("change", () => {

    dataArr = JSON.parse(localStorage.getItem("formData"))
    if (filterByVaccine.value === "Covishield") {
        let data1 = dataArr.filter((element) => element.vaccine == "Covishield")
        showData(data1);
    } else if (filterByVaccine.value === "Covaxin") {
        let data2 = dataArr.filter((element) => element.vaccine == "Covaxin")
        showData(data2);
    } else if (filterByVaccine.value === "Sputnik") {
        let data3 = dataArr.filter((element) => element.vaccine == "Sputnik")
        showData(data3);
    } else {
        showData(dataArr);
    }
    // let filteredData = dataArr.filter((element, index) => {
    //     if (element.vaccine === filterByVaccine.value) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
    // tbody.innerHTML = null;
    // filteredData.forEach((element, index) => {
    //     showData(filteredData);
    // })
})

// SORT BY AGE
sortByAge.addEventListener("change", () => {
    dataArr = JSON.parse(localStorage.getItem("formData"))
    if (sortByAge.value === "ascending") {
        dataArr = dataArr.sort((a, b) => a.age - b.age)
        showData(dataArr);
    } else if (sortByAge.value === "descending") {
        dataArr = dataArr.sort((a, b) => b.age - a.age)
        showData(dataArr);
    } else {
        dataArr = JSON.parse(localStorage.getItem("formData"))
        showData(dataArr);
    }
})

//FILTER BY PRIORITY
filterByPriority.addEventListener("change", () => {
    dataArr = JSON.parse(localStorage.getItem("formData"))

    if (filterByPriority.value == "p0") {
        let data1 = dataArr.filter((element) => element.priority == "p0");
        showData(data1);
    } else if (filterByPriority.value == "p1") {
        let data2 = dataArr.filter((element) => element.priority == "p1");
        showData(data2);
    } else if (filterByPriority.value == "p2") {
        let data3 = dataArr.filter((element) => element.priority == "p2");
        showData(data3);
    } else if (filterByPriority.value == "p3") {
        let data4 = dataArr.filter((element) => element.priority == "p3");
        showData(data4);
    } else {
        showData(dataArr);
    }
})