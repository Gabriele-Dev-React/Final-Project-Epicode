import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  filter(arg0: (user: { id: any }) => boolean): ClientiService {
    throw new Error('Method not implemented.');
  }
  headers = new HttpHeaders();
  beaererAuth =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYyODQ5NzgyNSwiZXhwIjoxNjI5MzYxODI1fQ.GIsSurt4oE1xTkH-8S-hdCg8GSG6gJ80tr-_pstcOkbUutFPwiDOjVVWFWcDqle1aBCFWHw4Hl_YZo03j0gtmg';

  constructor(private http: HttpClient) {
    /* this.headers = this.headers
      .set('Authorization', 'Bearer ' + this.beaererAuth)
      .set('X-TENANT-ID', 'fe_0321'); */
  }
  getAllClienti() {
    return this.http.get<any>(
      environment.urlAPI + '/api/clienti?page=0&size=400&sort=id,DESC',
      { headers: this.headers }
    );
  }
  deleteCliente(id: number) {
    alert('utente eliminato');
    return this.http.delete<any>(environment.urlAPI + '/api/clienti/' + id);
  }
  addCliente(cliente: any) {
    return this.http.post<any>(environment.urlAPI + '/api/clienti/', cliente);
  }
  getComuni() {
    return this.http.get<any>(
      environment.urlAPI + '/api/comuni?page=0&size=20&sort=id,ASC'
    );
  }
  getClienteId(id: number) {
    return this.http.get<any>(environment.urlAPI + '/api/clienti/' + id);
  }
  updateClienti(cliente: any) {
    return this.http.put<any>(
      environment.urlAPI + '/api/clienti/' + cliente.id,
      cliente
    );
  }

  /* Fatture */

  getFatture() {
    return this.http.get<any>(
      environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,DESC'
    );
  }

  deleteFatture(id: any) {
    return this.http.delete<any>(environment.urlAPI + '/api/fatture/' + id);
  }

  addFatture(fatture: any) {
    return this.http.post<any>(environment.urlAPI + '/api/fatture/', fatture);

    /* REGISTRAZIONE */
  }

  postRegistrazione(utente:any){
    return this.http.post<any>(environment.urlAPI + '/api/auth/signup', utente)
  }

  /* LOGIN */
  postLogin(utente:any){
    const loginResponse = this.http.post<any>(environment.urlAPI + '/api/auth/login', utente);
    loginResponse.subscribe(res => {if(res.id) localStorage.setItem("login", "isLogged"), console.log("isLogged")})
    return loginResponse
  }
}
