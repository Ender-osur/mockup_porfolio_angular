import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LOGIN_ROUTE } from '../../utils/domains/urls';
import { Login } from '../../models/login/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginUrl = LOGIN_ROUTE;

  constructor(private http: HttpClient) {

  }
  public login(credentials: Login): Observable<any> {
    const fakeEmail = 'example@gmail.com';
    const fakePassword = '123';

    if (credentials.accessEmail === fakeEmail && credentials.accessPassword === fakePassword) {
      // Simulación de token de autenticación
      const fakeToken = {
        token: 'fake-jwt-token',
        user: {
          email: fakeEmail,
          role: 'admin',
        },
      };
      return of(fakeToken); // Retorna un Observable con el token falso
    } else {
      return of({ error: 'Credenciales incorrectas' });
    }

    return this.http.post<any>(this.loginUrl, credentials);
  }
}
