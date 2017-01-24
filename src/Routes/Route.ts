import { Routes } from '@angular/router';
import { StatePage } from '../Pages/state-page/state-page-component'



export const routes: Routes = [
    { path: '', component: StatePage },
    { path: ':countyId/:stateId/:cityId', component: StatePage},
    { path: ':zipcode', component: StatePage}
]