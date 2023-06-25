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
  { text:'Calendar', image: '/assets/Icons/calendarIcon.svg', page:'/member-Calendar' },
  { text:'Add Property', image: '/assets/Icons/addPropIcon.svg', page:'/add-property' },
  { text:'Find Property', image: '/assets/Icons/viewPropIcon.svg', page:'/find-property' },
  { text:'Make Schedule', image: '/assets/Icons/scheduleIcon.svg', page:'/make-schedule' },
  { text:'Employees', image: '/assets/Icons/employeeIcon.svg', page:'/employees' },
  { text:'Check Schedule', image: '/assets/Icons/calendarIcon.svg', page:'/view-schedule' },
  { text:'Add Member', image: '/assets/Icons/addMemberIcon.svg', page:'/add-member' },
  { text:'View/Update Members', image: '/assets/Icons/viewMemberIcon.svg', page:'/view-update-members' },
  { text:'Committee', image: '/assets/Icons/committeeIcon.svg', page:'/committee' }
];

export const MEMBERHOAMODULES: MemberHOAModule[] = [
  { title:'Calendar', buttons: [MEMDASHBOARDBUTTONS[0]], image: '/assets/Icons/badgeIcon.svg' },
  { title:'Property Module', buttons: [MEMDASHBOARDBUTTONS[1], MEMDASHBOARDBUTTONS[2]], image: '/assets/Icons/propIcon.svg' },
  { title:'Admin Module', buttons: [MEMDASHBOARDBUTTONS[3], MEMDASHBOARDBUTTONS[4], MEMDASHBOARDBUTTONS[5]], image: '/assets/Icons/adminIcon.svg' },
  { title:'Member Module', buttons: [MEMDASHBOARDBUTTONS[6], MEMDASHBOARDBUTTONS[7], MEMDASHBOARDBUTTONS[8]], image: '/assets/Icons/memberIcon.svg' }
];
