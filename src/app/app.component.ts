import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

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

