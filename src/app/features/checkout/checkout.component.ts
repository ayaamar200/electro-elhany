import { Component, inject, OnInit } from '@angular/core';
import { FlowbiteService } from '../../core/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'app-checkout',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  private readonly flowbiteService = inject(FlowbiteService);
  // private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  // private readonly platformId = inject(PLATFORM_ID);

  // msgError = signal<string>('');
  // msgSuccess = signal<string>('');
  // subscription: Subscription = new Subscription();
  // isLoading: boolean = false;
  // flag: boolean = true;
  checkoutForm!: FormGroup;

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    this.initForm();
  }

  initForm(): void {
    this.checkoutForm = this.fb.group({
      // alias: [null],
      details: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(/^(\+?\d{1,3})?[-.\s]?\d{8,14}$/)]],
      city: [null, [Validators.required]],
      postalCode: [null],
      governorate: [null],
    });
  }

  // submit(): void {
  //   if (this.loginForm.invalid || this.isLoading) return;

  //   this.isLoading = true;
  //   this.msgError.set('');
  //   this.msgSuccess.set('');

  //   // Unsubscribe safely before creating a new subscription
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }

  //   this.subscription = this.authService
  //     .login(this.loginForm.value)
  //     .pipe(finalize(() => (this.isLoading = false)))
  //     .subscribe({
  //       next: (res) => {
  //         if (res.status === 'success') {
  //           this.msgSuccess.set('Successfully Login!');

  //           // save token to local storage
  //           if (isPlatformBrowser(this.platformId)) {
  //             localStorage.setItem('token', res.token);
  //           }
  //           setTimeout(() => {
  //             this.router.navigate(['/home']);
  //           }, 800);
  //         }
  //       },
  //       error: (err) => {
  //         const errorMsg = err?.error?.message || 'Something went wrong. Please try again.';
  //         this.msgError.set(errorMsg);

  //         // auto-clear error message
  //         setTimeout(() => this.msgError.set(''), 2500);
  //       },
  //     });
  // }
}
