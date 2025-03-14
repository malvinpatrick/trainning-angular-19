import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

interface Product {
    imageUrl: string;
    name: string;
    price: number;
    currency: string;
}

@Component({
    selector: 'app-technology',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './technology.component.html',
    styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
    products: Product[] = [
        {
            imageUrl: 'https://picsum.photos/id/1/300/200',
            name: 'Premium Headphones',
            price: 199.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/20/300/200',
            name: 'Smartwatch Pro',
            price: 249.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/30/300/200',
            name: 'Wireless Speaker',
            price: 89.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/40/300/200',
            name: 'Gaming Mouse',
            price: 59.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/50/300/200',
            name: 'Mechanical Keyboard',
            price: 129.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/60/300/200',
            name: 'External SSD 1TB',
            price: 149.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/70/300/200',
            name: 'Wireless Earbuds',
            price: 79.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/80/300/200',
            name: 'Ultra HD Monitor',
            price: 349.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/90/300/200',
            name: 'Gaming Console',
            price: 499.99,
            currency: '$'
        },
        {
            imageUrl: 'https://picsum.photos/id/100/300/200',
            name: 'Webcam HD Pro',
            price: 89.99,
            currency: '$'
        }
    ];

    carts = signal<string[]>([]);

    onAddProduct(productName: string): void {
        this.carts.update((prev) => [...prev, productName]);
    }
}
