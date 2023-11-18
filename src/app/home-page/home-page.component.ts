import { Component} from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { TypeWriter } from '../utils/typeWriter';
import { sleep } from '../utils/sleep';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  greeting: TypeWriter;
  name: TypeWriter;
  desc: TypeWriter;
  currentYear: number;

  blinkSubscribe: Subscription;
  cursorBlink: boolean = true;

  infoContent: Map<string, string[]>;
  infoRenderReady: boolean = false;

  constructor() {

    this.greeting = new TypeWriter("", "Hey There,", 65);
    this.name = new TypeWriter("", "I'm Collin", 45);
    this.desc = new TypeWriter("", "Software Developer, Fusion Engineer", 25);

    this.currentYear = new Date().getFullYear()

    this.greeting.write();
    this.name.write();
    this.desc.write();

    this.blinkSubscribe = interval(500).subscribe(() => {
      this.blink();
    })

    // content for carousel
    this.infoContent = new Map([
      ["About", 
        [
          "I recently graduated with the class of 2023 from the University of Texas at Dallas with a B.S. in computer science. I currently work as a software engineering associate at Lockheed Martin where I work on F-35 sensor fusion algorithm prototyping. My team primarily works in Python where we utilize libraries such as Pandas/Dask, PyTorch, and Scikit-learn to train and deploy machine learning models.", 
          "It is hard, if not impossible, for me to narrow my sights on a single passion in the realm of software. Above all else, I enjoy desinging and building tools for others to use, whether that be a simple web-app or a large language model. My goal is to diversify my talents in the subfields I am interested in enough to allow me to be a vital asset to any team I work with.",
          "I plan to pursue a masters in computer science, applied mathematics, and business administration, starting in the Fall of 2024. From here, I would like to start my own business doing something with AI robotics!",
        ]],
      ["Projects", [
        "<span>This portfolio! I used Angular as my framework of choice. I prefer Angular as it gives me very minute control over my components and HTML/CSS level details. Check it out here: <a href=https://github.com/collinmatz/updated-portfolio>Portfolio</a></span>",
        "<span>I built an AI Tic-Tac-Toe system using Python to implement the minimax algorithm. Check it out here: <a href=https://github.com/collinmatz/tictactoe>AI Tic-Tac-Toe</a></span>"
      ]],
      ["Contact", [
        "<a href=mailto:collin.matz.a+portfolio@gmail.com?Subject=Hello!>Email</a>",
        "<a href=https://www.linkedin.com/in/collinmatz/>LinkedIn</a>",
        "<a href=https://github.com/collinmatz>GitHub</a>"
      ]],
    ]);

    this.showInfo();
  }

  async blink() {
    this.cursorBlink = !this.cursorBlink;
    await sleep(100);
  }

  // functions for handeling html interactions
  async showInfo() {
    await sleep(1200);
    this.infoRenderReady = true;
  }
}
