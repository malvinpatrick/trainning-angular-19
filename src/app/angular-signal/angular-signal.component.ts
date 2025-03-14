import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-angular-signal',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './angular-signal.component.html',
    styleUrl: './angular-signal.component.css'
})
export class AngularSignalComponent {
    employee = signal({
        data: ['Malvin', 'Thomas', 'Yusrin', 'Eugenius'],
        changes: 0
    });

    searchText = signal<string>('');

    filteredEmployee = computed(() => {
        return this.employee().data.filter((emp) => emp.toLowerCase().includes(this.searchText().toLowerCase()));
    });

    constructor() {}

    addEmployee(name: string) {
        this.employee.update((currentValue) => {
            return {
                data: [...currentValue.data, name],
                changes: currentValue.changes + 1
            };
        });
    }
}
