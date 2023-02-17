// let dataArr = JSON.parse(localStorage.getItem("formData")) || [];
let vaccinatedData = JSON.parse(localStorage.getItem("vaccinatedData")) || [];
let tbody = document.getElementById("body");

// values of id catch here to filter and sort
let filterByVaccine = document.getElementById("filterByVaccine");
let sortByAge = document.getElementById("sortByAge");
let filterByPriority = document.getElementById("filterByPriority");

showData(vaccinatedData);
function showData(vaccinatedData) {
    tbody.innerHTML = null;

    vaccinatedData.forEach((element, index) => {
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

        tr.append(name, age, designation, priority, vaccine);
        tbody.append(tr);
    })
}

// filter by types of vaccine
filterByVaccine.addEventListener("change", () => {
    vaccinatedData = JSON.parse(localStorage.getItem("vaccinatedData"))
    if (filterByVaccine.value === "Covishield") {
        let data1 = vaccinatedData.filter((element) => element.vaccine == "Covishield")
        showData(data1);
    } else if (filterByVaccine.value === "Covaxin") {
        let data2 = vaccinatedData.filter((element) => element.vaccine == "Covaxin")
        showData(data2);
    } else if (filterByVaccine.value === "Sputnik") {
        let data3 = vaccinatedData.filter((element) => element.vaccine == "Sputnik")
        showData(data3);
    } else {
        showData(vaccinatedData);
    }
})


//sort by age
sortByAge.addEventListener("change", () => {
    vaccinatedData = JSON.parse(localStorage.getItem("vaccinatedData"))
    if (sortByAge.value === "ascending") {
        vaccinatedData = vaccinatedData.sort((a, b) => a.age - b.age)
        showData(vaccinatedData);
    } else if (sortByAge.value === "descending") {
        vaccinatedData = vaccinatedData.sort((a, b) => b.age - a.age)
        showData(vaccinatedData);
    } else {
        vaccinatedData = JSON.parse(localStorage.getItem("vaccinatedData"))
        showData(vaccinatedData);
    }
})

//filter by priority
filterByPriority.addEventListener("change", () => {
    vaccinatedData = JSON.parse(localStorage.getItem("vaccinatedData"))

    if (filterByPriority.value == "p0") {
        let data1 = vaccinatedData.filter((element) => element.priority == "p0");
        showData(data1);
    } else if (filterByPriority.value == "p1") {
        let data2 = vaccinatedData.filter((element) => element.priority == "p1");
        showData(data2);
    } else if (filterByPriority.value == "p2") {
        let data3 = vaccinatedData.filter((element) => element.priority == "p2");
        showData(data3);
    } else if (filterByPriority.value == "p3") {
        let data4 = vaccinatedData.filter((element) => element.priority == "p3");
        showData(data4);
    } else {
        showData(vaccinatedData);
    }
})