

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
  phone: string,
  email: string,
  active: boolean,
  id: string,
  properties: property [],
  notes: note []
  photo: string
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
  date: string;
  body: string;
}

export const states: string[] = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
];
export interface searchQuery{
  firstName: string,
  lastName: string,
  id: number,
  phone: string,
  address: string
}
