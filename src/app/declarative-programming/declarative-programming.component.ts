import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-declarative-programming',
    standalone: true,
    imports: [CommonModule, FormsModule],
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

    notes: string = 'This is a declarative programming component';

    toogleShowAndHide() {
        this.isShow = !this.isShow;
    }

    addEmployee(name: string) {
        this.employeeList.push(name);
    }
}
