import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.css'],
})
export class UserFormComponent {
  // Declaración de FormGroup para el formulario
  userForm: FormGroup;

  // Se inyectan dependencias
  constructor(private fb: FormBuilder) {
    // Definición y configuración del formulario
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
        ],
      ],
      address: ['', Validators.required],
    });
  }

  // Método para realizar envio de formulario
  onSubmit() {
    // Verifica si el formulario es valido
    if (this.userForm.valid) {
      // impresión por consola de los datos enviados en el formulario
      console.log('Formulario enviado', this.userForm.value);

      // Sweetalert2 para mostrar el mensaje de éxito
      Swal.fire({
        title: 'Éxito',
        text: 'La información se ha enviado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      // Reinicia el formulario después de enviar
      this.userForm.reset();
    } else {
      // Sweetalert2 para mostrar el mensaje de error
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa los campos correctamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  }
}
