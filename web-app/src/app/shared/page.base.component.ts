import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PageService } from 'app/services/page/page.service';

@Component({
  selector: 'base-page',
  template: 'base'
})
export class BasePage implements OnInit {

  pageTitle: string = ''
  constructor(protected pageService: PageService) {

  }

  ngOnInit(): void {
    this.pageService.setPageTitle(this.pageTitle);
  }
}
