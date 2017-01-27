import { Component, AfterViewInit, Input, ElementRef, Inject } from '@angular/core';
import { utilSrv } from '../../Services/util-service';

@Component({
    selector: 'feature-properties',
    template: require('./feature-properties-component.tpl.html')
})
export class FeatureProperties implements AfterViewInit {
    @Input() properties: Array<{ [key: string]: any }>;
    constructor(private _elementRef: ElementRef, @Inject(utilSrv) private _utilSrv: utilSrv) {

    }
    public testContent: string = 'tet';
    public sliderState = {
        leftIndex: 0,
        displayCount: 3,
        sliderWidth: 300,
        totalCount: 3,
        holderClass: '._holder'
    };
    public modalData = {
        phone: '344444'
    };

    ngAfterViewInit() {
        this.sliderState.totalCount = this.properties.length;
    }

    public openModal(modalId: string, modalData: any): void {
        this._utilSrv.openModal('components/lead-form/lead-form.modal.tpl.html', modalData);
    };

    private getSliderWidth($elem: any): number {
        var viewPortWdth = $elem.width();
        var displayCount = parseInt($elem.attr('data-display-count'));
        displayCount = isNaN(displayCount) ? 3 : displayCount;
        var slideWdth = viewPortWdth / displayCount;
        return slideWdth;
    };

    private setSlider = function (onResize: boolean) {
        this._elementRef.find('.module-slider').each(function (i, n) {
            var $elem = $(n);
            var viewPortWdth = $elem.width();
            var displayCount = parseInt($elem.attr('data-display-count'));
            displayCount = isNaN(displayCount) ? 3 : displayCount;
            var slideWdth = viewPortWdth / displayCount;
            var sliderCount = $elem.find('._slider').length;
            var wdt = slideWdth * (sliderCount + 1);
            this.sliderState.sliderWidth = slideWdth;
            $elem.find('._holder').width(wdt + 'px');
            $elem.find('._holder ._slider').width(slideWdth + 'px');
            if (onResize) {
                this.moveSlider(null, 1, $elem);
            }
        });
    };

    public moveSlider(dir: any, isReset: boolean, $elem: any, $event: any): void {
        $elem = $elem || $($event.currentTarget).closest('.module-slider');
        var holderToMove,
            $holder = $elem.find(this.sliderState.holderClass);
        $holder.addClass('is-animate');
        if (dir && !isReset) {
            this.sliderState.leftIndex = this.sliderState.leftIndex + 1;
        } else if (!dir && !isReset) {
            this.sliderState.leftIndex = this.sliderState.leftIndex - 1;
        } else {
            $holder.removeClass('is-animate');
        }
        holderToMove = (this.sliderState.leftIndex * this.getSliderWidth($elem));

        $holder.css({
            transform: 'translate3d(-' + holderToMove + 'px, 0px, 0px)'
        });
    };

    public $postLink = function () {
        setTimeout(function () {
            this.setSlider();
            window.addEventListener('resize', function () {
                this.setSlider(1);
            });
        });
    };
}