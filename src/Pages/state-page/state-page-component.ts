import { Component } from '@angular/core';
import { propertySrv } from '../../Services/property-service'

@Component({
    selector: 'state-page',
    template: require('./state-page-component.tpl.html')
})
export class StatePage {
    constructor(public _propertySrv: propertySrv) { }

    public Page = 'StatePage';

    public featureProperties = this._propertySrv.getProperties().slice(0, 6);
    public properties = this._propertySrv.getProperties();
    public breadCrumbs = this._propertySrv.getBreadcrumbs();
}