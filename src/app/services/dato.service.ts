import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoService {
  public postId: any;

  private url = 'https://www.php.engenius.com.co/DatabaseIE.php';
  private User = 'etraining';
  private Password = 'explorandoando2020%';


  constructor(private http: HttpClient) { }


  obtenerMunicipios(option: string): any {
    return this.http.post<any>(this.url, {
      User: this.User,
      Password: this.Password,
      option: option
    }).pipe(
      map((res: any) => res.data)
    );
  }

  obtenerInstitucionesMunicipio(option: string, CodMun: number): any {
    return this.http.post<any>(this.url, {
      User: this.User,
      Password: this.Password,
      option: option,
      CodMun: CodMun
    }).pipe(
      map((res: any) => res.data)
    );
  }

  obtenerSedesInstitucion(option: string, CodInst: number): any {
    return this.http.post<any>(this.url, {
      User: this.User,
      Password: this.Password,
      option: option,
      CodInst: CodInst
    }).pipe(
      map((res: any) => res.data)
    );
  }

  obtenerGruposSede(option: string, CodSede: number): any {
    return this.http.post<any>(this.url, {
      User: this.User,
      Password: this.Password,
      option: option,
      CodSede: CodSede
    }).pipe(
      map((res: any) => res.data)
    );
  }
}

