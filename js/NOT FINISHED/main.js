str="ACCESS PREMISION REQUIRED"
temp = ""
i = 0;

function press1()
{
	if(i == str.length)
	{
	}else{
		temp += str[i];
		document.getElementById("load").innerText = temp;
		i += 1;
		setTimeout("press1()",30);
	}
}
setTimeout("press1()",1500);







inobj = document.getElementById("in");
inobj.onchange = function()
	{
		reader = new FileReader();
		reader.readAsText(inobj.files[0], "UTF-8");
		reader.onload = function(e)
		{
			if(reader.result=="THIS_IS_AN_IMPORTANT_CARD_THAT_HAS_NOTHING_IMPORTANT"&&inobj.files[0].name=="anchsh_NE.IDCard")
			{
				location.href = "./a1.html";
			}
		}
	}









































function press2()
{
	if(i >= str.length)
	{
		window.alert("aaa");
	}else{
		temp += str[i];
		document.getElementById("load").innerText = temp;
		i += 1;
		setTimeout("press1()",30);
	}
	

}




function aaa(){
	document.getElementById("load").innerText = "";
	str="-ID CONFIRMED: "+"anchsh_NE";
	temp = ""
	i = 0;


setTimeout("press2()",1500);

}
