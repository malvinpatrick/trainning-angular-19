import { Routes } from '@angular/router';
import { ProductShowcaseComponent } from './product-showcase.component';
import { TechnologyComponent } from './technology/technology.component';
import { DailyNeedsComponent } from './daily-needs/daily-needs.component';

export const PRODUCT_SHOWCASE_ROUTES: Routes = [
    {
        path: '',
        component: ProductShowcaseComponent,
        children: [
            {
                path: 'technology',
                component: TechnologyComponent
            },
            {
                path: 'daily-needs',
                component: DailyNeedsComponent
            },
            {
                path: '**',
                redirectTo: 'technology'
            }
        ]
    }
];
