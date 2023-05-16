import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  respuesta: Employee[] = [];

  constructor(private servicio: EmployeeServiceService) {
    this.servicio.getEmployees().subscribe(
      (data) => {
        this.respuesta = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
