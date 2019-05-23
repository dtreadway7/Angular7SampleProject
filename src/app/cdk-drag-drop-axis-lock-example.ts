import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CdkDrop } from '@angular/cdk/drag-drop';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * @title Drag&Drop position locking
 */
@Component({
  selector: 'cdk-drag-drop-axis-lock-example',
  templateUrl: 'cdk-drag-drop-axis-lock-example.html',
  styleUrls: ['cdk-drag-drop-axis-lock-example.scss'],
})
export class CdkDragDropAxisLockExample implements AfterViewInit {
  @ViewChildren(CdkDrop) cdkDrop: QueryList<CdkDrop>;
  drops: CdkDrop[] = [];
  tableData = [
    [{ id: 1, data: 'test1' }, { id: 2, data: 'test1' }, { id: 3, data: 'test1' }],
    [{ id: 4, data: 'test1' }, { id: 5, data: 'test1' }, { id: 6, data: 'test1' }],
    [{ id: 7, data: 'test1' }, { id: 8, data: 'test1' }, { id: 9, data: 'test1' }],
  ]

  ngAfterViewInit() {
    const v = this.cdkDrop.map(cdk => cdk);
    console.log(v)
    setTimeout(() => this.drops = v);
  }

  drop(evt) {
    // console.log(evt.container, evt.previousContainer);
  }
}

@Pipe({
  name: 'removeMe'
})
export class RemoveMePipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    return [...value].filter(a => a.id !== args.id);

  }

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
