import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'usuarios', 
        component: UsuarioComponent,
        children: [
            { path: 'nuevo', component: UsuarioNuevoComponent},
        ]
    },
    { 
        path: 'usuarios/:id', 
        component: UsuarioComponent,
        children: USUARIO_ROUTES
    },
    { path: '', pathMatch:'full', redirectTo: 'home'},
    { path: '**', component: HomeComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
