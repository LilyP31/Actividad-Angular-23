import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

 
 // CONSUMIR SERVICIO UserServices

// Crear instancia de UserServices
constructor(private userService: UsersServiceService){}

resultado = true;
vista = false;
user!: Users | null;

// Ejecutar el metodo getUsersAll del servicio al cargar el componente
getUserID(id: string){
this.resultado = true;
this.user = null;
this.userService.getUserId(id).subscribe({
next: (usuario: Users) => {this.user = usuario; this.vista = false;}
,
error: (e) => {console.error(e); this.resultado = false;},
complete: () => console.info("La API devolvio un registro")
});
}

ngOnInit(){
this.resultado = true;
this.vista = true;
}
}
