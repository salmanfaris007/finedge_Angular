import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  data=[];
  fg: FormGroup;
  displayedColumns: string[] = ['productId', 'productName','edit' ,'delete'];
  dataSource =new MatTableDataSource(this.data); 
  isEdit=false;
  
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.fg= this._formBuilder.group({
      productId: [''],
      productName: ['']
    });

    this.fg.patchValue({
      productId: this.data.length+1
    })
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
