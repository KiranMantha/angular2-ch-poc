import { Component, Inject, AfterViewInit, Input } from '@angular/core';
import { utilSrv } from '../../Services/util-service';

@Component({
    selector: '',
    template: require('./layout-results-component.tpl.html')
})
export class LayoutResults implements AfterViewInit {
    @Input() properties: any;
    public layoutResults: any = {};
    constructor(private _utilSrv: utilSrv) {
    }
    private joinUrl(): string {
        var params = [];
        for (var t in arguments) { params.push(arguments[t]); }
        var urlToReturn = '';
        if (params) {
            params.forEach(function (s) {
                if (s) {
                    urlToReturn = urlToReturn + '/' + s;
                }
            });
        }
        return urlToReturn.replace(/\/\//g, '/').replace(/ /g, '-').toLowerCase();
    }

    public filterZipcode = $routeParams.zipcode;
    ngAfterViewInit() {
        this.layoutResults.cityInformation = [{
            Heading: 'Philadelphia Highlights',
            Content: '<p>This is info item content</p>'
        },
        {
            Heading: 'Philadelphia Highlights',
            Content: '<p>This is info item content</p>'
        },
        {
            Heading: 'Philadelphia Highlights',
            Content: '<p>This is info item content</p>'
        }
        ];
        var parsedObj = this._utilSrv.parseUrl('/:countyId/:stateId/:cityId', $location.$$url);
        parsedObj = parsedObj.IsMatch ? parsedObj.Params : {};
        var cityUrlPrefix = this.joinUrl(parsedObj.countyId, parsedObj.stateId || 'state'),
            zipcodeUrlPrefix = this.joinUrl(parsedObj.countyId, parsedObj.stateId || 'state', parsedObj.cityId || 'city'),
            cities = this.properties.reduce(function (a, b) {
                return a.filter(function (itm) {
                    return itm.city === b.city
                }).length > 0 ? a : a.concat({ zip: b.zip, state: b.state, county: b.county, city: b.city });
            }, []).map(function (x) {
                return { displayText: x.city, url: this.joinUrl(x.county, x.state, x.city) };
            }),
            zipcodes = this.properties.reduce(function (a, b) {
                return a.filter(function (itm) { return itm.zip === b.zip }).length > 0 ? a : a.concat({ zip: b.zip, state: b.state, county: b.county, city: b.city });
            }, []).map(function (x) {
                return { displayText: x.zip, url: this.joinUrl(x.county, x.state, x.city, x.zip) };
            });

        this.layoutResults.additionalLocations = [{
            Heading: 'Nearby Cities',
            Lists: cities
        },
        {
            Heading: 'Nearby Zip Codes',
            Lists: zipcodes
        }
        ];

        this.layoutResults.results = [];
        this.layoutResults.exactMatches = this.properties;
        this.layoutResults.nearbyProperties = [];
        if ($routeParams.cityId) {
            this.layoutResults.exactMatches = this.properties.filter(function (x) {
                return $routeParams.cityId.replace(/-/g, ' ').toLowerCase() === x.city.toLowerCase();
            });

            this.layoutResults.nearbyProperties = this.properties.filter(function (x) {
                return $routeParams.cityId.replace(/-/g, ' ').toLowerCase() !== x.city.toLowerCase();
            });
            if ($routeParams.zipcode) {
                this.layoutResults.exactMatches = this.properties.filter(function (x) {
                    return $routeParams.zipcode == x.zip;
                });

                this.layoutResults.nearbyProperties = this.properties.filter(function (x) {
                    return $routeParams.zipcode != x.zip;
                });
            }
        }

    }

    public openModal(modalId: string, modalData: any) {
        this.layoutResults.modalData = modalData;
        $(modalId).find('.has-error').removeClass('has-error');
        $(modalId).find('input[type="text"],input[type="email"]').val('');
        $(modalId).modal('show');
    }

    public closeModal = function (modalId: string) {
        $(modalId.indexOf('#') >= 0 ? modalId : '#' + modalId).modal('hide');
    }
}