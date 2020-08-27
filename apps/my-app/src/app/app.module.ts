import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyLibraryModule } from '@my-workspace/my-library';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
