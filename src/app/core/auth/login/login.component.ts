import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { finalize, Subscription } from 'rxjs';
import { FlowbiteService } from '../../services/flowbite/flowbite.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../../shared/components/input/input.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private flowbiteService: FlowbiteService) {}
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  msgError = signal<string>('');
  msgSuccess = signal<string>('');
  subscription: Subscription = new Subscription();
  isLoading: boolean = false;
  flag: boolean = true;

  private readonly platformId = inject(PLATFORM_ID);

  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(null, [
  //     Validators.required,
  //     Validators.email,
  //     Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  //   ]),

  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/
  //     ),
  //   ]),
  // });

  loginForm!: FormGroup;

  initForm(): void {
    this.loginForm = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],

      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    this.initForm();
  }

  submit(): void {
    if (this.loginForm.invalid || this.isLoading) return;

    this.isLoading = true;
    this.msgError.set('');
    this.msgSuccess.set('');

    // Unsubscribe safely before creating a new subscription
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.authService
      .login(this.loginForm.value)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.msgSuccess.set('Successfully Login!');

            // save token to local storage
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('token', res.token);
            }
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 800);
          }
        },
        error: (err) => {
          const errorMsg = err?.error?.message || 'Something went wrong. Please try again.';
          this.msgError.set(errorMsg);

          // auto-clear error message
          setTimeout(() => this.msgError.set(''), 2500);
        },
      });
  }
}
