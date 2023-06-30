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

export interface userInfo {
  firstName: string,
  middleName: string,
  lastName: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  cellPhone: string,
  homePhone: string,
  email: string,
  active: boolean,
  id: string,
  properties: property [],
  notes: note []
}

export interface property {
  address: string,
  block: string,
  lot: string,
  area: string,
  unit: string
}

export interface note {
  title: string;
  body: string;
}
