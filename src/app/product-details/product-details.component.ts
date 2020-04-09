import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(map(p => p.productId))
      .subscribe(id => {
        this.productsService.getProductById(id)
          .subscribe(product => this.product = product);
      });
  }

}
