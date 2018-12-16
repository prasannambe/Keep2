import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesService } from './services/notes.service';



const appRoutes : Routes =[
  { path:'login',component:LoginComponent  },
  { path:'',component:LoginComponent  },
  { path:'dashboard',component:DashboardComponent  }
  
]

@NgModule({
  declarations: [ AppComponent, HeaderComponent ,LoginComponent,DashboardComponent ],
  imports: [ RouterModule.forRoot(appRoutes),BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule,
    ReactiveFormsModule, MatCardModule, MatButtonModule, MatInputModule, MatExpansionModule, MatToolbarModule,
    MatFormFieldModule ],
  providers: [ NotesService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
