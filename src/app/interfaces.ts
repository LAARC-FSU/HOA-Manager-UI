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
  schedules: {[key:string]: {}[]};
}
