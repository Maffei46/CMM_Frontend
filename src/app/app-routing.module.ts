import { AuthGuard } from './_helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmmComponent } from './views/cmm/cmm.component';
import { LoginComponent } from './views/login/login.component';
import { LoggedMainComponent } from './views/logged/logged-main/logged-main.component';
import { CurrentComponent } from './views/logged/current/current.component';
import { TechnologiesComponent } from './views/logged/technologies/technologies.component';
import { TagetikVersionsComponent } from './views/logged/tagetik-versions/tagetik-versions.component';
import { ExportsComponent } from './views/logged/exports/exports.component';
import { NotAuthGuard } from './_helpers/notAuth.guard';
import { TagetikVersionsAddComponent } from './views/logged/tagetik-versions-add/tagetik-versions-add.component';
import { TagetikVersionsEditComponent } from './views/logged/tagetik-versions-edit/tagetik-versions-edit.component';
import { TechnologiesAddComponent } from './views/logged/technologies-add/technologies-add.component';
import { TechnologiesEditComponent } from './views/logged/technologies-edit/technologies-edit.component';
import { TechnologyVersionsAddComponent } from './views/logged/technology-versions-add/technology-versions-add.component';
import { TechnologyVersionsEditComponent } from './views/logged/technology-versions-edit/technology-versions-edit.component';

const routes: Routes = [
  { path: '', component: CmmComponent },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  {
    path: 'reserved',
    component: LoggedMainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'current', component: CurrentComponent },
      { path: 'technologies', component: TechnologiesComponent },
      { path: 'technologies/add', component: TechnologiesAddComponent },
      { path: 'technologies/edit/:id', component: TechnologiesEditComponent },
      {
        path: 'technologies/versions/add',
        component: TechnologyVersionsAddComponent,
      },
      {
        path: 'technologies/:idTechnology/edit/:id',
        component: TechnologyVersionsEditComponent,
      },
      { path: 'tagetik_versions', component: TagetikVersionsComponent },
      { path: 'tagetik_versions/add', component: TagetikVersionsAddComponent },
      {
        path: 'tagetik_versions/edit/:id',
        component: TagetikVersionsEditComponent,
      },
      { path: 'exports', component: ExportsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
