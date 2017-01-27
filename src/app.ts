import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GlobalHeaderModule } from './Components/global-header';
import { GlobalFooterModule } from './Components/global-footer';
import { StatePageModule } from './Pages/state-page'

import { MainComponent } from './Components/app/app-component';
import { routes } from './Routes/Route'

import { propertySrv } from './Services/property-service';
import { utilSrv } from './Services/util-service'

@NgModule({
    bootstrap: [MainComponent],
    declarations: [MainComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(routes),
        GlobalHeaderModule,
        GlobalFooterModule,
        StatePageModule
    ],
    providers: [propertySrv, utilSrv]
})
export class MainModule { }