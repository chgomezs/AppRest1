import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name : String;
  password : String;
  mensaje : String;

  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
}
async notificar(na: HTMLInputElement, con: HTMLInputElement)
{
  if(na.value == "")
  {
    this.mensaje = "falta el username";
    const toast = await this.toastController.create({
      message : "Falta escribir el username",
      duration: 2000
    })
    toast.present();
  }
  else if(con.value == "")
  {
    this.mensaje = "falta la contraseña";
    const toast = await this.toastController.create({
      message : "Falta escribir la password",
      duration: 2000
    })
    toast.present();
  }
  else if(con.value != "1234")
  {
    this.mensaje = "falta la contraseña";
    const toast = await this.toastController.create({
      message : "password incorrecta",
      duration: 2000
    })
    toast.present();
  }
  // else if(con.value == "")
  // {
  //   this.mensaje = "Falta password";
  // }
  else
  {
    this.mensaje = "";
    const alert = await this.alertController.create({
      header : 'Felicidades',
      subHeader : 'Ingresaste con exito',
      message: '',
      buttons: ['ok'],
    });
    await alert.present();
  }
}
  limpiar(na: HTMLInputElement, con: HTMLInputElement)
  {
    na.value = "";
    con.value = "";
  }
}