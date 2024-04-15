import { Component } from "@angular/core";
import { BasePage } from "app/shared/page.base.component";

@Component({
    selector: 'home-page',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomePage extends BasePage {
    override pageTitle = 'Home';
}