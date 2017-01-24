import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'lead-form',
    template: require('./lead-form-component.tpl.html')
})
export class LeadForm {
    constructor(private _elementRef:ElementRef ){}

    public $postLink() {
        this._elementRef.find('.has-error').removeClass('has-error');
        $('[name="arrivaldate"]').datetimepicker({ format: 'MM/DD/YYYY' });
        $('[name="departuredate"]').datetimepicker({
            useCurrent: false,
            format: 'MM/DD/YYYY'
        });

        $('[name="arrivaldate"]').on("dp.change", function (e) {
            $(this._elementRef).find('[name="arrivaldate"]').closest('.form-group').removeClass('has-error');
            $(this._elementRef).find('[name="departuredate"]').data("DateTimePicker").minDate(e.date);
        });
        $('[name="departuredate"]').on("dp.change", function (e) {
            $(this._elementRef).find('[name="departuredate"]').closest('.form-group').removeClass('has-error');
            $(this._elementRef).find('[name="arrivaldate"]').data("DateTimePicker").maxDate(e.date);
        });
    };

    public sendMessage(formToValidate, closeFn) {
        var errors = 0;
        formToValidate.$$controls.forEach(function (inputField) {
            if (inputField.$error.required && inputField.$element.val().length === 0) {
                inputField.$element.closest('.form-group').addClass('has-error');
                errors += 1;
            }
        });


        if (!errors && closeModal && modalId) {
            closeFn();
        }
    };

    public focus(elemName: string) {
        $(this._elementRef).find('[name="' + elemName + '"]').trigger('focus');
    };
    public onlyNumbers() {
        var phnToCheck = this._elementRef.find('[name="phone"]').val();
        $(this._elementRef).find('[name="phone"]').val(phnToCheck.replace(/\D/g, ''));
    };
}
