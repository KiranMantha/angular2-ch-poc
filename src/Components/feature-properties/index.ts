import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FeatureProperties } from './feature-properties-component';
import { LeadFormModule } from '../lead-form';


@NgModule({
    declarations: [FeatureProperties],
    exports: [FeatureProperties],
    imports: [BrowserModule]
})
export class FeaturePropertiesModule { }