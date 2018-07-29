import { Component, ViewChild } from '@angular/core';
import { Form } from '../form';
import { QuestionsComponent } from '../questions/questions.component';
import { NgForm } from '../../../node_modules/@angular/forms/src/directives';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    submitted= false;
    years= ['1994','1995','1996'];
    gender= ['male','female'];
    object= new Form('','','this.years[0]','this.gender[0]');
    formValue=JSON.stringify({})
    onClick() {
        this.submitted= true;
        console.log(this.submitted);
    }
    onSubmit(form:NgForm){
        this.formValue = JSON.stringify(form.value);
    }
    

}