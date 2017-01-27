import { Component, Input, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'property-description',
    template: require('./property-description-component.tpl.html')
})
export class PropertyDescription implements AfterViewInit {
    constructor(private _router: Router, private _ActivatedRoute: ActivatedRoute) {
    }
    public propertySearchTitle: string;
    public propertyDescriptionHtml: string;
    @Input() properties: Array<{ [key: string]: any }>;
    private setDescription(route: { [key: string]: any }): void {
        this.propertySearchTitle = 'Philadelphia, ' + (route['countyId'] ? route['countyId'].toUpperCase() : 'County') + ', Short-Term Rentals | 6 in city, ' + this.properties.length + ' nearby';
        this.propertyDescriptionHtml = '<p class=""> </p><p>View <strong>short-term rentals&nbsp;</strong>for<strong> Philadelphia</strong> – 6 in the city and 21 in the <strong>Philadelphia metro</strong> area. A short-term lease apartment is perfect if you have just moved, have been displaced by a fire or other disaster, are on a business trip, are relocating, or are just taking a long vacation and need a fully furnished apartment for an extended stay. CorporateHousing.com is your source for corporate lodging, short-term apartments and vacation properties in Philadelphia, the Philadelphia area, and across Pennsylvania.</p>    <p></p>';
        if (route['countyId']) {
            this.propertySearchTitle = 'City lists';
        }
        if (route['stateId']) {
            this.propertySearchTitle = 'Corporate Housing in ' + route['stateId'].replace('-', ' ') + ', ' + route['countyId'].toUpperCase() + ', metro | ' + this.properties.length + ' total';
            this.propertyDescriptionHtml = '<p>View <strong>corporate housing</strong>&nbsp;and <strong>temporary housing</strong> options in the <strong>' + route['stateId'].replace('-', ' ') + ' area</strong> – ' + this.properties.length + ' total among cities in the metro. Corporate housing is perfect if you have just moved, are on an extended business trip, are relocating, or just need a short-term home away from home. With CorporateHousing.com, youll find a variety of potential temporary housing in the Philadelphia metro, including extended-stay hotels, furnished apartments, corporate apartments, privately owned homes, and vacation properties.&nbsp;</p>';
        }

        if (route['cityId']) {
            let cr = route;
            var exactResult = this.properties.filter(function (x) {
                return cr['cityId'].replace(/-/g, ' ').toLowerCase() === x.city.toLowerCase()
            }).length;
            this.propertySearchTitle = route['stateId'].replace('-', ' ') + ', ' + route['countyId'].toUpperCase() + ', Short-Term Rentals | ' + exactResult + ' in city, ' + (this.properties.length - exactResult) + ' nearby';
            this.propertyDescriptionHtml = '<p class=""> </p><p>View <strong>short-term rentals&nbsp;</strong>for<strong> ' + route['cityId'].replace('-', ' ') + '</strong> – ' + this.properties.length + ' in the city and ' + this.properties.length + 'in the <strong>' + route['stateId'].replace('-', ' ') + ' metro</strong> area. A short-term lease apartment is perfect if you have just moved, have been displaced by a fire or other disaster, are on a business trip, are relocating, or are just taking a long vacation and need a fully furnished apartment for an extended stay. CorporateHousing.com is your source for corporate lodging, short-term apartments and vacation properties in Philadelphia, the Philadelphia area, and across Pennsylvania.</p>    <p></p>';
        }

        if (route['zipcode']) {
            let cr = route;
            var exactResult = this.properties.filter(function (x) { return cr['zipcode'] == x.zip; }).length;
            this.propertySearchTitle = 'Temporary Housing in ' + route['zipcode'] + ' ZIP Code | ' + exactResult + ' exact, ' + (this.properties.length - exactResult) + ' nearby';
            this.propertyDescriptionHtml = '<p>View <strong>temporary housing</strong> options in and around the <strong>' + route['zipcode'] + ' ZIP code</strong> of <strong>' + route['stateId'].replace('-', ' ') + ', ' + route['countyId'].toUpperCase() + '</strong> – ' + this.properties.filter(function (x) { return route['zipcode'] == x.zip; }).length + ' in Downingtown and ' + this.properties.length + ' nearby in the Philadelphia metro area. Temporary housing or executive rentals are perfect if you have just moved, are on a long business trip, or are temporarily relocating and need an extended-stay solution. If you didnt find a temporary housing option in 19335, consider expanding your search to Downingtown or&nbsp;the Philadelphia metro area.</p>';
        }
    }
    ngAfterViewInit() {
        this._router.events.subscribe((event: NavigationEnd) => {
            this.setDescription(this._ActivatedRoute.snapshot.params);
        });
    }
}

