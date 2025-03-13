import { ApplicationConfig, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { DeclarativeProgrammingComponent } from './app/declarative-programming/declarative-programming.component';
import { MenuComponent } from './app/menu/menu.component';
import { TwoWayBindingComponent } from './app/two-way-binding/two-way-binding.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    template: `
        <a routerLink="/menu">back to menu</a> <br />
        <div style="padding: 16px;">
            <router-outlet></router-outlet>
        </div>
    `
})
export class App {
    name = 'Angular';
}

const appConfig: ApplicationConfig = {
    providers: [
        provideRouter([
            {
                path: 'menu',
                component: MenuComponent
            },
            {
                path: 'declarative-programming',
                component: DeclarativeProgrammingComponent
            },
            {
                path: 'two-way-binding',
                component: TwoWayBindingComponent
            },
            {
                path: '**',
                redirectTo: 'menu'
            }
        ])
    ]
};

bootstrapApplication(App, appConfig);
