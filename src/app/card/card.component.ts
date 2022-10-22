import { Component, OnInit } from '@angular/core';
import { Hero } from 'shared/models/hero-model';
import { HeroHttpService } from 'shared/services/herohttp-service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  heroesArray: Hero[] = [];

  constructor(private heroHttpService: HeroHttpService) { }

  heroAvatar = 'http://localhost:4200/assets/img/';

  ngOnInit() {

    this.heroHttpService.get()
    .subscribe(
    //sucesso
    heroes => {
    this.heroesArray.push(...heroes);
    },
    //erro
    error => {
    console.log("Deu ruim: "+ error);
    });

    console.log(this.heroesArray);
 }


}


