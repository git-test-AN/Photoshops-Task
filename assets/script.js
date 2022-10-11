now = new Date();
mondayNext = new Date();
if (now.getDay()) {
    mondayNext.setDate(now.getDate() + 8 - now.getDay())
} else {
    mondayNext.setDate(now.getDate() + 1)
};
const dateSrc = mondayNext.toLocaleString('ru-RU', {day: 'numeric', month: 'numeric', year: '2-digit'});
document.getElementById("date").innerHTML = dateSrc;

// date = new Date();
// const dateSrc = date.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
// dateDst = dateSrc.split(".").reverse().join("-");
// m = new Date();
// const mSrc = date.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
// mDst = mSrc.split(".").reverse().join("-");
// if (date.getDay () ) {
//     sale = mDst.setDate(dateDst.getDate() + 8 - dateDst.getDay())
// } else {
//     sale = mDst.setDate(dateDst.getDate() + 1)
// }
// ;
// document.getElementById("date").innerHTML = sale;



// var date = new Date(),
//     targetDay = 1, // понедельник, начиная с вс=0
//     targetDate = new Date(),
//     delta = targetDay - date.getDay();
// if (delta >= 0) {targetDate.setDate(date.getDate() + delta)}
// else {targetDate.setDate(date.getDate() + 7 + delta)}
// alert(targetDate);

// var targetNumber = targetDate.getDate();
// var targetMonth = targetDate.getMonth();
// switch(targetMonth) {
//     case 0: targetMonth = 'января'; break;
//     case 1: targetMonth = 'февраля'; break;
//     case 2: targetMonth = 'марта'; break;
//     case 3: targetMonth = 'апреля'; break;
//     case 4: targetMonth = 'мая'; break;
//     case 5: targetMonth = 'июня'; break;
//     case 6: targetMonth = 'июля'; break;
//     case 7: targetMonth = 'августа'; break;
//     case 8: targetMonth = 'сентября'; break;
//     case 9: targetMonth = 'октября'; break;
//     case 10: targetMonth = 'ноября'; break;
//     case 11: targetMonth = 'декабря'; break;
// }
// var targetYear = targetDate.getFullYear();
// alert(targetNumber + ' ' + targetMonth + ' ' + targetYear + ' года');