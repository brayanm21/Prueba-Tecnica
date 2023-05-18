import { Component } from '@angular/core';
import { DatoService } from '../../../services/dato.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  public postMunicipios: any;
  public postInstitucionesMunicipio: any;
  public postSedesInstitucion: any;
  public postGruposSede: any;

  public municipio: number = 0;
  public institucionesMunicipio: number = 0;
  public sedesInstitucion: number = 0;

  constructor(private DatoService: DatoService) {
    this.obtenerMunicipios();
  }

  obtenerMunicipios() {
    this.DatoService.obtenerMunicipios("municipios").subscribe(
      (res: any) => {
        this.postMunicipios = res;
      }
    );
  }

  obtenerInstitucionesMunicipio(id: number) {
    this.municipio = id;
    this.postSedesInstitucion = [];
    this.postGruposSede = [];
    this.DatoService.obtenerInstitucionesMunicipio("instituciones", id).subscribe(
      (res: any) => {
        this.postInstitucionesMunicipio = res;
      }
    );
  }

  obtenerSedesInstitucion(id: number) {
    this.institucionesMunicipio = id;
    this.postGruposSede = [];
    this.DatoService.obtenerSedesInstitucion("sedes", id).subscribe(
      (res: any) => {
        this.postSedesInstitucion = res;
      }
    );
  }

  obtenerGruposSede(id: number) {
    this.sedesInstitucion = id;
    this.DatoService.obtenerGruposSede("grupos", id).subscribe(
      (res: any) => {
        this.postGruposSede = res;
      }
    );
  }

}
