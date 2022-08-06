import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {Products} from './../sampleData';
export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  data=[];
  fg: FormGroup;
  displayedColumns: string[] = ['productId', 'productName','edit' ,'delete'];
  dataSource =new MatTableDataSource(this.data); 
  isEdit=false;
  userRole: string;
  constructor(
    private _formBuilder: FormBuilder,
  ) { 
    
  }

  ngOnInit(): void {

    // Role Check
    let user= localStorage.getItem('user');
    this.userRole = JSON.parse(user)['role'];


    /**FORM BUILDER */
    this.fg= this._formBuilder.group({
      productId: [''],
      productName: ['']
    });
  
    // get Data
    this.getData();  

    this.fg.patchValue({
      productId: this.data.length+1
    });
  }
 
  getData(){
    Products.forEach(x=>{
      this.data.push(x);
    })
    this.dataSource = new MatTableDataSource(this.data);
  }

  save(){
    if(!this.isEdit){
      this.data.push({'productId': this.data.length+1,'productName': this.fg.get('productName').value});
    }else{
      this.data.some((obj)=>{
        if (obj.productId == this.fg.get('productId').value){
            //change the value here
            obj.productName = this.fg.get('productName').value;
            return true;    //breaks out of he loop
        }
      });
    }
   this.afterOperation();
 }
 
 afterOperation(){
  this.fg.patchValue({
    productId: this.data.length+1,
    productName: ''
  });
  this.isEdit = false;
  this.data.forEach((x,i)=>{
    if(i%2){
      x.imgSrc='https://www.playblog.it/wp-content/uploads/2021/10/Samsung-Galaxy-S22-Ultra-potrebbe-avere-il-miglior-display-di-sempre.jpg'
    }else{
      x.imgSrc='https://c1.wallpaperflare.com/preview/346/197/186/apple-imac-computers-imac-apple.jpg'
    }
  })
  this.dataSource = new MatTableDataSource(this.data);
 };

 edit(selectedData){
  this.fg.patchValue({
    productId: selectedData.productId,
    productName: selectedData.productName
  });

  this.isEdit =true;

 }

 deleteItem(selectedData){
  this.data = this.data.filter(x=> x.productId != selectedData.productId);
  this.afterOperation();

 }

}
