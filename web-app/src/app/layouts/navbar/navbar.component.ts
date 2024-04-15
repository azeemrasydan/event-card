import { Component, ViewChild } from "@angular/core";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar'
import { MatIcon } from '@angular/material/icon';
import { NgFor } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: 'navbar',
    standalone: true,
    imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, MatToolbar, MatIcon, NgFor],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    navDestinations = [
        {
            name: 'Home',
            route: 'home'
        },
        {
            name: 'Registration',
            route: 'registration'
        }
    ]

    constructor(private router: Router) { }

    navigateTo(route: string) {
        this.router.navigate([route]);
    }
}