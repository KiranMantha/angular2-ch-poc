import { Component, OnInit, Inject } from '@angular/core';
import { propertySrv } from '../../Services/property-service'

@Component({
    selector: 'state-page',
    template: require('./state-page-component.tpl.html')
})
export class StatePage implements OnInit {
    constructor( @Inject(propertySrv) private _propertySrv: propertySrv) { }

    public Page:string = 'StatePage';
    public featureProperties: Array<{ [key: string]: string }>;
    public properties: any;
    public breadCrumbs: Array<{ [key: string]: string }>;

    ngOnInit() {
        this.properties = this._propertySrv.getProperties();
        this.featureProperties = this.properties.slice(0, 6);
        this._propertySrv.getBreadcrumbs().then(result => {
            this.breadCrumbs = result;
        });
    }
}