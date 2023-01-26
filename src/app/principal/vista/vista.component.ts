import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  // Consumir servicio UserServices

  // Crear instancia de UserServices 
  constructor(private userService : UsersServiceService){}

  // Ejecutar el metodo getUsersAll del servicio al cargar el componente
  listado = new Array()

 /* EJECUTAR METOD getUsersAll y recuperar json devuelto por la api

  this.userService.getUsersAll().subscribe({
  next: (UserAll: Users[]) => this.listado = UserAll,
  error: (e) => console.error(e),
  complete: () => console.info("La API devolvio todos los registros")
  });
*/

// Ejecutar el metogo getUsersAllInterceptor

ngOnInit(){
  this.userService.getUsersAllInterceptor().subscribe({
  next: (response: any) => {this.listado = response.body; console.log(response)},
  error: (e) => console.error(e),
  complete: () => console.info("La API devolvio todos los registros")
  });
  }

}

