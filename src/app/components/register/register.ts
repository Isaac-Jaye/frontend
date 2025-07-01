import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  role = 'Viewer';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth
      .register({
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        role: this.role,
      })
      .subscribe(() => this.router.navigate(['/']));
  }
}
// Just playing 