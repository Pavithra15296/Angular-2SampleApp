import { Component, Input } from '@angular/core';
import { Form } from '../form';

@Component({
    selector: 'app-question',
    templateUrl: './questions.component.html',
    styleUrls: ['questions.component.css']
})
export class QuestionsComponent{
    @Input() object: Form;
    
    
}