import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
    readonly imageUrl = input<string>();
    readonly name = input<string>();
    readonly price = input<number>();
    readonly currency = input<string>('$');

    protected formattedPrice = computed(() => this.price()?.toFixed(2));

    readonly addProduct = output<string>();

    onAddClick(): void {
        this.addProduct.emit(this.name() ?? '');
    }
}
