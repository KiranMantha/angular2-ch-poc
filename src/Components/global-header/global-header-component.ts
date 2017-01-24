import { Component } from '@angular/core';

@Component({
    selector: 'global-header',
    template: require('./global-header-component.tpl.html')
})
export class GlobalHeader {
    public openSideNavigation = function () {
        $('html').toggleClass('expand-leftmenu');
    };
}
