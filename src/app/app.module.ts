import { TagetikVersionsEffects } from './state/tagetikVersions/tagetikVersion.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CmmComponent } from './views/cmm/cmm.component';
import { LoginComponent } from './views/login/login.component';
import { CurrentComponent } from './views/logged/current/current.component';
import { LoggedMainComponent } from './views/logged/logged-main/logged-main.component';
import { TechnologiesComponent } from './views/logged/technologies/technologies.component';
import { TagetikVersionsComponent } from './views/logged/tagetik-versions/tagetik-versions.component';
import { ExportsComponent } from './views/logged/exports/exports.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagetikVersionsAddComponent } from './views/logged/tagetik-versions-add/tagetik-versions-add.component';
import { TagetikVersionsEditComponent } from './views/logged/tagetik-versions-edit/tagetik-versions-edit.component';
import { TechnologiesAddComponent } from './views/logged/technologies-add/technologies-add.component';
import { TechnologyVersionsAddComponent } from './views/logged/technology-versions-add/technology-versions-add.component';
import { StoreModule } from '@ngrx/store';
import { TagetikVersionsReducer } from './state/tagetikVersions/tagetikVersion.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TechnologyVersionsEditComponent } from './views/logged/technology-versions-edit/technology-versions-edit.component';
import { TechnologiesEditComponent } from './views/logged/technologies-edit/technologies-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CmmComponent,
    LoginComponent,
    CurrentComponent,
    LoggedMainComponent,
    TechnologiesComponent,
    TagetikVersionsComponent,
    ExportsComponent,
    TagetikVersionsAddComponent,
    TagetikVersionsEditComponent,
    TechnologiesAddComponent,
    TechnologyVersionsAddComponent,
    TechnologyVersionsEditComponent,
    TechnologiesEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //StoreModule.forRoot({ tagetikVersions: TagetikVersionsReducer }),
    //EffectsModule.forFeature([TagetikVersionsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
