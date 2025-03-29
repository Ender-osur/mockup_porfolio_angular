import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  constructor(private router: Router) {
  }

  goTo(path: string) {
    console.log("Navigating to: " + path);
    this.router.navigate([path]);
  }
}
