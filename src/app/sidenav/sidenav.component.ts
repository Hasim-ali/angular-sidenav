import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  isFixedWidth = false;
  widthValue = 200;
  isHomeSubMenuOpen = false;
  isAboutSubMenuOpen = false;
  SideNavToggled() {
    this.isFixedWidth = !this.isFixedWidth;
    this.widthValue = this.isFixedWidth ? 60 : 200;
  }

  SubMenu(x: any) {
    if (x===1) {this.isHomeSubMenuOpen = !this.isHomeSubMenuOpen } else{this.isAboutSubMenuOpen = !this.isAboutSubMenuOpen}
    console.log(this.isHomeSubMenuOpen, '{WEARTSGDHJK,}');
  }
}
