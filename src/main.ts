import { ApplicationConfig, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { DeclarativeProgrammingComponent } from './app/declarative-programming/declarative-programming.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'declarative-programming',
        component: DeclarativeProgrammingComponent,
      },
      {
        path: '**',
        redirectTo: 'declarative-programming',
      },
    ]),
  ],
};

bootstrapApplication(App, appConfig);
