import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() inputType!: string;
  @Input() element: string = 'input';
  @Input() inputId: string = '';
  @Input() placeholder: string = '';
  @Input() control: any;
  flag: boolean = true;
}
