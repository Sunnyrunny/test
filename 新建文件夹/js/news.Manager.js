function changebackcolor() {
    var arr_tr = document.getElementsByTagName("tr");
    for (var i = 0; i < arr_tr.length; i++) { chang_color(arr_tr[i]); }
}
function chang_color(obj) {
    obj.onmouseover = function () { this.style.backgroundColor = "#f2f2f2"; }
    obj.onmouseout = function () { this.style.backgroundColor = "rgb(176, 206, 230)"; }
}
setInterval(changebackcolor, 1000); //添加按钮 
function addLine() {
    var id = prompt("请输入新闻编号：");
    var name = prompt("请输入新闻标题：");
    var username = prompt("发布时间");
   

    if (name.length != 0 && id.length != 0 && username.length != 0 ) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td"); td1.innerHTML = id; tr.appendChild(td1);
        var td2 = document.createElement("td"); td2.innerHTML = name; tr.appendChild(td2);

        var td3 = document.createElement("td"); td3.innerHTML = username; tr.appendChild(td3);
        var td9 = document.createElement("td");
        var a = document.createElement("a");
        a.setAttribute("onclick", "del(this)");
        a.innerHTML = "删除"; a.href = "javascript:;";
        td9.innerHTML = ""; td9.appendChild(a); tr.appendChild(td9);
        var table = document.getElementById("table");
        table.appendChild(tr);
    } else { alert("不能为空！"); }
} //删除函数 
function del(obj) {
    var del_tr = obj.parentNode.parentNode;
    del_tr.parentNode.removeChild(del_tr);
}//修改函数
function change() {
    for (var i = 0; i < arr_tr.length; i++) {
        if (this.code == arr_tr[i].code) {
            arr_tr[i].name = this.name;
            arr_tr[i].id = this.id;
            arr_tr[i].username = this.username;
        }
    }
}
//查找函数
function search(data) {

    var id = prompt("请输入新闻编号：");
    var td1 = document.createElement("td"); td1.innerHTML = id; tr.appendChild(td1);
    for (var i = 0; i < arr_tr.length; i++) {
        if (data.code.indexOf(arr_tr[i].code) >= 0 || data.name.indexOf(arr_tr[i].name) >= 0) {
            searcharr_tr[arr_tr[i].code] = arr_tr[i];
            refreshDatas(searcharr_tr);
        }
    }



}