import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})

export class ActualizarEmpleadoComponent {
  
  id:number;
  empleado: Empleado;

  constructor(private empleadoServicio:EmpleadoService, private route:ActivatedRoute, private router:Router){

  }

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleado(this.id).subscribe(dato => {
      this.empleado = dato;
    });
  }

  onSubmit(){
    this.actualizarEmpleado();
  }

  actualizarEmpleado(){
    this.empleadoServicio.actualizarEmpleado(this.id, this.empleado).subscribe(dato => {
      console.log(dato);
      swal(
        'Empleado actualizado',
        'El empleado ha sido actualizado con exito',
        'success'
      )
      this.irALaListaDeEmpleados();

    }, error => console.error(error)
    );
  }

  irALaListaDeEmpleados(){
    this.router.navigate(["/empleados"]);
  }
}
