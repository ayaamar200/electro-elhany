import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ServicesComponent } from './shared/components/services/services.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, ServicesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('electro-elhany');
}
