import {Component} from "@angular/core";
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

@Component({
  selector: 'member-day-grid',
  templateUrl: './member-day-grid.component.html',
  styleUrls: ['./member-day-grid.component.scss']
})

export class MemberDayGridComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    showNonCurrentDates: false,
    fixedWeekCount: false,
    contentHeight: 'auto',
    plugins: [dayGridPlugin,interactionPlugin]
  };

}
