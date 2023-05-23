import { Component} from "@angular/core";
import { CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'member-calendar',
  templateUrl: './member-calendar.component.html',
  styleUrls: ['./member-calendar.component.scss']
})

export class MemberCalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,interactionPlugin]
  };
}
