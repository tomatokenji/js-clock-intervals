$(document).ready(function(){
  var now = new Date();
  var seconds = now.getSeconds()*6;
  var minutes = now.getMinutes()*6+now.getSeconds()*0.1;
  var hour = (now.getHours()-12)*30+(minutes/12);

  console.log(now);
  console.log(seconds);
  console.log(minutes);
  console.log(hour);

  var secondString = 'rotate(' + seconds + 'deg)';
  var minuteString ='rotate(' + minutes + 'deg)';
  var hourString = 'rotate(' + hour + 'deg)';

  $('#second').css('transform',secondString);
  $('#minute').css('transform',minuteString);
  $('#hour').css('transform',hourString);

	setInterval(function(){
    console.log("fire");
    seconds += 6;
    var string = 'rotate(' + seconds + 'deg)';
    $('#second').css('transform',string)
  }, 1000);


  setInterval(function(){
    console.log("fire for minute");
    minutes += 0.1;
    var string = 'rotate(' + minutes + 'deg)';
    $('#minute').css('transform', string)
  },1000)

  setInterval(function(){
    console.log("fire for hour");
    hour += (0.1/12);
    var string = 'rotate(' + hour + 'deg)';
    $('#hour').css('transform', string)
  },1000)


})
