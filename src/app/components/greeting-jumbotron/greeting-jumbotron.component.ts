import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-greeting-jumbotron',
  template: `
    <section id="portfolio-greeting-jumbotron" class="row">
      <div class="col s12 m12 l12">
        <div class="profile-picture col s12 m8 l6 offset-m2 offset-l3">
          <img src="./assets/images/portraits/portrait-light.png" class="responsive-img z-depth-4">
        </div>
      </div>
      <div class="col s10 m10 l10 offset-s1 offset-m1 offset-l1">
        <h1 class="greeeting pacifico center-align"> Hello, </h1>
        <h3 class="name center-align"> I'm Shakib </h3>
        <hr class="style13">
        <h4 class="title center-align typewrite" data-period="2000" data-type='[ "Front End Developer", "Problem Solver", "Junior Software Engineer", "Creative Thinker" ]'> </h4>
        <span class="wrap"></span>
      </div>
    </section>
  `,
  styleUrls: ['./greeting-jumbotron.component.css']
})
export class GreetingJumbotronComponent implements OnInit {

  constructor() {

    // typewriter effect
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      var randomColors = ["red", "blue", "gray", "green"];

      css.type = "text/css";
      css.innerHTML = `.typewrite > .wrap { border-right: 0.08em solid #fff; color: red`;
      document.body.appendChild(css);
    };
  }

  ngOnInit() {
  }

}
