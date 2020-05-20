import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppInterceptorService } from './interceptor'

import {
  InteractionService,
  StudentService,
  AppLoaderService
} from './service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    InteractionService,
    StudentService,
    AppLoaderService,
    AppInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        InteractionService,
        StudentService,
        AppLoaderService,
        AppInterceptorService
      ]
    }
  }
}
