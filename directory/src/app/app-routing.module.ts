import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DirectoryComponent } from './components/directory/directory.component';

const routes: Routes = [
  {path: 'directory', component: DirectoryComponent},
  {path: 'directory/:id', component: DirectoryComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
