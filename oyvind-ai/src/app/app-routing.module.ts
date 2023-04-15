import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineGeneratorComponent } from './components/smart/wine-generator/wine-generator.component';

const routes: Routes = [
{
  path: '',
  component: WineGeneratorComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
