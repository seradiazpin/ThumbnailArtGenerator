import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { GenerateComponent } from './components/generate/generate.component';
import { ProjectComponent } from './components/project/project.component';
import { MixComponent } from './components/mix/mix.component';
import { FormsModule } from '@angular/forms';
import { ProjectmixComponent } from './components/projectmix/projectmix.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlidersComponent,
    GenerateComponent,
    ProjectComponent,
    MixComponent,
    ProjectmixComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
