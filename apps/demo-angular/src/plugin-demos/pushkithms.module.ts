import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PushkithmsComponent } from './pushkithms.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PushkithmsComponent }])],
  declarations: [PushkithmsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class PushkithmsModule {}
