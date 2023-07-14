import {Component, OnInit} from '@angular/core';
import {TrabajadoresService} from '../../services/trabajadores-service';
import {grupoDepartamentoEnum} from '../../enum/grupo-departamento-enum';
import {departamentosEnum} from '../../enum/departamentos-enum';
import {FormBuilder, FormGroup} from '@angular/forms';
import {trabajadorDto} from '../../types/trabajador-dto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trabajadorform',
  templateUrl: './trabajadorform.component.html',
  styleUrls: ['./trabajadorform.component.css']
})
export class TrabajadorformComponent implements OnInit {
  trabajadorForm: FormGroup;
  grupoSeleccionado: grupoDepartamentoEnum;
  departamentoSeleccionado: departamentosEnum;
  gruposDepartamentos = Object.values(grupoDepartamentoEnum);
  departamentos = Object.values(departamentosEnum);

  constructor(
    private trabajadoresService: TrabajadoresService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.trabajadorForm = this.fb.group({
      nombre: [],
      correo: [],
      grupoDepartamentos: [],
      departamento: [],
    });
  }

  modificarDepartamentos(grupoSeleccionado: grupoDepartamentoEnum) {
    switch (grupoSeleccionado) {
      case grupoDepartamentoEnum.PAS:
        this.departamentos = [];
        this.departamentos.push(departamentosEnum.ATENCIONALUSUARIO);
        this.departamentos.push(departamentosEnum.INFORMATICA);
        break;
      case grupoDepartamentoEnum.PDI:
        this.departamentos = [];
        this.departamentos.push(departamentosEnum.ENFERMERIA);
        this.departamentos.push(departamentosEnum.POLITECNICA);
        break;
      case grupoDepartamentoEnum.SERVICIOS:
        this.departamentos = [];
        this.departamentos.push(departamentosEnum.CAFETERIA);
        this.departamentos.push(departamentosEnum.REPROG);
        this.departamentos.push(departamentosEnum.SECRETARIA);
        break;
    }
  }

  modificarGruposDeDepartamento(departamentoSeleccionado: departamentosEnum) {
    switch (departamentoSeleccionado) {
      case departamentosEnum.ATENCIONALUSUARIO:
        this.trabajadorForm.patchValue({
          grupoDepartamentos: grupoDepartamentoEnum.PAS
        });
        break;
      case departamentosEnum.ENFERMERIA:
        this.trabajadorForm.patchValue({
          grupoDepartamentos: grupoDepartamentoEnum.PDI
        });
        break;
      case departamentosEnum.CAFETERIA:
        this.trabajadorForm.patchValue({
          grupoDepartamentos: grupoDepartamentoEnum.SERVICIOS
        });
        break;
      case departamentosEnum.POLITECNICA:
        this.trabajadorForm.patchValue({
          grupoDepartamentos: grupoDepartamentoEnum.PDI
        });
        break;
      case departamentosEnum.INFORMATICA:
        this.trabajadorForm.patchValue({
          grupoDepartamentos: grupoDepartamentoEnum.PAS
        });
        break;
      case departamentosEnum.REPROG:
        this.trabajadorForm.patchValue({
          grupoDepartamentos: grupoDepartamentoEnum.SERVICIOS
        });
        break;
      case departamentosEnum.SECRETARIA:
        this.trabajadorForm.patchValue({
          grupoDepartamentos: grupoDepartamentoEnum.SERVICIOS
        });
        break;
    }
  }

  guardarTrabajador(value: any) {
    const trabajador = new trabajadorDto();
    trabajador.nombre = value.nombre;
    trabajador.correo = value.correo;
    trabajador.grupoDepartamento = value.grupoDepartamentos;
    trabajador.departamento = value.departamento;

    this.trabajadoresService.addTrabajador(trabajador);
    this.router.navigate(['/pas']);
  }
}
