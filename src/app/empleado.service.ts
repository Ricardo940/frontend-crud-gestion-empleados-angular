import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //listado de empleados desde el backend
  private baseURL = "http://localhost:8080/api/v1/empleados";
  
  constructor(private httpClient: HttpClient) { }


  //metodo para obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //metodo para registrar un empleado
  registrarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  actualizarEmpleado(id:number, empleado:Empleado): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerEmpleado(id:number): Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

}
