import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { NgTemplateComponent } from './directivas/ng-template/ng-template.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './children/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroComponent,
    ListComponent,
    NgTemplateComponent,
    FatherComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
