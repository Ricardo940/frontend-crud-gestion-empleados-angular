import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent {
  id:number;
  empleado: Empleado;

  constructor(private empleadoServicio:EmpleadoService, private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleado(this.id).subscribe(dato => {
      this.empleado = dato;
      swal(`Detalles del empleado ${this.empleado.nombre}`);
    });
  }
}
