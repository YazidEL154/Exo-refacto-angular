import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'betterNg';

  ressources: any[] = [
    {title: "Learn Angular", href: "https://angular.io/tutorial", icon:"learn"},
    {title: "CLI documentation", href: "https://angular.io/cli", icon:"cli"},
    {title: "Angular Blog", href: "https://blog.angular.io/", icon:"blog"},
    {title: "Angular DevTools", href: "https://angular.io/devtools/", icon:"tools"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
