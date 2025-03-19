import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES    )
    },
    {
        path: 'platform',
        loadChildren: () => import('./platform/platform.routes').then(m => m.PLATFORM_ROUTES)    
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];
