import { Component, OnInit } from '@angular/core';

declare const $;
import * as _ from 'lodash';

@Component({
  selector: 'portfolio-home',
  template: `
    <article id="portfolio-home" class="row">
      <section class="greeting-jumbotron-and-social-horizontal col s8 m8 l8">
        <section class="greeting-jumbotron col s12 m12 l12">
          <portfolio-greeting-jumbotron></portfolio-greeting-jumbotron>
        </section>
        <section class="social-horizontal col s12 m12 l12">
          <portfolio-social-horizontal></portfolio-social-horizontal>
        </section>
      </section>
      <section class="navigation-maze col s4 m4 l4">
        
      </section>
    </article>
    
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(()=>{
      $(".dropdown-button").dropdown({
        hover: true
      });
    })
  }

}
