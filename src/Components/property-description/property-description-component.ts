import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
    selector: 'property-description',
    template: require('./property-description-component.tpl.html')
})
export class PropertyDescription implements AfterViewInit {
    public propertySearchTitle: string;
    public propertyDescriptionHtml: string;
    @Input() properties: any;
    ngAfterViewInit() {
        this.propertySearchTitle = 'Philadelphia, ' + ($routeParams.countyId ? $routeParams.countyId.toUpperCase() : 'County') + ', Short-Term Rentals | 6 in city, ' + this.properties.length + ' nearby';
        this.propertyDescriptionHtml = '<p class=""> </p><p>View <strong>short-term rentals&nbsp;</strong>for<strong> Philadelphia</strong> – 6 in the city and 21 in the <strong>Philadelphia metro</strong> area. A short-term lease apartment is perfect if you have just moved, have been displaced by a fire or other disaster, are on a business trip, are relocating, or are just taking a long vacation and need a fully furnished apartment for an extended stay. CorporateHousing.com is your source for corporate lodging, short-term apartments and vacation properties in Philadelphia, the Philadelphia area, and across Pennsylvania.</p>    <p></p>';
        if ($routeParams.countyId) {
            this.propertySearchTitle = 'City lists';
        }
        if ($routeParams.stateId) {
            this.propertySearchTitle = 'Corporate Housing in ' + $routeParams.stateId.replace('-', ' ') + ', ' + $routeParams.countyId.toUpperCase() + ', metro | ' + this.properties.length + ' total';
            this.propertyDescriptionHtml = '<p>View <strong>corporate housing</strong>&nbsp;and <strong>temporary housing</strong> options in the <strong>' + $routeParams.stateId.replace('-', ' ') + ' area</strong> – ' + this.properties.length + ' total among cities in the metro. Corporate housing is perfect if you have just moved, are on an extended business trip, are relocating, or just need a short-term home away from home. With CorporateHousing.com, youll find a variety of potential temporary housing in the Philadelphia metro, including extended-stay hotels, furnished apartments, corporate apartments, privately owned homes, and vacation properties.&nbsp;</p>';
        }

        if ($routeParams.cityId) {
            var exactResult = this.properties.filter(function (x) {
                return $routeParams.cityId.replace(/-/g, ' ').toLowerCase() === x.city.toLowerCase()
            }).length;
            this.propertySearchTitle = $routeParams.stateId.replace('-', ' ') + ', ' + $routeParams.countyId.toUpperCase() + ', Short-Term Rentals | ' + exactResult + ' in city, ' + (this.properties.length - exactResult) + ' nearby';
            this.propertyDescriptionHtml = '<p class=""> </p><p>View <strong>short-term rentals&nbsp;</strong>for<strong> ' + $routeParams.cityId.replace('-', ' ') + '</strong> – ' + this.properties.length + ' in the city and ' + this.properties.length + 'in the <strong>' + $routeParams.stateId.replace('-', ' ') + ' metro</strong> area. A short-term lease apartment is perfect if you have just moved, have been displaced by a fire or other disaster, are on a business trip, are relocating, or are just taking a long vacation and need a fully furnished apartment for an extended stay. CorporateHousing.com is your source for corporate lodging, short-term apartments and vacation properties in Philadelphia, the Philadelphia area, and across Pennsylvania.</p>    <p></p>';
        }

        if ($routeParams.zipcode) {
            var exactResult = this.properties.filter(function (x) { return $routeParams.zipcode == x.zip; }).length;
            this.propertySearchTitle = 'Temporary Housing in ' + $routeParams.zipcode + ' ZIP Code | ' + exactResult + ' exact, ' + (this.properties.length - exactResult) + ' nearby';
            this.propertyDescriptionHtml = '<p>View <strong>temporary housing</strong> options in and around the <strong>' + $routeParams.zipcode + ' ZIP code</strong> of <strong>' + $routeParams.stateId.replace('-', ' ') + ', ' + $routeParams.countyId.toUpperCase() + '</strong> – ' + this.properties.filter(function (x) { return $routeParams.zipcode == x.zip; }).length + ' in Downingtown and ' + this.properties.length + ' nearby in the Philadelphia metro area. Temporary housing or executive rentals are perfect if you have just moved, are on a long business trip, or are temporarily relocating and need an extended-stay solution. If you didnt find a temporary housing option in 19335, consider expanding your search to Downingtown or&nbsp;the Philadelphia metro area.</p>';
        }
    }
}

