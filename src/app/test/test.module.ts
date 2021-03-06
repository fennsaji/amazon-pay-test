import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PageComponent}
]

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }
