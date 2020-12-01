import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

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
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { TesisComponent } from './components/tesis/tesis.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes:Routes = [
  {path:'home', component:HomeComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'generator', component:GenerateComponent},
  {path:'projector', component:ProjectComponent},
  {path:'mixer', component:MixComponent},
  {path:'resume', component:ResumeComponent},
  {path:'tesis', component:TesisComponent},
  {path:'resources', component:ResourcesComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlidersComponent,
    GenerateComponent,
    ProjectComponent,
    MixComponent,
    ProjectmixComponent,
    ImageComponent,
    HomeComponent,
    GalleryComponent,
    ResumeComponent,
    TesisComponent,
    ResourcesComponent,
    ResumeComponent,
    TesisComponent,
    ResourcesComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
