zs = 0;	//左上
ys = 0;
zx = 0;
yx = 0;
z1 = 0;
z2 = 0;
QR = 0;

function QRw()
{
	QR+=1;
	if(QR==10)
	{
		QR=0;
		location.replace("https://www.bilibili.com/video/BV1Pe411576Q");
	}
}

//puzzle[id]的顺序是按puzzle解密的顺序写的
function puzzle1()
{
	z1 += 1;
	if(z1==10)
	{
		document.getElementById("BGM").src="https://music.163.com/song/media/outer/url?id=1399616170.mp3";
		document.getElementById("BGM_TEXT").innerHTML="<small>2023/1/23 虽然音乐是我随便找的……但是……不准关闭……欸嘿( •̀ ω •́ )✧…………-> Never Gonna Give You Up</small>";
	}
}
function puzzle2()
{
	if(z1==1)
	{
		z2+=1;
	}else{
zs = 0;	//左上
ys = 0;
zx = 0;
yx = 0;
z1 = 0;
z2 = 0;
	}
}

function puzzle3()
{
	if(z1==1 && z2==1)
	{
		ys+=1;
	}else{
zs = 0;	//左上
ys = 0;
zx = 0;
yx = 0;
z1 = 0;
z2 = 0;
	}
}

function puzzle4()
{
	if(z1==1 && z2==1&&ys==4)
	{
		zs+=1;
	}else{
zs = 0;	//左上
ys = 0;
zx = 0;
yx = 0;
z1 = 0;
z2 = 0;
	}
}
function puzzle5()
{
	if(z1==1 && z2==1&&ys==4&&zs==5)
	{
		zx+=1;
	}else{
zs = 0;	//左上
ys = 0;
zx = 0;
yx = 0;
z1 = 0;
z2 = 0;
	}
}
function puzzle6()
{

	if(z1==1 && z2==1&&ys==4&&zs==5&&zx==1)
	{
		yx+=1;
	}else{
zs = 0;	//左上
ys = 0;
zx = 0;
yx = 0;
z1 = 0;
z2 = 0;
	}

	if(z1==1 && z2==1&&ys==4&&zs==5&&zx==1&&yx==4)
	{
		location.href = "./NOT FINISHTED.html";
	}
}
