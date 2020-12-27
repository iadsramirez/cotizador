import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DetalleCotizacion } from '../modelo/DetalleCotizacion';
import { LoginsService } from '../servicios/logins.service';

@Component({
  selector: 'ngx-datoscli',
  templateUrl: './datoscli.component.html',
  styleUrls: ['./datoscli.component.scss']
})
export class DatoscliComponent implements OnInit {

  name = 'Angular';

  lista=[{codigo:54545,nombre:'producto1',precio:25.33},{codigo:111,nombre:'producto2',precio:30.33}]

  stepProductoForm: FormGroup;
  listaDetalleCotizacion:DetalleCotizacion[]=[];


  constructor(private fb: FormBuilder,private login:LoginsService) { 

    this.login.logeado=true;

    this.stepProductoForm = this.fb.group({
      codProd: [1, Validators.required],
      quantities: this.fb.array([]),

    });


  }

  onSubmit() {
    console.log(this.stepProductoForm.value);
  }

  quantities() : FormArray {
    return this.stepProductoForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      cantidad: '',
      precio: '',
      prod: '',
      codigo:'',
      ubic:'',
      alto:'',
      ancho:'',
      valorUnit:'', 
      descEsp:'',
      descuento:'',
      total:''
    })
  }


  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }



  ngOnInit(): void {
  }

  modificar(indice:number){
     this.lista[indice].nombre;
  }

  agregar(){
    console.log(this.stepProductoForm.get('codProd').value);
    let objeto=new DetalleCotizacion();
    this.listaDetalleCotizacion.push(objeto);
    
  }

  probar(data:any,indice:number){
    if(data){
      console.log('lo que viene de la mierda'+JSON.stringify(data));
      console.log('indice de mierda'+indice);
      const myForm = (<FormArray>this.stepProductoForm.get("quantities")).at(indice);
      myForm.patchValue({
        price:30
      })
    }
   
  }

}
