import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { SimilarityComponent } from './similarity/similarity.component';

const routes: Routes = [
  {path:"",component:ResumeComponent},
  {path:"resume",component:ResumeComponent},
  {path:"similarity",component:SimilarityComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
