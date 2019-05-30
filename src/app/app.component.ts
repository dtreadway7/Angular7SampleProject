import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public selectedItems: Array<array> = [];

  public newElements: Array<array> = [];

  public elements: Array<array> = [
    ['a'],
    ['t'],
    ['c'],
    ['g'],
  ];


  add() {
    this.elements.push(this.elements.length + 1);
  }

  deleteNewArray(index: any) {
    this.newElements.splice(index,1);
  }

  deleteIconArray(index: any) {
    this.elements.splice(index, 1);
  }

 findDuplicates ( data ) {

    let result = [];

    data.forEach( function( element, index ) {
      if ( data.indexOf( element, index + 1 ) > -1 ) {
        if ( result.indexOf( element ) === -1 ) {
             result.push( element );
        }
      }
    });

    return result;
  }

  chainMethod( obj ) {
    console.log( obj );
    return obj;
  }


  clickMethod(name: string) {
    if(confirm("Functions Chained! Check your console!")) {
    }
  }

  playThis( index: any ){

    console.log("FUNCTION CHAIN!");
    for ( let i = 0, len = this.newElements.length; i < len; i++ ) {
       if( this.newElements[ i ].length > 0 ){
          for ( let a = 0, alen = this.newElements[ i ].length; a < alen; a++ ) {
            if( !this.newElements[ i ][ a ].length ){

              this.chainMethod( this.newElements[ i ][ a ] );

            }
              if( this.newElements[ i ][ a ].length > 0 ){
                for ( let c = 0, clen = this.newElements[ i ][ a ].length; c < clen; c++ ) {

                    this.chainMethod( this.newElements[ i ][ a ][ c ]);
                }
             }
          }
       }
    }
  }


  drop( event: CdkDragDrop <string[]> ) {

    if ( event.previousContainer !== event.container ) {

        var thisData = event.container.data, newData, newDataCopy;

            transferArrayItem(
              event.previousContainer.data,
                event.container.data,
                  event.previousIndex,
                    event.currentIndex);

            if ( thisData.length > 1 ) {
              if ( event.container.id === "cdk-drop-list-1" && thisData.length > 1 ) {

                    newData = thisData.concat ();
                    newDataCopy = thisData.concat ();

                    this.elements.push( newDataCopy );
                    this.newElements.push( newData );

              }
            }

    } else {

      moveItemInArray( event.container.data, event.previousIndex, event.currentIndex );

    }
  }
}

