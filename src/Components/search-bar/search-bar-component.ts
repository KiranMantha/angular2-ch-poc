import { Component, Inject, AfterViewInit } from '@angular/core';
import { propertySrv } from '../../Services/property-service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'search-bar',
    template: require('./search-bar-component.tpl.html')
})
export class SearchBar implements AfterViewInit {
    constructor(private _propertySrv: propertySrv, private _router: Router, private _route: ActivatedRoute) {

    }
    public searchText = { url: '', displayText: '' };
    public model: any;

    public search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term.length < 2 ? []
                : this._propertySrv.getSearchResults(term));

    public formatter = (result: { [key: string]: string }) => result.displayText;

    private titleCase(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    private handleSubmit() {
        this._router.navigateByUrl(this.searchText.url);
    };



    public submitQuery(searchForm: { [key: string]: any }) {
        this.handleSubmit();
    }

    public onSelect($event: { [key: string]: any }) {
        this.searchText = $event.item;
        this.handleSubmit();
    }

    ngAfterViewInit() {
        let titleCase = this.titleCase;
        if (this._route.snapshot.params['cityId']) {
            this.searchText.displayText = this._route.snapshot.params['cityId'].split('-').reduce(function (a, b) {
                return [].concat(a, titleCase(b));
            }, []).join(' ') + ', ' + this._route.snapshot.params['countyId'].toUpperCase();
            if (this._route.snapshot.params['zipcode']) {
                this.searchText.displayText = this._route.snapshot.params['zipcode'];
            }
        }
    }

}