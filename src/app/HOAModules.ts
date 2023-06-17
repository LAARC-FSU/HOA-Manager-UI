
export interface HOAModule {
  title: string;
  buttons: DashboardButton[];
  image: string;
}

export interface DashboardButton {
  text: string;
  image: string;
  page: string;
}

export const DASHBOARDBUTTONS: DashboardButton[] = [
  { text:'Enter Work Hours', image: '/assets/Icons/clockIcon.svg', page:'/main-dashboard' },
  { text:'Add Property', image: '/assets/Icons/addPropIcon.svg', page:'/add-property' },
  { text:'Find Property', image: '/assets/Icons/viewPropIcon.svg', page:'/find-property' },
  { text:'Make Schedule', image: '/assets/Icons/scheduleIcon.svg', page:'/make-schedule' },
  { text:'Employees', image: '/assets/Icons/employeeIcon.svg', page:'/employees' },
  { text:'Check Schedule', image: '/assets/Icons/calendarIcon.svg', page:'/view-schedule' },
  { text:'Add Member', image: '/assets/Icons/addMemberIcon.svg', page:'/add-member' },
  { text:'View/Update Members', image: '/assets/Icons/viewMemberIcon.svg', page:'/view-update-members' },
  { text:'Committee', image: '/assets/Icons/committeeIcon.svg', page:'/committee' }
];

export const HOAMODULES: HOAModule[] = [
  { title:'Employee Module', buttons: [DASHBOARDBUTTONS[0], DASHBOARDBUTTONS[5]], image: '/assets/Icons/badgeIcon.svg' },
  { title:'Property Module', buttons: [DASHBOARDBUTTONS[1], DASHBOARDBUTTONS[2]], image: '/assets/Icons/propIcon.svg' },
  { title:'Admin Module', buttons: [DASHBOARDBUTTONS[3], DASHBOARDBUTTONS[4], DASHBOARDBUTTONS[5]], image: '/assets/Icons/adminIcon.svg' },
  { title:'Member Module', buttons: [DASHBOARDBUTTONS[6], DASHBOARDBUTTONS[7], DASHBOARDBUTTONS[8]], image: '/assets/Icons/memberIcon.svg' }
];
