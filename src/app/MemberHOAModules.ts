export interface MemberHOAModule {
  title: string;
  buttons: MemDashboardButton[];
  image: string;
}

export interface MemDashboardButton {
  text: string;
  image: string;
  page: string;
}

export const MEMDASHBOARDBUTTONS: MemDashboardButton[] = [
  { text:'Calendar', image: '/assets/Icons/calendarIcon.svg', page:'/member-calendar' },
  { text:'Pay Now', image: '/assets/Icons/addPropIcon.svg', page:'' },
  { text:'Payment History', image: '/assets/Icons/viewPropIcon.svg', page:'/billing-payment-history' },
  { text:'View Property', image: '/assets/Icons/scheduleIcon.svg', page:'/make-schedule' },
  { text:'My Committee', image: '/assets/Icons/employeeIcon.svg', page:'/employees' },
  { text:'My Info', image: '/assets/Icons/calendarIcon.svg', page:'/view-schedule' }
];

export const MEMBERHOAMODULES: MemberHOAModule[] = [
  { title:'Calendar', buttons: [MEMDASHBOARDBUTTONS[0]], image: '/assets/Icons/calendarIcon.svg' },
  { title:'Current Balance', buttons: [MEMDASHBOARDBUTTONS[1], MEMDASHBOARDBUTTONS[2]], image: '/assets/Icons/propIcon.svg' },
  { title:'My Properties', buttons: [MEMDASHBOARDBUTTONS[3]], image: '/assets/Icons/adminIcon.svg' },
  { title:'My Committees', buttons: [MEMDASHBOARDBUTTONS[4]], image: '/assets/Icons/memberIcon.svg' },
  { title:'My Member Info', buttons: [MEMDASHBOARDBUTTONS[5]], image: '/assets/Icons/memberIcon.svg' }
];
