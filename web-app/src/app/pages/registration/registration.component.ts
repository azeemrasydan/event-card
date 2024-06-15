import { Component } from "@angular/core";
import { LoadingSpinner } from "app/shared/components/loading-spinner/loading-spinner.component";
import { BasePage } from "app/shared/page.base.component";

@Component({
    selector: 'registration-page',
    standalone: true,
    imports: [LoadingSpinner],
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.css'
})
export class RegistrationPage extends BasePage {
    override pageTitle = 'Registration'
}