const SidebarData=[
        {submenu:false,position:"top",id:1,route:'/calllogger',label:"Logger",activealt:"call logger active icon",activesrc:"https://pravid.io/static/media/ActiveCallLoggerIcon.57a7a798.svg",
        inactivealt:"call logger icon",inactivesrc:"https://pravid.io/static/media/CallLoggerIcon.79712821.svg"},
        {submenu:false,position:"top",id:2,route:'/dashboard',label:"Analytics",activealt:"analytics active icon",activesrc:"https://pravid.io/static/media/ActiveDashboardIcon.cc6d36c2.svg",
        inactivealt:"analytics icon",inactivesrc:"https://pravid.io/static/media/DashboardIcon.ca62e3a8.svg"},
        {submenu:false,position:"top",id:3,route:'/connectorPage',label:"Integration",activealt:"integration active icon",activesrc:"https://pravid.io/static/media/activeSalesforceIcon.e63d0695.svg",
        inactivealt:"integration icon",inactivesrc:"https://pravid.io/static/media/salesforceIcon.6bff222a.svg"},
        {submenu:true,submenuData:[
  {name:"Campaign Manager",route:"/campaign/campaignmanager",id:4,},
  {name:"Bot Manager",route:"/campaign/botmanager",id:4,},
],position:"top",id:4,route:'/campaign',label:"Campaign",activealt:"campaign active icon",activesrc:"https://pravid.io/static/media/campaign.48e579a3.svg",
        inactivealt:"campaign icon",inactivesrc:"https://pravid.io/static/media/campaignActive.602270a6.svg"},
        {submenu:false,position:"top",id:5,route:'/strategy',label:"Strategy",activealt:"strategy active icon",activesrc:"https://pravid.io/static/media/activest.bd1819a0.svg",
        inactivealt:"strategy icon",inactivesrc:"https://pravid.io/static/media/stratergyIcon.1347a8b1.svg"},
        {submenu:true,submenuData:[
  {name:"User List",route:"/admin/userlist",id:6,},
  {name:"Billing",route:"/admin/billing",id:6,},
  {name:"Operation",route:"/admin/operation",id:6,},
],position:"bottom",id:6,route:'/admin',label:"Admin",activealt:"admin active icon",activesrc:"https://pravid.io/static/media/ActiveBluePeopleIcon.214f67d5.svg",
        inactivealt:"admin icon",inactivesrc:"https://pravid.io/static/media/ActivePeopleIcon.3336a2c7.svg"},
      ]
export default SidebarData;
