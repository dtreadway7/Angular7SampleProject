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
  // artists = [
    // 'Function 1',
    // 'Function 3',
    // 'Function 5',
    // 'Function 7'
  //];

  newElements = [
    [['a']],

  ];


  elements = [
    //[['Func 1']],
    [['a']],
    [['b']],
    [['c']],


    // [['Func 2'],['a'],['b']],
    // [['Func 3'],['b']],
    // [['Func 4'],['b'],['c']],
    // [['Func 2']],
    // [['Func 5'],['a'],['b'],['c']],
    // [['Func 3']]
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      console.log('container', event.container.id);
      var newArray = [];
      transferArrayItem(event.previousContainer.data,event.container.data,
        event.previousIndex, event.currentIndex);

        var thisData = event.container.data;


        if(thisData.length > 1) {
          newArray.push(event.previousContainer.data);
        if(event.container.id === "cdk-drop-list-1" && thisData.length > 1) {
            console.log('trasnferrred', thisData);

            var newData = thisData.concat();


            this.newElements.push(newData);
            this.elements.push(newData);

                //this.elements = newArray;

                //this.newElements = newArray;

                console.log(thisData);
        }}


    } else {
      moveItemInArray(this.elements, event.previousIndex, event.currentIndex);
      console.log('moved');

    }
  }
}

