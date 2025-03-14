import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

interface Product {
    imageUrl: string;
    name: string;
    price: number;
    currency: string;
}

@Component({
  selector: 'app-daily-needs',
      standalone: true,
      imports: [CommonModule, ProductCardComponent],
  templateUrl: './daily-needs.component.html',
  styleUrl: './daily-needs.component.scss'
})
export class DailyNeedsComponent {
    products: Product[] = [
        {
            imageUrl: 'https://source.unsplash.com/300x200/?fresh-milk',
            name: 'Fresh Milk',
            price: 3.99,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?bread-loaf',
            name: 'Bread Loaf',
            price: 2.49,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?dozen-eggs',
            name: 'Eggs (dozen)',
            price: 4.99,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?toilet-paper',
            name: 'Toilet Paper',
            price: 5.99,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?laundry-detergent',
            name: 'Laundry Detergent',
            price: 12.99,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?toothpaste',
            name: 'Toothpaste',
            price: 3.49,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?soap-bar',
            name: 'Soap Bar',
            price: 1.99,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?paper-towels',
            name: 'Paper Towels',
            price: 4.99,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?dish-soap',
            name: 'Dish Soap',
            price: 3.99,
            currency: '$'
        },
        {
            imageUrl: 'https://source.unsplash.com/300x200/?hand-sanitizer',
            name: 'Hand Sanitizer',
            price: 2.99,
            currency: '$'
        }
    ];
}
