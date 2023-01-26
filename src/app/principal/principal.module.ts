import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MensajeComponent } from './mensaje/mensaje.component';

// Angular Material //
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ComponentsComponent } from './components/components.component';
import { TablaComponent } from './tabla/tabla.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { Asincrona23Component } from './asincrona23/asincrona23.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    MensajeComponent,
    ComponentsComponent,
    TablaComponent,
    HomeComponent,
    Asincrona23Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    // Material Desing
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  exports:[
    BusquedaComponent,
    FormularioComponent,
    MenuComponent,
    VistaComponent,
    LoginComponent,
    MensajeComponent,
    ComponentsComponent,
    TablaComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    HomeComponent,
    MatTableModule,
    Asincrona23Component,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule
    
  ],
})
export class PrincipalModule { }
