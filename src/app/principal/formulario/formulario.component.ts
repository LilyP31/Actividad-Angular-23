import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private userService : UsersServiceService){}

  // Crear objeto que se enviara a el API user
  datos: Users = {id: '', name: '', username:''};

  onSubmit(){
    this.userService.postUser(this.datos).subscribe(
      (usuario: Users) => console.log(usuario)
    );
  }
}
