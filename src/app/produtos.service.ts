import { Injectable } from '@angular/core';
import { IProduto, produtosList} from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtosList;

  constructor() { }

  getAll(){
    return this.produtos;
  }
  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
