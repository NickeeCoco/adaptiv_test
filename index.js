function setDefaultDateTimes() {
  const currentDateAndTime = new Date().toISOString().slice(0,16);
  document.getElementById('date1').value = currentDateAndTime;
  document.getElementById('date2').value = currentDateAndTime;

  calculateTimeDifference();
}

function calculateTimeDifference() {
  const date1 = new Date(document.getElementById('date1').value);
  const date2 = new Date(document.getElementById('date2').value);

  let timeDifference = Math.abs(date2 - date1) / 1000;
  let unit = 'seconds';
  
  if(timeDifference >= 60) { // if more than 59 seconds
    timeDifference /= 60; // convert time difference to minutes
    unit = 'minutes'; // change unit

    if(timeDifference >= 60) { // if more than 59 minutes
      timeDifference /= 60; // convert time difference to hours
      unit = 'hours'; // change unit

      if(timeDifference >= 24) {
        timeDifference /= 24;
        unit = 'days';

        if(timeDifference >= 30) {
          timeDifference /= 30;
          unit = 'months';

          if(timeDifference >= 12) {
            timeDifference /= 12;
            unit = 'years';
          }
        }
      }
    }
  }

  document.getElementById('time-difference').innerText = `${Math.floor(timeDifference)} ${unit}`;
}

window.onload = function() {
  setDefaultDateTimes();
  document.getElementById('date1').addEventListener('input', calculateTimeDifference);
  document.getElementById('date2').addEventListener('input', calculateTimeDifference);
}