import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {

  empleado: Empleado = new Empleado();

  constructor(private empleadoServicio:EmpleadoService, private router:Router){

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.guardarEmpleado();
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      swal(
        'Empleado registrado',
        'El empleado ha sido registrado con exito',
        'success'
      )
      this.irALaListaDeEmpleados();

    }, error => console.error(error)
    );
  }

  irALaListaDeEmpleados(){
    this.router.navigate(["/empleados"]);
  }

  actualizarEmpleado(id:number, empleado:Empleado){
    
  }

}
