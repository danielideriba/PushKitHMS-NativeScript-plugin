import { Component, NgZone } from '@angular/core';
import { DemoSharedPushkithms } from '@demo/shared';
import { } from '@hms-plugin/pushkithms';

@Component({
	selector: 'demo-pushkithms',
	templateUrl: 'pushkithms.component.html',
})
export class PushkithmsComponent {
  
  demoShared: DemoSharedPushkithms;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPushkithms();
  }

}