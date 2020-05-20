import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmOkComponent } from './components/confirmok';
import { HeaderComponent } from './components/header';

@NgModule({
  declarations: [ConfirmOkComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  entryComponents:[
    ConfirmOkComponent
  ],
  exports:[
    ConfirmOkComponent,
    HeaderComponent
  ]
})
export class SharedModule {

  // constructor (@Optional() @SkipSelf() parentModule?: SharedModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'SharedModule is already loaded. Import it in the AppModule only');
  //   }
  // }
  // static forRoot() : ModuleWithProviders{
  //   return {
  //     ngModule: SharedModule,
  //     providers:[ConfirmOkComponent,
  //               HeaderComponent]
  //   }
  // }
 }
