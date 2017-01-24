import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { SearchBar } from './search-bar-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
    declarations: [SearchBar],
    entryComponents: [SearchBar],
    exports: [SearchBar],
    imports: [NgbModule, FormsModule, BrowserModule]
})
export class SearchBarModule { }