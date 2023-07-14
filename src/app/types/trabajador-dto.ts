import {departamentosEnum} from '../enum/departamentos-enum';
import {grupoDepartamentoEnum} from '../enum/grupo-departamento-enum';
// tslint:disable-next-line:class-name
export class trabajadorDto {

  public nombre: string;
  public correo: string;
  public departamento: departamentosEnum;
  public grupoDepartamento: grupoDepartamentoEnum;

  constructor() {}
}
