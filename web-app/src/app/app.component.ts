import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'app/layouts/header/header.component';
import { NavbarComponent } from 'app/layouts/navbar/navbar.component';
import { PageService } from 'app/services/page/page.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private pageService: PageService, private cdr: ChangeDetectorRef) {

  }

  title: string = '';

  ngOnInit(): void {
    this.pageService.getPageTitle().subscribe(title => {
      this.title = title ?? '';
      this.cdr.detectChanges(); // Trigger change detection manually
    });
  }


}
