import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public selectedItems: Array<array> = [];

  public newElements: Array<array> = [];

  public elements: Array<array> = [
    [ 'a' ],
    [ 't' ],
    [ 'c' ],
    [ 'g' ],
  ];


  // add drag items
  add () {
    this.elements.push ( this.elements.length + 1 );
  }

  // delete drag items from bottom list
  deleteNewArray ( index: any ) {
    this.newElements.splice( index, 1 );
  }

  // delete drag items from top list
  deleteIconArray ( index: any ) {
    this.elements.splice( index, 1 );
  }

  // find dupes
  findDuplicates ( data ) {

    let result = [];

    data.forEach ( function( element, index ) {
      if ( data.indexOf ( element, index + 1 ) > -1 ) {
        if ( result.indexOf ( element ) === -1 ) {
             result.push ( element );
        }
      }
    });

    return result;
  }

  // console log
  chainMethod ( obj ) {
    console.log ( obj );
    return obj;
  }

  // confirmation
  clickMethod( name: string ) {
    if( confirm ("Functions Chained! Check your console!") ){}
  }

  // play chain
  playThis( index: any ) {

    console.log( "FUNCTION CHAIN!" );
    for ( let i = 0, len = this.newElements.length; i < len; i++ ) {

       if( this.newElements[ i ].length > 0 ) {

        for ( let a = 0, alen = this.newElements[ i ].length; a < alen; a++ ) {

          // if no children
          if( !this.newElements[ i ][ a ].length ) {

              this.chainMethod( this.newElements[ i ][ a ] );

          } // if children
          if( this.newElements[ i ][ a ].length > 0 ) {

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

            // check if more than 1 drad item in list
            if ( thisData.length > 1 ) {
              if ( event.container.id === "cdk-drop-list-1" && thisData.length > 1 ) {

                    // concat arrays
                    newData = thisData.concat ();
                    newDataCopy = thisData.concat ();

                    // add new items to both array - simple push
                    this.elements.push( newDataCopy );
                    this.newElements.push( newData );

              }
            }

    } else {

      moveItemInArray( event.container.data, event.previousIndex, event.currentIndex );

    }
  }
}

