import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html'
})
export class UserFormPage {

  user = {};
  titulo: string = "Crear un usuario";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if(this.navParams.get("titulo")!=null && this.navParams.get("user") != null){
      this.titulo = this.navParams.get("titulo");
      this.user = this.navParams.get("user");
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserFormPage');
  }

  logForm(){
    console.log(this.user);
  }
}
