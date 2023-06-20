import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  getMovieDetailResult?: any;

  constructor (private moviesService: MoviesService, private router: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit (): void {
    this.getMovie();
    
  }

  getMovie () {
    this.moviesService.getMovieDetails(this.router.snapshot.paramMap.get('id')).subscribe(async (result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = result;

    });
  }

}