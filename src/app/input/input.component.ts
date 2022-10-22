import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})



export class InputComponent implements OnInit {

  constructor(private router: Router) { }
  heroAvatar = 'http://localhost:4200/assets/img/default.png';
  ngOnInit(): void {
  }
  onSelectImage() {
    this.router.navigate(['/gallery']);
    }
}


