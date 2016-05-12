import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form;

    ngOnInit() {
        this.form = new ControlGroup({
            'medium': new Control('Movies'),
            'name': new Control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+'),

            ])),
            'category': new Control('Horror'),
            'year': new Control('',this.yearValidator)
        });


    }
    yearValidator(control) {
        if (control.value.trim().length === 0) return null;
        var year = parseInt(control.value);
        var maxYear = 2100;
        var minYear = 1900;
        if (year >= minYear && year <= maxYear) return null;
        return {'year':{ 'max':maxYear , 'min': minYear}};
    }
    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}