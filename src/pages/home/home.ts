import { Component } from '@angular/core';
import { Geolocation, Geoposition } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PostPage } from '../post/post';
import { PostService } from '../../providers/post-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public posts:Array<any> = [{id: 1, title: 'Teste1', description: 'Descrição 1 dos Testes de Post', category:[{id: 1, name: 'people'}], user:[{id: "1",name: "josé",email: "jose@admin.com",phone: "4199999999"}],create_date: '2015-10-14 19:47:43'},
  {id: 1, title: 'Teste2', description: 'Descrição 2 dos Testes de Post', category:[{id: 2, name: 'vehicles'}], user:[{id: "2",name: "joão",email: "joao@admin.com",phone: "41888888888"}],create_date: '2015-10-15 06:15:55'},
  {id: 1, title: 'Teste3', description: 'Descrição 3 dos Testes de Post', category:[{id: 3, name: 'objects'}], user:[{id: "3",name: "pedro",email: "pedro@admin.com",phone: "4177777777"}],create_date: '2015-10-16 12:52:25'}];
  private coordinates: Geoposition;
  public alertCtrl: AlertController;
  private postservice: PostService;
  public distance: number = 10;

  constructor(public navCtrl: NavController, alertCtrl: AlertController, postservice: PostService ) {
    this.alertCtrl = alertCtrl;

    this.postservice = postservice;
    Geolocation.getCurrentPosition().then((resp) => {
      this.coordinates = resp;
      //this.showAlert("Coordenadas", "Lat: " + this.coordinates.coords.latitude + " Long:" + this.coordinates.coords.longitude);
      //-49.360237,-25.44564
      //this.postservice.findPosts(this.coordinates.coords.latitude,this.coordinates.coords.longitude,this.distance,10,0);
      console.log(this.coordinates.coords.latitude + " - " + this.coordinates.coords.longitude);
      
      this.postservice.findPosts(this.coordinates.coords.latitude,this.coordinates.coords.longitude,this.distance,10,0).subscribe(data => {
        console.log(data["results"][0].id);

        this.posts = data["results"];
      }, error => {
        console.error("Erro acessar os dados dos posts: " + error);
      });

      //console.log(ret[0].id);
    }).catch((error) => {
      console.log('Erro ao recuperar a geolocalizaçao: ' + error);
    });
  }

  public btnLoginClick(){
    this.navCtrl.push(LoginPage);
  }

  public btnPostClick(){
    this.navCtrl.push(PostPage);
  }  

  public btnFilterClick(){
    Geolocation.getCurrentPosition().then((resp) => {
      this.coordinates = resp;
      this.showAlert("Coordenadas", "Lat: " + this.coordinates.coords.latitude + " Long:" + this.coordinates.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  private showAlert(_title, _msg){
    let alert = this.alertCtrl.create({
      title: _title,
      subTitle: _msg,
      buttons: ['OK']
    });
    alert.present();
  }  



}
