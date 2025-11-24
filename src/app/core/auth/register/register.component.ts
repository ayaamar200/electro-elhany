import { register } from 'swiper/element/bundle';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { InputComponent } from '../../../shared/components/input/input.component';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly cookieService = inject(CookieService);

  msgError = signal<string>('');
  msgSuccess = signal<string>('');
  subscription: Subscription = new Subscription();
  isLoading: boolean = false;
  flag: boolean = true;

  // registerForm: FormGroup = new FormGroup(
  //   {
  //     username: new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(3),
  //       Validators.maxLength(32),
  //     ]),
  //     email: new FormControl(null, [
  //       Validators.required,
  //       Validators.email,
  //       Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  //     ]),
  //     phone: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern(/^(\+?\d{1,3})?[-.\s]?\d{8,14}$/),
  //     ]),
  //     password: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern(
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/
  //       ),
  //     ]),
  //     rePassword: new FormControl(null, [Validators.required]),
  //   },
  //   { validators: this.confirmPassword }
  // );

  registerForm!: FormGroup;
  initForm(): void {
    this.registerForm = this.fb.group(
      {
        username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],

        email: [
          null,
          [
            Validators.required,
            Validators.email,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
          ],
        ],

        phone: [null, [Validators.required, Validators.pattern(/^(\+?\d{1,3})?[-.\s]?\d{8,14}$/)]],

        password: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/
            ),
          ],
        ],

        rePassword: [null, Validators.required],
      },
      { validators: this.confirmPassword }
    );
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    this.initForm();
  }

  confirmPassword(group: AbstractControl) {
    if (group.get('password')?.value === group.get('rePassword')?.value) {
      return null;
    } else {
      group.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }

  submit(): void {
    if (this.registerForm.invalid || this.isLoading) return;

    // Unsubscribe safely before creating a new subscription
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.isLoading = true;
    this.msgError.set('');
    this.msgSuccess.set('');

    this.subscription = this.authService
      .signup(this.registerForm.value)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.msgSuccess.set('Successfully registered!');
            // save token to local storage
            this.cookieService.set('token', res.token || '');
            setTimeout(() => {
              this.router.navigate(['home']);
            }, 800);
          }
        },
        error: (err) => {
          const errorMsg =
            err?.error?.errors?.[0]?.msg || 'Something went wrong. Please try again.';
          this.msgError.set(errorMsg);
          // auto-clear error message
          setTimeout(() => this.msgError.set(''), 2500);
        },
      });
  }
}
