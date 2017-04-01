import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserFormPage } from '../user-form/user-form';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the UserList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html'
})
export class UserListPage {

  listUser = [{nombre:"Leo", apellido:"ferreyra", username:"lferreyra", password:"asdfasdf"}, {nombre:"admin", apellido:"lalala", username:"admin", password:"asdfasdf"}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

  itemSelected(user){
    this.navCtrl.push(UserFormPage, {titulo: "Modificar Usuario", user: user});
  }

  deleteUser(user){
    let confirm = this.alertCtrl.create({
      title: 'Atención',
      message: '¿Está seguro que desea eliminar este usuario?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked', user);
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Agree clicked', user);
          }
        }
      ]
    });
    confirm.present();
  }
}
