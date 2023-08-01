const date = new Date();
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let currentM = date.getMonth();

function showM(num) {
	month += num;
	if (month > 11) {
		year++;
		month = 0;
	} else if (month < 0) {
		month = 11;
		year--;
	}

	switch (month) {
		case 0:
			document.querySelector("#date").innerHTML = year + " Jan";
			break;
		case 1:
			document.querySelector("#date").innerHTML = year + " Feb";
			break;
		case 2:
			document.querySelector("#date").innerHTML = year + " Mar";
			break;
		case 3:
			document.querySelector("#date").innerHTML = year + " Apr";
			break;
		case 4:
			document.querySelector("#date").innerHTML = year + " May";
			break;
		case 5:
			document.querySelector("#date").innerHTML = year + " June";
			break;
		case 6:
			document.querySelector("#date").innerHTML = year + " July";
			break;
		case 7:
			document.querySelector("#date").innerHTML = year + " Aug";
			break;
		case 8:
			document.querySelector("#date").innerHTML = year + " Sep";
			break;
		case 9:
			document.querySelector("#date").innerHTML = year + " Oct";
			break;
		case 10:
			document.querySelector("#date").innerHTML = year + " Nov";
			break;
		case 11:
			document.querySelector("#date").innerHTML = year + " Dec";
			break;
	}
	showD();
}

switch (month) {
	case 0:
		document.querySelector("#date").innerHTML = year + " Jan";
		break;
	case 1:
		document.querySelector("#date").innerHTML = year + " Feb";
		break;
	case 2:
		document.querySelector("#date").innerHTML = year + " Mar";
		break;
	case 3:
		document.querySelector("#date").innerHTML = year + " Apr";
		break;
	case 4:
		document.querySelector("#date").innerHTML = year + " May";
		break;
	case 5:
		document.querySelector("#date").innerHTML = year + " June";
		break;
	case 6:
		document.querySelector("#date").innerHTML = year + " July";
		break;
	case 7:
		document.querySelector("#date").innerHTML = year + " Aug";
		break;
	case 8:
		document.querySelector("#date").innerHTML = year + " Sep";
		break;
	case 9:
		document.querySelector("#date").innerHTML = year + " Oct";
		break;
	case 10:
		document.querySelector("#date").innerHTML = year + " Nov";
		break;
	case 11:
		document.querySelector("#date").innerHTML = year + " Dec";
		break;
}

Date.prototype.getDaysInMonth = function () {
	return 32 - new Date(this.getFullYear(), month, 32).getDate();
};

function showD() {
	if (document.querySelector(".container") === null) {
		let cont = document.createElement("div");
		cont.classList.add("container");
		document.body.append(cont);
		for (let i = 1; i <= date.getDaysInMonth(); i++) {
			let div = document.createElement("div");
			div.classList.add("dayn");
			if (i === day && month == currentM) {
				div.classList.add("today");
			}
			div.innerHTML = i;
			cont.append(div);
		}
	} else {
		document.querySelector(".container").remove();
		let cont = document.createElement("div");
		cont.classList.add("container");
		document.body.append(cont);
		for (let i = 1; i <= date.getDaysInMonth(); i++) {
			let div = document.createElement("div");
			div.classList.add("dayn");
			if (i === day && month == currentM) {
				div.classList.add("today");
			}
			div.innerHTML = i;
			cont.append(div);
		}
	}
}

showD();
console.log(month);
