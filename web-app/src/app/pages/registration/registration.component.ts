import { Component } from "@angular/core";
import { BasePage } from "app/shared/page.base.component";

@Component({
    selector: 'registration-page',
    standalone: true,
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.css'
})
export class RegistrationPage extends BasePage {
    override pageTitle = 'Registration'

}