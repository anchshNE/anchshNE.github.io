var max = 2;
var min = 0; //不变
var isAoJiao = 0; //默认为0，若出现“回来！”则变为1；然后再次聚焦时title为"我才没有叫你呢"，变量变回0;
var myTitle = "Welcome to 【NEの小窝】进来了就不准再出去了";
var myIcon = "./source/icon/icon.jpg";



function myRandom(max,min)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}



onfocus = function()
{
	if( isAoJiao == 1)
	{
		myTitle = "≧ ﹏ ≦  我......我才没有叫过你呢";
		myIcon = "./source/icon/icon1.jpg";
		isAoJiao = 0;
	}else{
		myTitle = "欢迎回来 ヾ(•ω•`)o";
		myIcon = "./source/icon/icon3.jpg";
	}
	document.title = myTitle;
	document.getElementById("ico").href = myIcon;
	
	
}



onblur = function()
{
	switch(myRandom(max,min))
	{
		case 0:
			myTitle = "最喜欢白咕咕啦  \\\\( ^o^ )//";
			myIcon = "./source/icon/icon2.jpg";
			break;
		case 1:
			myTitle = "\"NE Co., Ltd\"网站还在考虑做不做呢  (@_@ ) ?";
			myIcon = "./source/icon/icon2.jpg";
			break;
		default:
			myTitle = "＞﹏＜  回来！";
			myIcon = "./source/icon/icon2.jpg";
			isAoJiao = 1;
			break;
	}
document.title = myTitle;
document.getElementById("ico").href = myIcon;
}

document.title = myTitle;
document.getElementById("ico").href = myIcon;