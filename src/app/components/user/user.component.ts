import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  // Se obtiene el arreglo de usuarios realizada en la interface
  users: User[] = [];

  // Se inyectan dependencias
  constructor(private userService: UserService) {}

  //Apenas corre la aplicación se realiza la peticion de los usuarios
  ngOnInit(): void {
    //Expresión para obtener los usuarios
    this.userService.getUsers().subscribe((data) => {
      //Se obtiene la data de los usuarios recortandola de 0-5
      this.users = data.slice(0, 5);
      //Se imprime por consola los usuarios seleccionados
      console.log(this.users);
    });

    //Expresión para obtener los usuarios por ID
    this.userService.getUserByID(5).subscribe((user) => {
      // Imprime la data del usuario según el ID que se envie
      console.log(user);
    });
  }
}
