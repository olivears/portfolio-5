import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './views/home/home.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**', redirectTo: ''
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);