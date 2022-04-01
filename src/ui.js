export class UI {
    constructor(){
        this.employeesList = document.getElementById("employees");
        this.updateEmpButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
    }

    addEmployeesToUI(employees){
        let result = "";

        employees.forEach(employee => {
            result += `<tr>                          
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>`
        });

        this.employeesList.innerHTML = result;
    }

    clearInputs(){
        this.nameInput.value = '';
        this.departmentInput.value = '';
        this.salaryInput.value = '';
    }

    addEmployeesToUI(employee){
        this.employeesList.innerHTML += `<tr>                          
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>`
    }
    deleteFromEmpUI(element) {
        element.remove();
    }
    toogleUpdateButton(target) {
        if (this.updateEmpButton.style.display === 'none') {
            this.updateEmpButton.style.display = 'block';

        } else {
            this.updateEmpButton.style.display = 'none';
        }
    }
}