export interface Shift {
  id: string
  start: string;
  end: string;
}
export interface Schedule {
  timeFrameStr:string;
  timeFrame: Date[];
  firstShiftTime: Shift;
  secondShiftTime: Shift;
  thirdShiftTime: Shift;
  schedules: {[key:string]: empSchObj};
}
 export interface empSchObj {
   empName: string;
   empSun: string;
   empMon: string;
   empTue: string;
   empWed: string;
   empThu: string;
   empFri: string;
   empSat: string;
   empVacation: boolean;
 }

 export interface empWorkTime {
  empName: string;
  empPhotoUrl: string;
  empClkIn: Date;
  empClkOut: Date;
  empLunchOut: Date;
  empLunchIn: Date;
  empDayHours: number;
  empWeekHours: number;
 }
