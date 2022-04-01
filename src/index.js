import {Request} from './requests'
import {UI} from './ui'

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmpButton = document.getElementById("update");


const request = new Request("http://localhost:3000/employees");
const ui = new UI();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded",getAllEmp);
    form.addEventListener("submit", addEmp);
    employeesList.addEventListener("click", updateOrDelete);
}

function getAllEmp(){
    request.get()
    .then(employees => {
        ui.addEmployeesToUI(employees);
    })
    .catch(err => console.log(err));
}
function addEmp(e){
    const employeeName = nameInput.value.trim();
    const employeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if (employeeName === "" || employeDepartment === "" || employeeSalary === "") {
        alert("Lütfen Doldurunuz");
    } else {
        request.post({
            name: employeeName,
            department: employeDepartment,
            salary: Number(employeeSalary)
        })
        .then(employee => {
            ui.addEmployeesToUI(employee);
        })
        .catch(err => console.log(err));
    }

    ui.clearInputs();
    e.preventDefault();
}

function updateOrDelete(e) {
    if (e.target.id === "delete-employee") {
        deleteEmp(e.target);
    } else if (e.target.id === "uptade-employee") {
        updateEmpController(e.target.parentElement.parentElement);
    }
}

function deleteEmp(targetEmp) {
    const id = targetEmp.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(id)
    .then(message => {
        ui.deleteFromEmpUI(targetEmp.parentElement.parentElement);
    })
    .catch(err => console.log(err));
}

function updateEmpController(targetEmp){
        ui.toogleUpdateButton(targetEmp);
}