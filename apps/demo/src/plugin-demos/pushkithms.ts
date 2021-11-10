import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPushkithms } from '@demo/shared';
import { } from '@hms-plugin/pushkithms';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPushkithms {
	
}
