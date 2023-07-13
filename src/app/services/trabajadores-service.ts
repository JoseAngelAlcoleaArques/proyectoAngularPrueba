import { Injectable } from '@angular/core';
import {trabajadorDto} from '../types/trabajador-dto';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  private _trabajadores: trabajadorDto[] = [];
  private _nombre: string;
  private _telefono: string;


  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get telefono(): string {
    return this._telefono;
  }

  set telefono(value: string) {
    this._telefono = value;
  }

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

  constructor() { }
}
