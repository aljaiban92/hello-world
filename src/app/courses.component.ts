import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: `
    <input [(ngModel)]="title" />
    <p>{{ title | title }}</p>
    `
})

export class CoursesComponent {

    title: string;
}