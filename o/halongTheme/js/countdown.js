function CountDownTimer(dt, id)
{
	var end = new Date(dt);

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		if (distance < 0) {

			clearInterval(timer);
			document.getElementById(id).innerHTML = 'EXPIRED!';

			return;
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);
		
		document.getElementById(id).innerHTML = "<div style='width:100%;font-weight:bold;font-size:25px;overflow:hidden;'><div style='float:left;'>" + days + "</div><div style='margin-left:50px;float:left;'>" + hours + "</div><div style='margin-left:50px;float:left;'>" + minutes + "</div><div style='margin-left:50px;float:left;'>" + seconds + "</div>";

		document.getElementById(id).innerHTML += "<div style='width:100%;font-size:8px;font-weight:bold;'><div style='margin-left:5px;float:left;'>DAYS</div><div style='margin-left:60px;float:left;'>HRS</div><div style='margin-left:50px;float:left;'>MINS</div><div style='margin-left:60px;float:left;'>SECS</div>";
	}

	timer = setInterval(showRemaining, 1000);
}
