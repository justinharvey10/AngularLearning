import {Component, Input, Output} from '@angular/core'
import { EventEmitter } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template: `
<div>
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \£{{event.price}}</div>
        <div *ngIf="event?.location">
            <span>Location:{{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
        </div>
    </div>

</div>`,
styles:[`
    .bold{font-weight:bold;}
    .green{color:#003300 !important;}
    .pad-left{margin-left:10px;}
    .thumbnail{min-height:210px}
`]
})
export class EventThumbnailComponent{
    @Input() event:any
    @Output() eventClick = new EventEmitter()

    someProperty:any = "some value"
    handleClickMe(){
        this.eventClick.emit(this.event.name)
        console.log('Clicked!')
    }
    log(data){
        console.log(data)
    
    }

    getStartTimeClass(){
        const isEarlyStart=this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart}
    }
}