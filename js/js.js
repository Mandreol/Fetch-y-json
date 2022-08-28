let daily = document.querySelector("#daily");
let weekly = document.querySelector("#weekly");
let monthly = document.querySelector("#monthly");
let dataBox = document.querySelectorAll(".box_secundary-dates");

daily.addEventListener("click", printDaily);
weekly.addEventListener("click", printWeekly);
monthly.addEventListener("click", printMonthly);

function printDaily() {
	fetch("data.json")
		.then((res) => res.json())
		.then((data) => {
			for (var i = 0; i < dataBox.length; i++)
				dataBox[i].children[2].textContent = data[i].timeframes.daily.current;
			for (var i = 0; i < dataBox.length; i++)
				dataBox[
					i
				].children[3].textContent = `Last Day - ${data[i].timeframes.daily.current} Hs `;
		});
}
function printWeekly() {
	fetch("data.json")
		.then((res) => res.json())
		.then((data) => {
			for (var i = 0; i < dataBox.length; i++)
				dataBox[i].children[2].textContent = data[i].timeframes.weekly.current;
			for (var i = 0; i < dataBox.length; i++)
				dataBox[
					i
				].children[3].textContent = `Last Week - ${data[i].timeframes.weekly.current} Hs `;
		});
}
function printMonthly() {
	fetch("data.json")
		.then((res) => res.json())
		.then((data) => {
			for (var i = 0; i < dataBox.length; i++)
				dataBox[i].children[2].textContent = data[i].timeframes.monthly.current;
			for (var i = 0; i < dataBox.length; i++)
				dataBox[
					i
				].children[3].textContent = `Last Month - ${data[i].timeframes.monthly.current} Hs `;
		});
}
