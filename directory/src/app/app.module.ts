import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';
import { PostComponent } from './components/post/post.component';
import { PostFilterPipe } from './components/post/PostFilter/post-filter.pipe';
import { IdFilterPipe } from './components/post/PostFilter/id-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    PostComponent,
    PostFilterPipe,
    IdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
