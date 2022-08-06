import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Products} from '../sampleData';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product: any;
  count=1;
  rate= 50;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('productId');
    this.product = Products.filter(x=>x.productId.toString() == productId)[0]
  }

}
