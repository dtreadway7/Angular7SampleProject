// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'DND Amazingness';
// }

import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  artists = [];


  newElements = [
    [['Example']],
    // [['Example']],
    // [['Example']],
    // [['Example']],
    // [['Example']],
    // [['Example']],
    // [['Example']],
    // [['Example']],
    // [['Example']],
    // [['Example']],
    // [['Example']],

  ];



  elements = [

    [['a']],
    [['t']],
    [['c']],
    [['g']],

  ];


  deleteNewArray(index: any) {
    this.newElements.splice(index,1);
  }

  deleteIconArrayy(index: any) {
    this.elements.splice(index,1);
  }

  public findDuplicates ( data ) {

    let result = [];

    data.forEach( function( element, index ) {

      // Find if there is a duplicate or not
      if ( data.indexOf( element, index + 1 ) > -1 ) {

        // Find if the element is already in the result array or not
        if ( result.indexOf( element ) === -1 ) {
             result.push( element );
        }
      }
    });

    return result;
  }



  drop( event: CdkDragDrop <string[]> ) {

    if ( event.previousContainer !== event.container ) {
        //console.log( 'container', event.container.id );
        var thisData = event.container.data;
        var newArray = [];

            transferArrayItem( event.previousContainer.data,
              event.container.data,
                event.previousIndex, event.currentIndex);

        if ( thisData.length > 1 ) {

              //newArray.push ( event.previousContainer.data );

          if ( event.container.id === "cdk-drop-list-1" && thisData.length > 1 ) {

                // if(this.newElements[0][0][0] && this.newElements[0][0][0] === "Example"){

                //   for(var i = 0; i < this.newElements.length; i++ ){
                //       this.delete(this.newElements[i]);
                //   }
                //  }


                var newData = thisData.concat ();

                this.elements.push( newData );
                this.newElements.push( newData );

          }
        }

    } else {
      moveItemInArray(this.newElements, event.previousIndex, event.currentIndex);
      console.log('moved');





    }
  }
}

