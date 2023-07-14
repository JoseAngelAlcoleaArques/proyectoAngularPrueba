import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {trabajadorDto} from '../../../types/trabajador-dto';
import {TrabajadoresService} from '../../../services/trabajadores-service';
import {departamentosEnum} from '../../../enum/departamentos-enum';

@Component({
  selector: 'app-atencion-al-usuario',
  templateUrl: './atencion-al-usuario.component.html',
  styleUrls: []
})
export class AtencionAlUsuarioComponent implements OnInit {

  trabajadoresAtencionAlUsuario: trabajadorDto[] = [];
  nombre = 'ATENCION AL USUARIO';
  telefono = '32132112';

  constructor(private trabajadoresService: TrabajadoresService) {}

  ngOnInit() {
    this.trabajadoresAtencionAlUsuario = this.trabajadoresService.getTrabajadoresByDepartamento(departamentosEnum.ATENCIONALUSUARIO);
  }

}
