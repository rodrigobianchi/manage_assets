import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInput } from '../login/user';
import { Apollo } from "apollo-angular";
import { SAVE_USER } from '../graphql/user/graphql';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenURL: string = environment.apiURLBase + environment.tokenURL;
  clientID: string = environment.clienteId;
  clientSecret: string = environment.clientSecret;

  constructor(private http: HttpClient,
    private apollo: Apollo) {
  }

  getToken() {
    const tokenString = localStorage.getItem('access_token');
    if (tokenString) {
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const tokenString = localStorage.getItem('access_token');
    const expirationIn = localStorage.getItem('expiration_in');
    var sessionActive = true;
    if (tokenString && expirationIn) {
      const tokenTime = Number(expirationIn) + Number(JSON.parse(tokenString).expires_in);
      if ((Math.floor(Date.now() / 1000)) > tokenTime) {
        sessionActive = false;
      }
    }
    return sessionActive;
  }

  save(user: UserInput): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: SAVE_USER,
      variables: {
        user: user
      }
    });
  }

  login(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this.tokenURL, params.toString(), { headers })
  }

  logoff() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('expiration_in');
  }

  getAuthenticatedLogin() {
    const username = localStorage.getItem('user_name');;
    if (username) {
      return username;
    }
    return null;
  }

}
