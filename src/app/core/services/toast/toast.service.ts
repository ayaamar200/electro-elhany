import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  show(message: string, icon: SweetAlertIcon = 'success') {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title: message,
      customClass: {
        title: 'toast-title',
      },
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  }
}
