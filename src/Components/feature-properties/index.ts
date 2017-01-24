import { NgModule } from '@angular/core';
import { FeatureProperties } from './feature-properties-component';
import { LeadFormModule } from '../lead-form'

@NgModule({
    declarations: [FeatureProperties],
    exports: [FeatureProperties],
    imports: [LeadFormModule]
})
export class FeaturePropertiesModule { }