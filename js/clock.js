const clockTitle = document.querySelector("#clock h3");

function getClock() {
  const date = new Date();
  const Month = String(date.getMonth() + 1);

  const year = String(date.getFullYear());
  const Days = String(date.getDate());
  const Hours = String(date.getHours()).padStart(2, "0");
  const Min = String(date.getMinutes()).padStart(2, "0");
  const Sec = String(date.getSeconds()).padStart(2, "0");
  clockTitle.innerText = `${year}년 ${Month}월 ${Days}일\n${Hours}h ${Min}m ${Sec}s`;
  clockTitle.style= "text-align:center";
}

// setInterval(sayHello, 5000);

getClock();
setInterval(getClock, 1000);
