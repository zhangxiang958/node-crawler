const fs = require('fs');

const getDate = function (datestr) {
  const temp = datestr.split('-');
  const date = new Date(temp[0],temp[1],temp[2]);
  return date;
};

const startDate = '2013-05-20';
const endDate = '2018-04-12';

const startTime = getDate(startDate);
const endTime = getDate(endDate);

const dateArr = [];

while ( (endTime.getTime() - startTime.getTime() ) >= 0 ) {
  const year = startTime.getFullYear();
  const month = startTime.getMonth().toString().length == 1? '0' + startTime.getMonth().toString() : startTime.getMonth();
  const day = startTime.getDate().toString().length == 1 ? '0' + startTime.getDate() : startTime.getDate();
  dateArr.push(`${year}${month}${day}`);
  startTime.setDate( startTime.getDate() + 1 );
}

fs.writeFile('date.json', `${JSON.stringify(dateArr)}`, (err) => {
  if (err) throw err;
  console.log('date.json has been saved!');
});