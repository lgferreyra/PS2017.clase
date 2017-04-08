import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private flashlight: Flashlight, private vibration: Vibration) {

  }

  flashlightOn(){
    this.flashlight.switchOn();
  }

  flashlightOff(){
    this.flashlight.switchOff();
  }

  vibrate(){
    this.vibration.vibrate(1000);
  }
}
