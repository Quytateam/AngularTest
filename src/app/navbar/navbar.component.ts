import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isDropdownOpen: boolean = false;
  isDropdownLogin: boolean = false;
  isLogin = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleLoginDropdown(): void {
    this.isDropdownLogin = !this.isDropdownLogin;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    const isInDropdownOpen =
      target.closest('.relative') || target.closest('#menu-toggle');
    if (!isInDropdownOpen) {
      this.isDropdownOpen = false;
    }

    const isInDropdownLogin =
      target.closest('.relative') || target.closest('#menu-login-toggle');
    if (!isInDropdownLogin) {
      this.isDropdownLogin = false;
    }
  }
}
