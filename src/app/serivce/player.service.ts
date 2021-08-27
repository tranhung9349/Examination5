import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../player';
import {Observable} from 'rxjs';

const API_URL = `http://localhost:3001`;

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(API_URL + '/players');
  }

  saveCategory(category): Observable<Player> {
    return this.httpClient.post<Player>(API_URL + '/players', category);
  }

  findById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(`${API_URL}/players/${id}`);
  }

  updateCategory(id: number, player: Player): Observable<Player> {
    return this.httpClient.put<Player>(`${API_URL}/players/${id}`, player);
  }

  deleteCategory(id: number): Observable<Player> {
    return this.httpClient.delete<Player>(`${API_URL}/players/${id}`);
  }
}
