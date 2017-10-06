import { Component, Input } from '@angular/core';

@Component({
    selector: 'filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    @Input() filterText: string;
}