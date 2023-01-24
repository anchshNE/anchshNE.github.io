str = "-ID CONFIRMED: ANCHSH_NE"
i = 0;
temp = "";

function white_a1()
{
	document.getElementById("load").innerHTML = "";
}

function press1_a1()
{
	if(i == str.length)
	{
		aaa1_a1();
	}else{
		temp += str[i];
		document.getElementById("load").innerHTML = temp;
		i +=1;
		setTimeout("press1_a1()", 30);
	}
}

press1_a1();

















function press2_a1()
{
	if(i == str.length)
	{
		aaa2_a1();
	}else{
		temp += str[i];
		document.getElementById("load").innerHTML = temp;
		i +=1;
		setTimeout("press2_a1()", 30);
	}
}


function aaa1_a1(){
str = "-REQUEST RECEIVED"
i = 0;
temp = "";

setTimeout("white_a1()",2000);
setTimeout("press2_a1()",2000);
}








function press3_a1()
{
	if(i == str.length)
	{
		setTimeout("end1_a1()",4000);
	}else{
		temp += str[i];
		document.getElementById("load").innerHTML = temp;
		i +=1;
		setTimeout("press3_a1()", 30);
	}
}


function aaa2_a1(){
str = "-START PROCESSING..."
i = 0;
temp = "";

setTimeout("white_a1()",2000);
setTimeout("press3_a1()",2000);
}


function press4_a1()
{
	if(i == str.length)
	{
		setTimeout("end2_a1()",1000);
	}else{
		temp += str[i];
		document.getElementById("load").innerHTML = temp;
		i +=1;
		setTimeout("press4_a1()", 30);
	}
}





function end1_a1()
{
str = "PERMISSION AUTHORIZED"
i = 0;
temp = "";

setTimeout("white_a1()",2000);
setTimeout("press4_a1()",2000);
}





function end2_a1()
{
white_a1();
location.href="./a2.html";
}
