 export const fetchMeetups = () => fetch('http://192.168.137.1:3000/api/meetups').then(res => { res.json() }).then(resJson => { data: resJson }); 
