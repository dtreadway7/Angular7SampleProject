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

  const artists = [];
  // artists = [
  //   'Function 1',
  //   'Function 3',
  //   'Function 5',
  //   'Function 7'
  // ];

   const alteArtists = [
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
      transferArrayItem(event.previousContainer.data,event.container.data,
        event.previousIndex, event.currentIndex);
        var thisData = event.container.data;
        if(thisData.length > 1) {
            console.log('trasnferrred', thisData);
            //console.log('newData1', newData);
            var newData = thisData.concat(thisData);
            // this.alteArtists.map(o => {
            //   return { newData };
            // });

            console.log('newData2', newData);
            this.alteArtists = newData;

        //  var newData =  event.container.data.concat(thisData);
        //  alteArtists.push(newData);

         console.log('newArray', this.alteArtists);

        }



    } else {
      moveItemInArray(this.artists, event.previousIndex, event.currentIndex);
      console.log('moved');

    }
  }
}

