import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  nameofFilm = '';
  id = '';
  url = '';

  movies:any;

  movieIndex : any;

  //when it need to access on the parameter in specific route (else if you using in navigate from page to another page then you may use Router class )
  constructor(private route: ActivatedRoute , private http: HttpClient) {}
  ngOnInit(): void {
    this.nameofFilm = this.route.snapshot.params['nameofFilm'];
    this.id = this.route.snapshot.params['id'];

    if(this.nameofFilm === 'trending'){
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    else if(this.nameofFilm === 'theatre'){
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }

    else if(this.nameofFilm === 'popular'){
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }

     this.getMovie();
  }

   getMovie(){
    //when you need to get value using http request then using subscribe method as it's Observable
    this.http.get(this.url).subscribe((movieIndex) => {
      this.movies = movieIndex;
      let index = this.movies.findIndex((movieIndex: { id: string; }) => movieIndex.id == this.id);

      if (index > -1) {
        this.movieIndex = this.movies[index];
      }
    });
  }
}
