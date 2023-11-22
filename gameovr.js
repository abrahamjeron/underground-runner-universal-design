var scorecard = document.getElementById("scorecard");
var n = localStorage.getItem("score");
scorecard.innerText=`your score: ${n}`;