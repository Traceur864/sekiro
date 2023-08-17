import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'Sobre-mi', component: AboutComponent},
  {path: 'Proyectos', component: ProjectsComponent},
  {path: 'Crear-proyecto',component: CreateComponent},
  {path: 'Contacto', component: ContactComponent},
  {path: 'proyecto/:id', component: DetailComponent},
  {path: 'Editar/:id', component: EditComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
