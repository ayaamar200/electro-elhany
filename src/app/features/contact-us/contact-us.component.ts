import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  contactCards = [
    {
      icon: 'map',
      title: 'Postal Address',
      details: '37 Mohamed Farid St.\nHeliopolis, Masr Elgedida',
    },
    {
      icon: 'paper-plane',
      title: 'General Enquiries',
      details: 'Info@electroelhany.com',
    },
    {
      icon: 'phone',
      title: 'Business Phone',
      details: '+20 12 06514204',
    },
    {
      icon: 'clock',
      title: 'Opening Hours',
      details: 'Mon–Fri: 10:00–18:00\nSat–Sun: 10:00–14:00',
    },
  ];
}
