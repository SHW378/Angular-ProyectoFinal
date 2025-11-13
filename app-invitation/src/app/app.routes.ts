import { Routes } from '@angular/router';
import { Invitation } from './pages/invitation/invitation';
import { Asistencia } from './pages/asistencia/asistencia';
import { Listado } from './pages/listado/listado';

export const routes: Routes = [
  {path: '', component: Invitation},
  {path: 'asistencia', component: Asistencia},
  {path: 'listadoConfirmaciones', component: Listado},
  {path: '**', redirectTo: ''} //Redireccionamiento por default
];

