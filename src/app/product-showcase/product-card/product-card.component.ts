import { Component, computed, input, Input } from '@angular/core';

@Component({
    selector: 'app-product-card',
    standalone: true,
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
    readonly imageUrl = input<string>();
    readonly name = input<string>();
    readonly price = input<number>();
    readonly currency = input<string>('$');

    protected formattedPrice = computed(() => this.price()?.toFixed(2));
}
