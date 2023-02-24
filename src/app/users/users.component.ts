import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
// import {MatSort} from '@angular/material/sort';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTable, MatTableDataSource} from '@angular/material/table';
import _ from 'lodash';
import { HttpClient } from '@angular/common/http';

export interface userdetails {
  id: number;
  username: string;
  number: number;
  email: string;
};

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
//  userdetails: { id: number; username: string; number: number;email:string }[]=[];
 displayedColumns: string[] = ['select','username', 'number', 'email'];
  
  _dataSource :userdetails[] = [];
  
  dataSource = new MatTableDataSource(this._dataSource);
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(private http: HttpClient) { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  
  ngOnInit(): void {
  
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.dataSource.data = _.cloneDeep(this.dataSource.data);
   console.log(this.dataSource)
  }

  /** Select or deselect all rows  */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  setData(){

    //need to create a service for server functions(get,post etc). 
     this.http.get<userdetails[]>('http://localhost:3000/users').subscribe(res => {
    console.log('res', res);
   
    this.dataSource.data = res;
  })
  }

 
  deleteUsers(){

  const data = this.dataSource.data;
  this.selection.selected.forEach((selectedElem)=>{
    (selectedElem.id);
    this.dataSource.data.forEach((elem,ind)=>{
      if(elem.id ==selectedElem.id){
        data.splice( ind, 1);
      }
    })
   
    this.dataSource.data = data;
  })
   }

}
