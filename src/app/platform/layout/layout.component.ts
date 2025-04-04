import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.sass'
})
export class LayoutComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;
  visible: boolean = false;

  constructor(
    private router: Router,
  ) {
  }

  closeCallback(e:any): void {
    this.drawerRef.close(e);
  }

  navigateTo(e:any , route: string): void {
    this.router.navigate([route]);
    this.closeCallback(e);
  }   
}
