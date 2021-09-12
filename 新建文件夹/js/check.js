/*注册界面*/
/*
		用户名验证
	*/
	function checkUser(){
		var user=document.getElementById("user").value;
		var userReg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
		//alert(userReg.test(user));
		var userText=document.getElementById("userText");
		if(userReg.test(user)){
			userText.innerHTML="格式正确!";
			return true;
		}
    else{
			userText.innerHTML="格式不正确!";
            return false;
		}
		
	}
/*密码验证*/
function checkPwd(){
  var pwd=document.getElementById("pwd").value;
  var pwdReg=/^[a-zA-Z0-9]{4,10}$/;
  var pwdText=document.getElementById("pwdText");
  
  if(pwdReg.test(pwd)){
    pwdText.innerHTML="格式正确!";
	return true;
    
 }
 else{
     pwdText.innerHTML="格式不正确!";
     return false;
  }
     
}  
/* function checkRepwd(){
	var pwd=document.getElementById("pwd").value;
	var repwd=document.getElementById("repwd").value;
    var repwdText=document.getElementById("repwdText");
	 if(pwd == repwd){
      repwdText.innerHTML="两次密码相同!";
      return true;
  } 
  else{
      repwdText.innerHTML="第二次格式的密码与第一次不相同"; 
	  return false;
     }
	
} */
function checkYx(){

	  var email = document.getElementById("youxiang").value;
	  var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	
	  ismail= reg.test(email);
	
	  if (ismail) {
		YxText.innerHTML="格式正确!";
		  return true;
	
	  }
	else{
		YxText.innerHTML="格式不正确!";
		return false;
	 }
}

function doGetEmailCode() {
	var email = $("#youxiang").val();//获取接收验证码的邮箱
	var url = "getEmailCode?toEmail=" + email;//地址与邮箱拼接
	$.get(url, function(result) {
	 console.log("result", result); 
	 });
 } 
 function doCompareEmailCode() {
	var codeid = $("#codeid").val();
	var url = "checkEmailCode?code=" + codeid;
    $.get(url, function(result) {
    console.log(result);
    });
}
 

function postBool(){
	if(checkUser() & checkPwd() & checkYx()){
		alert("登录成功!");
	}
}
$.ajax({
	url: "http://localhost:1120/Login11_war_exploded/register.jsp",//后端给的网址
	type: "POST",//POST,GET
	dataType: "json",//后端给的格式
	contentType: "application/json;charset=UTF-8",//统一，可以不写，但有时会交互失败
	data: {
		//获取input中name为pwd的值
	},//传给后端的内容，无则空
	success: function(data) {
		//data是后端传来的json
		
	},
	error: function() {
		//失败提醒
		var error = "查询数据失败！";
		console.log(error);
		//alert(error);
	}
});

/*登录界面)&&
$("input[type=button]").click(function(e){
	if(!isUser1Valid || !isuser1Valid){ 
		//用if语句来判断当用户名或者密码有一个为false时就弹出一个消息框，并提示：请格式正确的信息。
			  alert("请格式正确的信息");
			  return false;  //结束
			}
			$.ajax({       //用ajax来实现不刷新网页的基础上更新数据
			  type:"POST", //请求方式
			  url:"http://localhost:1120/Login11_war_exploded/login.jsp", //路径
			  contentType: "application/json;charset=UTF-8",//统一，可以不写，但有时会交互失败
			  data:{
				user1:$("input[name=username1]").val(),  //获取input中name为username的值
				pwd1:$("input[name=password1]").val() //获取input中name为pwd的值
			  },
			  success:function(){
				
				window.location = "person.html"; //注册成功就跳转到
			  }
			})
		})
*/
function login(loginform){
	//传入表单参数 
	if(loginform.log-username.value==""){ 
		//验证用户名是否为空 
		alert("请格式用户名！");
		loginform.log-username.focus();
		return false;
	 } 
	 if(loginform.log-password.value==""){ 
		 //验证密码是否为空 
		 alert("请格式密码！");
		 loginform.log-password.focus();
		 return false; 
	} 
	var param="&username="+loginform.log-username.value+"&password="+loginform.log-password.value;
	 //将登录信息连接成字符串，作为发送请求的参数 
	 $.ajax({ 
		 url:"http://localhost:1120/Login11_war_exploded/login.jsp", 
		 type:"POST", 
		 dataType:"json", 
		 contentType:"application/json;charset=UTF-8",//防止乱码 
		 success:function(data){ 
			 if(data == false){ 
			    alert("用户不存在");
			    loginform.username.focus();
			    return false; 
			}
			else{ 
				alert("登录成功");
				window.location.href = "person.html";
				//跳转到主页 
			}
		 } 
		}); 
	}

