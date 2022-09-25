import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-datos',
  templateUrl: './detalle-datos.page.html',
  styleUrls: ['./detalle-datos.page.scss'],
})
export class DetalleDatosPage implements OnInit {

  datosRecibe : any;

  constructor(private route : Router, private router : ActivatedRoute) {

    let datosEnv : any [];

    datosEnv = this.router.snapshot.params['formularioRegistro'];
    /*
    this.router.queryParams.subscribe(parametros =>{
      console.log('Parametros', parametros);

      if(this.route.getCurrentNavigation().extras.state){
        this.datosRecibe = this.route.getCurrentNavigation().extras.state.formPerson
      }
    });
    */
  }

  ngOnInit() {
  }

}
