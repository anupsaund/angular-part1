import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNewComponentComponent } from './components/my-new-component/my-new-component.component';
import { SearchComponent } from './components/search/search.component';

const appUrls: Routes = [
  { path: 'anup', component: MyNewComponentComponent },
  { path: 'search', component: SearchComponent },

]; // this is where we add our routes.

@NgModule({
  imports: [RouterModule.forRoot(appUrls)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
