var choosedJoogid = "none";

function Hind() {
	var hindDiv = document.getElementById("hind");
	var kogus = document.getElementById("kogus").value;
	
	var joogidHind = 0;
	
	if(choosedJoogid == "Cola")
		joogidHind = 1.2;
	if(choosedJoogid == "Fanta")
		joogidHind = 1.2;
	if(choosedJoogid == "Sprite")
		joogidHind = 1.2;
	if(choosedJoogid == "Water")
		joogidHind = 1;
	
	hindDiv.innerHTML = "Sa valisid " + kogus + " taia ja " + choosedJoogid + 
	
	"<br><br>Palun maksa " + ((kogus * 1.2) + joogidHind).toFixed(2) + " euro";
}

function ChangeJoogid() {
	choosedJoogid = document.getElementById("joogid").value;
}

function Calculate() {
	var euroCount = document.getElementById("euroCount").value;
	var selectedValute = document.getElementById("valute").value;
	var answerText = document.getElementById("answer");
	
	var euroScale = 1;
	var valuteText = ""
	
	if(selectedValute == "USD"){ euroScale = 1.15; valuteText = " долларов"; }
	if(selectedValute == "JPY"){ euroScale = 130.23; valuteText = " японских йен"; }
	if(selectedValute == "CZK"){ euroScale = 25.8070; valuteText = " чешских крон"; }
	if(selectedValute == "DKK"){ euroScale = 7.4601; valuteText = " датских крон"; }
	if(selectedValute == "GBP"){ euroScale = 0.8744; valuteText = " английских фунтов стерлингов"; }
	
	var valuteCount = euroCount * euroScale;
	
	var textText = valuteCount + valuteText;
	answerText.innerHTML = textText;
	
}