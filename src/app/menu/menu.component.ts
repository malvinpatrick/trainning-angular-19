import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {}
