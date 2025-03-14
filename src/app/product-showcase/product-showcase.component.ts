import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-product-showcase',
    templateUrl: './product-showcase.component.html',
    styleUrls: ['./product-showcase.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterLink, RouterModule]
})
export class ProductShowcaseComponent {}
