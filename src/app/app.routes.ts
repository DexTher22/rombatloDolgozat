import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DiamondComponent } from './diamond/diamond.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: AboutComponent},
  { path: 'about', component: AboutComponent},
  { path: 'diamond', component: DiamondComponent}
];
