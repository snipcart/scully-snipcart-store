import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
}
