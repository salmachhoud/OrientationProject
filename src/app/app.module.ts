import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UniversityComponent } from './components/university/university.component';
import { UnivesitylistComponent } from './components/universitylist/universitylist.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ManageComponent } from './components/manage/manage.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';

import { UniversityService } from './services/university.service';
import { GlobalService } from './services/global.service';
import { AddUniversityComponent } from './components/addUniversity/adduniversity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ManageComponent,
    UniversityComponent,
    UnivesitylistComponent,
    NavbarAdminComponent,
    CartComponent,
    FooterAdminComponent,
    AboutComponent,
    UniversitiesComponent,
    UniversityComponent,
    AddUniversityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UniversityService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
