import { NgModule } from '@angular/core';
import { StatePage } from './state-page-component';
import { SearchBarModule } from '../../Components/search-bar';
// import { BreadCrumbsModule } from '../../Components/bread-crumbs';
// import { PropertyDescriptionModule } from '../../Components/property-description';
// import { FeaturePropertiesModule } from '../../Components/feature-properties';
// import { LayoutResultsModule } from '../../Components/layout-results';

@NgModule({
    declarations: [StatePage],
    exports: [StatePage],
    imports: [
        SearchBarModule
    ]
})
export class StatePageModule { }