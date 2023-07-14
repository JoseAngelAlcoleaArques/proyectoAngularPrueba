import {Injectable, OnInit} from '@angular/core';
import {trabajadorDto} from '../types/trabajador-dto';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  private _trabajadores: trabajadorDto[] = [];

  setTrabajadores(trabajadores: trabajadorDto[]): void {
    this._trabajadores = trabajadores;
  }

  getTrabajadores(): trabajadorDto[] {
    return this._trabajadores;
  }

  getTrabajadoresByDepartamento(departamento: string): trabajadorDto[] {
    const trabajadoresEncontrados: trabajadorDto[] = [];
    for ( const trabajador of this._trabajadores) {
      if (trabajador.departamento === departamento) {
        trabajadoresEncontrados.push(trabajador);
      }
    }
    return trabajadoresEncontrados;
  }

  getTrabajadoresByGrupoDepartamento(grupoDepartamento: string): trabajadorDto[] {
    const trabajadoresEncontrados: trabajadorDto[] = [];
    for ( const trabajador of this._trabajadores) {
      if (trabajador.grupoDepartamento === grupoDepartamento) {
        trabajadoresEncontrados.push(trabajador);
      }
    }
    return trabajadoresEncontrados;
  }

  addTrabajador(trabajador: trabajadorDto): trabajadorDto{
    this._trabajadores.push(trabajador);
    return trabajador;
  }

  constructor() { }
}
