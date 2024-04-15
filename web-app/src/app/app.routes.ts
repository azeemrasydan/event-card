import { Routes } from '@angular/router';
import { RegistrationPage } from 'app/pages/registration/registration.component';
import { HomePage } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'registration',
        component: RegistrationPage
    },
    {
        path: 'home',
        component: HomePage
    }
];
