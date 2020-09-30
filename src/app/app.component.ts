import { ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './model/movies';
import { MovieService } from './serivce/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

baseUrl:String ="https://image.tmdb.org/t/p/original";
 
urls:String[] = [];
 nowPlaying:Movies;

 headerBGUrl:string;

 sliderConfig = {
  slidesToShow: 6,
  slidesToScroll: 2,
  arrows: true,
  autoplay: false
};

 constructor(private movie:MovieService){
  

 }

 ngOnInit():void {

  
  this.movie.getNowPlaying().subscribe({
    next:params =>{
      this.nowPlaying=params;
      this.headerBGUrl= this.baseUrl+params.results[0].backdrop_path;
    
    },
    error: err=> {
      console.log(err);
    }

  })
    
 }



 







 }


 



