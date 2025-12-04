import { Component, inject, OnInit } from '@angular/core';
import { FlowbiteService } from '../../core/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import {
  ControlConfig,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [InputComponent, ReactiveFormsModule, RouterLink, CartComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  private readonly flowbiteService = inject(FlowbiteService);
  private readonly fb = inject(FormBuilder);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly cartService = inject(CartService);
  id: string | null = null;
  checkoutForm!: FormGroup;

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    this.initForm();
    this.getCartId();
  }

  initForm(): void {
    this.checkoutForm = this.fb.group({
      contactEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      shippingAddress: this.fb.group({
        fullName: [null, [Validators.required]],
        streetAddress: [null, [Validators.required]],
        phone: [null, [Validators.required, Validators.pattern(/^(\+?\d{1,3})?[-.\s]?\d{8,14}$/)]],
        country: [null, [Validators.required]],
        city: [null, [Validators.required]],
        postalCode: [null],
        governorate: [null, [Validators.required]],
        building: [null],
        notes: [null],
      }),
    });
  }

  getCartId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlPrams) => {
        this.id = urlPrams.get('id');
        console.log(this.id);
      },
    });
  }

  submit(): void {
    if (this.checkoutForm.valid) {
      console.log(this.checkoutForm.value);
      console.log(this.id);

      this.cartService.checkoutSession(this.id, this.checkoutForm.value).subscribe({
        next: (res) => {
          console.log(res);
          // window.location.href = res.data.url;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
