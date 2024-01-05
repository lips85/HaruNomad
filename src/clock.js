const clockTitle = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const Month = String(date.getMonth() + 1);

  const Days = String(date.getDate());

  const Hours = String(date.getHours()).padStart(2, "0");
  const Min = String(date.getMinutes()).padStart(2, "0");
  const Sec = String(date.getSeconds()).padStart(2, "0");
  clockTitle.innerText = `${Month}월 ${Days}일 \n ${Hours}h ${Min}m ${Sec}s`;
}

// setInterval(sayHello, 5000);

getClock();
setInterval(getClock, 1000);
