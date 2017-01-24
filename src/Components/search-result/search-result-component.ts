import {Component,Input} from '@angular/core';

@Component({
    selector: 'search-result',
    template: require('./search-result-component.tpl.html')
})
export class SearchResult {
    @Input() data:any;
    @Input() key:any;
    
}