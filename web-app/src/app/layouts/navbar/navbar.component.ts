import { Component, ViewChild } from "@angular/core";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar'
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'navbar',
    standalone: true,
    imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, MatToolbar, MatIcon],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

}