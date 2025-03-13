import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-declarative-programming',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './declarative-programming.component.html',
    styleUrl: './declarative-programming.component.css'
})
export class DeclarativeProgrammingComponent {
    isShow = true;
    employeeList = [
        'Malvin', 
        'Thomas', 
        'Yusrin', 
        'Eugenius'
    ]

    toogleShowAndHide() {
        this.isShow = !this.isShow;
    }

    addEmployee(name: string) {
        this.employeeList.push(name);
    }
}
