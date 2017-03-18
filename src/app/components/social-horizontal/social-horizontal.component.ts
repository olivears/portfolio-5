import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-social-horizontal',
  template: `
    <section id="portfolio-social-horizontal" class="row">
      <div class="socials col s12 m12 l12">
        <div class="col s6 m6 l6 center-align" *ngFor="let social of socials">
          <a href="{{social.socialLink}}">
            <img src={{social.socialLogo}} class="responsive-img" />
            <p> {{social.socialTitle}} </p>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./social-horizontal.component.css']
})
export class SocialHorizontalComponent implements OnInit {

  socials: Object[] = [
    {
      socialTitle: 'LinkedIn',
      socialLogo: './assets/images/social-icons/linkedin.png',
      socialLink: 'https://www.linkedin.com/in/npranto',
    },
    {
      socialTitle: 'GitHub',
      socialLogo: './assets/images/social-icons/github.png',
      socialLink: 'https://github.com/npranto',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
