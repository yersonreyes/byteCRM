import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-clients',
  imports: [ButtonModule,TableModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.sass'
})
export class ClientsComponent {

  clients = [
    {
      fullNameOrCompany: "Tech Solutions Inc.",
      email: "contact@techsolutions.com",
      phone: "+1 555-1234",
      address: "123 Tech Street, Silicon Valley, CA",
      website: "https://www.techsolutions.com",
      socialMedia: {
        facebook: "https://facebook.com/techsolutions",
        instagram: "https://instagram.com/techsolutions",
        linkedIn: "https://linkedin.com/company/techsolutions"
      },
      industry: "Technology",
      businessDescription: "A leading provider of innovative tech solutions for businesses.",
      communicationPreferences: ["email", "call"],
      interactionHistory: [
        { type: "call", date: "2023-01-15", notes: "Discussed project requirements." },
        { type: "email", date: "2023-01-20", notes: "Sent proposal and pricing details." }
      ]
    },
    {
      fullNameOrCompany: "Green Earth Landscaping",
      email: "info@greenearth.com",
      phone: "+1 555-5678",
      address: "456 Garden Lane, Portland, OR",
      website: "https://www.greenearth.com",
      socialMedia: {
        facebook: "https://facebook.com/greenearth",
        instagram: "https://instagram.com/greenearthlandscaping",
        linkedIn: null
      },
      industry: "Landscaping",
      businessDescription: "Providing eco-friendly landscaping services for residential and commercial properties.",
      communicationPreferences: ["WhatsApp", "email"],
      interactionHistory: [
        { type: "meeting", date: "2023-02-10", notes: "Site visit and initial consultation." },
        { type: "email", date: "2023-02-15", notes: "Shared project timeline and cost estimate." }
      ]
    }
  ];


  constructor( private router: Router,) {}

  navigateToCreateClient() {
    this.router.navigate(['/platform/clients-new']);
  }

  navigateToView(id: string) {
    this.router.navigate(['/platform/clients-view', id]);
  }

}
