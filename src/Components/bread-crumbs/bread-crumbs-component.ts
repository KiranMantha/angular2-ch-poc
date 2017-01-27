import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'bread-crumbs',
    template: require('./bread-crumbs.tpl.html')
})
export class BreadCrumbs implements AfterViewInit {
    public breadCrumbs: any;
    @Input() links: any;
    ngAfterViewInit() {
        this.breadCrumbs = [{
            url: '/',
            displayText: 'Corporate Housing'
        },
        {
            url: '/state2',
            displayText: 'dssddd'
        },
        {
            url: '/state2',
            displayText: 'pppppp'
        }
        ]
    }

}