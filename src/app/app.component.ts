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

  public artists: Array<array> = [];

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
    //console.log('new-index', this);
    this.newElements.splice(index,1);
  }

  deleteIconArray(index: any) {


    //this.elements.find(x => x == this.personId);
    //this;
    //this.elements.
    //console.log('icon-index', index.parentNode.parentNode);
    this.elements.splice(index, 1);
  }

 findDuplicates ( data ) {

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

  enter( event: CdkDragDrop <string[]> ) {

    console.log('entered');

  }


  drop( event: CdkDragDrop <string[]> ) {

    if ( event.previousContainer !== event.container ) {
        //console.log( 'container', event.container.id );
        var thisData = event.container.data;

            transferArrayItem( event.previousContainer.data, event.container.data,
                event.previousIndex, event.currentIndex);

            if ( thisData.length > 1 ) {
              if ( event.container.id === "cdk-drop-list-1" && thisData.length > 1 ) {

                    // if(this.newElements[0][0][0] && this.newElements[0][0][0] === "Example"){

                    //   for(var i = 0; i < this.newElements.length; i++ ){
                    //       this.delete(this.newElements[i]);
                    //   }
                    //  }
                    var newData = thisData.concat ();
                    var newDataCopy = thisData.concat ();

                    this.elements.push( newDataCopy );
                    this.newElements.push( newData );



                    // OnInit();






              }
            }

    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('moved');

    }
  }
}

