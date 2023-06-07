export function getWeeksOfYear(year: number) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Determine if the year starts on or before Thursday (January 1st to 4th)
  const startDate = new Date(year, 0, 1);
  const startDay = startDate.getDay();
  const has53Weeks = isLeapYear && (startDay === 0 || startDay === 1 || startDay === 2 || startDay === 3);

  const weeks = has53Weeks ? 53 : 52;
  const weekArray = [];

  for (let week = 1; week <= weeks; week++) {
    const weekStart = new Date(year, 0, 1 + (week - 1) * 7 - startDay);
    const weekEnd = new Date(year, 0, 1 + (week - 1) * 7 - startDay + 6);
    const weekDates = [];

    for (let date = weekStart; date <= weekEnd; date.setDate(date.getDate() + 1)) {
      weekDates.push(new Date(date));
    }

    weekArray.push(weekDates);
  }

  return weekArray;
}

export function makeEmpWorkTimeArr(){
  type empDayHours<T> = [T, T, T, T, T, T, T];

  interface empWorkTime {
    empName: string;
    empPhotoUrl: string;
    empClkIn: Date;
    empClkOut: Date;
    empLunchOut: Date;
    empLunchIn: Date;
    empDayHours: empDayHours<number>;
    empWeekHours: number;
  }

  function generateRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const employees: empWorkTime[] = [];

  for (let i = 0; i < 8; i++) {
    const empDayHours: empDayHours<number> = [
      generateRandomValue(1, 10),
      generateRandomValue(1, 10),
      generateRandomValue(1, 10),
      generateRandomValue(1, 10),
      generateRandomValue(1, 10),
      generateRandomValue(1, 10),
      generateRandomValue(1, 10)
    ];

    const empWeekHours = empDayHours.reduce((total, hours) => total + hours, 0);

    const employee: empWorkTime = {
      empName: `Employee ${i + 1}`,
      empPhotoUrl: `https://example.com/photo${i + 1}.jpg`,
      empClkIn: new Date(),
      empClkOut: new Date(),
      empLunchOut: new Date(),
      empLunchIn: new Date(),
      empDayHours,
      empWeekHours
    };

    employees.push(employee);
  }
  return employees;
}
