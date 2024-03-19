import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  imports: [CommonModule]
})

export class PrincipalComponent {

  //variavel para a visibilidade dos botões
  btnCadastro:boolean = true;

}
