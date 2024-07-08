import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { HomeComponent } from './practice/home/home.component';
import { ProductsComponent } from './practice/products/products.component';
import { SubjectcompComponent } from './practice/subjectcomp/subjectcomp.component';
import { MyServiceService } from './practice/my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './component/blog/blog.component';
import { ParentComponent } from './component/parent/parent.component';
import { blogReducer } from './shared/store/blog/blog.reducer';
import { Appstate } from './shared/store/Globel/app.state';
import { AddblogComponent } from './component/addblog/addblog.component';





@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcounterComponent,
    HomeComponent,
    ProductsComponent,
    SubjectcompComponent,
    BlogComponent,ParentComponent,
    AddblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(Appstate),
    EffectsModule.forRoot([]),
    MaterialModule,
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: environment.production }),
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [MyServiceService,
    provideAnimations()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
