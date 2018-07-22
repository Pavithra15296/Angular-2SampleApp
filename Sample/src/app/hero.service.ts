import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';
import { Observable, of } from '../../node_modules/rxjs';
@Injectable({
    providedIn:'root'
})
export class HeroService{
    constructor(private messageService:MessageService){

    }
    getHeroes():Observable<Hero[]>{
        this.messageService.add('Hero Service:Fetched Heroes');
        return of (HEROES);
    }
}
