import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { Asincrona23Component } from './principal/asincrona23/asincrona23.component';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { ComponentsComponent } from './principal/components/components.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { MensajeComponent } from './principal/mensaje/mensaje.component';
import { TablaComponent } from './principal/tabla/tabla.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard]}, // ROUTING ACTUALIZADOS CON CANACTIVATE
  {path: 'formulario', component: FormularioComponent, canActivate: [CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent,canActivate: [CanactivateGuard] },

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tabla', component: TablaComponent, canActivate: [CanactivateGuard] },
  {path: 'asincrona', component: Asincrona23Component, canActivate: [CanactivateGuard] },
  {path: 'home', component: HomeComponent, canActivate: [CanactivateGuard] },
  {path: 'components', component: ComponentsComponent, canActivate: [CanactivateGuard] },
  {path: 'mensaje', component: MensajeComponent,canActivate: [CanactivateGuard] ,canDeactivate: [CandesactivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
