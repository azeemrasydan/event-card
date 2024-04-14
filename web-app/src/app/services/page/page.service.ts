import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class PageService {
    private currentPageTitle: BehaviorSubject<string | undefined> = new BehaviorSubject<string  | undefined>(undefined);

    setPageTitle(title: string): void {
        this.currentPageTitle.next(title);
    }

    getPageTitle(): Observable<string | undefined> {
        return this.currentPageTitle.asObservable();
    }
}