import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details';
import { Movies } from '../interfaces/movies';
import { Credits } from '../interfaces/credits';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseURL = "https://api.themoviedb.org/3";
  private apikey = "2bc33283cd0739f1d02da553cad42533";
  Movies!: Movies;
  Movie!: MovieDetails;
  Cast!: Credits;


  constructor (private http: HttpClient) { }


  getSearchMovie (id: any): Observable<Movies> {
    console.log(id, 'movie#');
    return this.http.get<Movies>(`${this.baseURL}/search/movie?api_key=${this.apikey}&query=${id.movieName}`);
  }

  getMovieDetails (id: any): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}/movie/${id}?api_key=${this.apikey}`)
  }


}