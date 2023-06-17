import {Component} from "@angular/core";
import {CalendarOptions} from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

@Component({
  selector: 'member-time-grid',
  templateUrl: './member-time-grid.component.html',
  styleUrls: ['./member-time-grid.component.scss']
})

export class MemberTimeGridComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin,interactionPlugin],
    selectable: true,
    events: [
      {
        title: 'test',
        start: '2023-05-23T15:00:00',
        end: '2023-05-23T17:00:00'
      }
    ],
    eventClick: function(info){
      alert('Event: ' + info.event.title);
    }
  };

}
