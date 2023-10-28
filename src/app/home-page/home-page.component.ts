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

  blinkSubscribe: Subscription;
  cursorBlink: boolean = true;

  infoContent: Map<string, string>;
  infoRenderReady: boolean = false;

  constructor() {

    this.greeting = new TypeWriter("", "Hey There,", 65)
    this.name = new TypeWriter("", "I'm Collin", 45);
    this.desc = new TypeWriter("", "Software Developer, AI/ML Engineer", 25)    

    this.greeting.write();
    this.name.write();
    this.desc.write();

    this.blinkSubscribe = interval(500).subscribe(() => {
      this.blink();
    })

    // content for carousel
    this.infoContent = new Map([
      ["About", ""],
      ["Projects", ""],
      ["Contact", ""],
    ]);

    this.showInfo();
  }

  async blink() {
    this.cursorBlink = !this.cursorBlink;
    await sleep(100);
  }

  // functions for handeling html interactions
  async showInfo() {
    await sleep(1000);
    this.infoRenderReady = true;
  }
}
