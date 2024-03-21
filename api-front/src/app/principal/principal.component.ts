import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Cliente} from "../modelo/Cliente";
import {ClienteService} from "../servico/cliente.service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  imports: [CommonModule, FormsModule]
})

export class PrincipalComponent {

  //Objeto do tipo Cliente

  cliente = new Cliente();



  //variavel para a visibilidade dos botões
  btnCadastro:boolean = true;

  //JSON de dados dos clientes
  clientes:Cliente[] =[];
  //Construtor
  constructor(private servico:ClienteService) { }
  //Método para listar os clientes
  //esse this.clientes o clientes vem do JSON acima
  listar():void{
    this.servico.listar().subscribe(retorno =>this.clientes = retorno);
  }

  //Método de inicialização para chamar a listagem dos clientes assim que a pagina for aberta
  ngOnInit(): void{
    this.listar();
  }
}
