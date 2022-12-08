import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent  implements OnInit{
  produtosList: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService
  ){}

  ngOnInit(): void{
    this.produtosList = this.produtosService.getAll();
  }

}
