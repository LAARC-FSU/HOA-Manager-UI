export interface Shift {
  id: string
  start: string;
  end: string;
}
export interface PostShift{
  start: string;
  end: string;
  enabled:boolean;
}
export interface Schedule {
  timeFrameStr:string;
  timeFrame: Date[];
  firstShiftTime: Shift;
  secondShiftTime: Shift;
  thirdShiftTime: Shift;
  schedules: {[key:string]: empSchObj};
}

export interface ScheduleAdapter{
    timeFrame: Date[];
    timeFrameStr:string;
    shift:{firstShiftTime:PostShift,secondShiftTime:PostShift,thirdShiftTime:PostShift};
    schedules: empSchObj[];
    posted:boolean;
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

 type empDayHours<T> = [T,T,T,T,T,T,T]
 export interface empWorkTime {
  empName: string;
  empPhotoUrl: string;
  empClkIn: Date;
  empClkOut: Date;
  empLunchOut: Date;
  empLunchIn: Date;
  empDayHours: empDayHours<number>;
  empWeekHours: number;
 }

 export interface JWT {
  token: string;
 }

