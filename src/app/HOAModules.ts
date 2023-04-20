
export interface HOAModule {
  title: string;
  buttons: DashboardButton[];
  image: string;
}

export interface DashboardButton {
  text: string;
  image: string;
}

const DASHBOARDBUTTONS: DashboardButton[] = [
  { text:'Enter Work Hours', image: 'clockIcon.svg' },
  { text:'Add Property', image: 'addPropIcon.svg' },
  { text:'View/Update Property', image: 'viewPropIcon.svg' },
  { text:'Make Schedule', image: 'scheduleIcon.svg' },
  { text:'Employees', image: 'employeeIcon.svg' },
  { text:'Check Schedule', image: 'scheduleIcon.svg' },
  { text:'Add Member', image: 'addMemberIcon.svg' },
  { text:'View/Update Members', image: 'viewMemberIcon.svg' },
  { text:'Committee', image: 'committeeIcon.svg' }
];

export const HOAMODULES: HOAModule[] = [
  { title:'Employee Module', buttons: [DASHBOARDBUTTONS[0], DASHBOARDBUTTONS[5]], image: 'badgeIcon.svg' },
  { title:'Property Module', buttons: [DASHBOARDBUTTONS[1], DASHBOARDBUTTONS[2]], image: 'propIcon.svg' },
  { title:'Admin Module', buttons: [DASHBOARDBUTTONS[3], DASHBOARDBUTTONS[4], DASHBOARDBUTTONS[5]], image: 'adminIcon.svg' },
  { title:'Member Module', buttons: [DASHBOARDBUTTONS[6], DASHBOARDBUTTONS[7], DASHBOARDBUTTONS[8]], image: 'memberIcon.svg' }
];
