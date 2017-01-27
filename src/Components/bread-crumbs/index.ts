import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BreadCrumbs } from './bread-crumbs-component';
import { RouterModule } from '@angular/router'


@NgModule({
    declarations: [BreadCrumbs],
    exports: [BreadCrumbs],
    imports: [BrowserModule, RouterModule]
})
export class BreadCrumbsModule { }