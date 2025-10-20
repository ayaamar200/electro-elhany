import { register } from 'swiper/element/bundle';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}
  private readonly authService = inject(AuthService);
  msgError = signal<string>('');
  msgSuccess = signal<string>('');

  registerForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(32),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(\+?\d{1,3})?[-.\s]?\d{8,14}$/),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/
        ),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
    },
    { validators: this.confirmPassword }
  );

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  confirmPassword(group: AbstractControl) {
    return group.get('password')?.value === group.get('rePassword')?.value
      ? null
      : { mismatch: true };
  }

  submit(): void {
    if (this.registerForm.valid) {
      this.authService.signup(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.status === 'success') {
            this.msgError.set('');
            this.msgSuccess.set(res.status);
            // navigate to login
          }
        },

        error: (err) => {
          console.log(err.error.errors[0].msg);
          this.msgSuccess.set('');
          this.msgError.set(err.error.errors[0].msg);
        },
      });
    }
  }
}
