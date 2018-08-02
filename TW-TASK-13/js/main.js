function getReady() {
	for(let i in localStorage) {
		document.getElementById("all").innerHTML += `
	<tr id="tr${i.stuId}">
	<td ondblclick="alter(this)" class="stuName">${JSON.parse(localStorage.getItem(i)).stuName}</td>
	<td ondblclick="alter(this)" class="stuId">${JSON.parse(localStorage.getItem(i)).stuId}</td>
	<td ondblclick="alter(this)" class="CHS">${JSON.parse(localStorage.getItem(i)).CHS}</td>
	<td ondblclick="alter(this)" class="MATH">${JSON.parse(localStorage.getItem(i)).MATH}</td>
	<td ondblclick="alter(this)" class="ENG">${JSON.parse(localStorage.getItem(i)).ENG}</td>
	<td ondblclick="alter(this)" class="IT">${JSON.parse(localStorage.getItem(i)).IT}</td>
	<td>${JSON.parse(localStorage.getItem(i)).avg}</td>
	<td>${JSON.parse(localStorage.getItem(i)).total}</td>
	<td><div class="glyphicon glyphicon-remove" onclick="remove(this)"></div></td>
	</tr>`;
	}
}

$(document).ready(function() {
	$("#pre-insert").click(function() {
		$("#insert").slideToggle(300);
	});
	$("#pre-search").click(function() {
		$("#search").slideToggle(300);
	});
});

function addStudents(info) {
	if(infoIsCorrect(info)) {
		store(info);
	} else {
		alert(`请按正确的格式输入`);
	}
}

function infoIsCorrect(info) { //判断是否输入六个数据
	return info.some(i => i === "") ? false : true;
}

function store(info) {
	total = parseFloat(info[2]) + parseFloat(info[3]) + parseFloat(info[4]) + parseFloat(info[5]);
	avg = total / 4;
	let stuInfo = {
		"stuName": info[0],
		"stuId": info[1],
		"CHS": info[2],
		"MATH": info[3],
		"ENG": info[4],
		"IT": info[5],
		"avg": avg,
		"total": total
	};
	localStorage.setItem(info[1], JSON.stringify(stuInfo));
	document.getElementById("all").innerHTML += `
	<tr id="tr${info[1]}">
	<td ondblclick="alter(this)" class="stuName">${JSON.parse(localStorage.getItem(info[1])).stuName}</td>
	<td ondblclick="alter(this)" class="stuId">${JSON.parse(localStorage.getItem(info[1])).stuId}</td>
	<td ondblclick="alter(this)" class="CHS">${JSON.parse(localStorage.getItem(info[1])).CHS}</td>
	<td ondblclick="alter(this)" class="MATH">${JSON.parse(localStorage.getItem(info[1])).MATH}</td>
	<td ondblclick="alter(this)" class="ENG">${JSON.parse(localStorage.getItem(info[1])).ENG}</td>
	<td ondblclick="alter(this)" class="IT">${JSON.parse(localStorage.getItem(info[1])).IT}</td>
	<td>${JSON.parse(localStorage.getItem(info[1])).avg}</td>
	<td>${JSON.parse(localStorage.getItem(info[1])).total}</td>
	<td><div class="glyphicon glyphicon-remove" onclick="remove(this)"></div></td>
	</tr>`;
}

function selectStudents(id) {
	if(idIsCorrect(id)) {
		search(selectSTU(id));
	} else {
		alert('请按正确的格式输入要打印的学生的学号');
	}
}

function idIsCorrect(id) {
	if(Number(id.split(' ').join(''))) { //判断输入的id是否全为数字
		return true;
	} else {
		return false;
	}
}

function selectSTU(id) {
	let selectedSTU = [];
	id.split(' ').forEach(i => {
		let stu = localStorage.getItem(i);
		if(stu) {
			selectedSTU.push(i);
		}
	});
	return selectedSTU;
}

function search(selectedSTU) {
	document.getElementById("all").style.display = "none";
	document.getElementById("selected").style.display = "table";
	document.getElementById("selected").innerHTML = `
				<tr id="selected_tr0">
				<th>姓名</th>
				<th>学号</th>
				<th>语文</th>
				<th>数学</th>
				<th>英语</th>
				<th>编程</th>
				<th>平均分</th>
				<th>总分</th>
				<th></th>
			</tr>`;
	for(let i of selectedSTU) {
		document.getElementById("selected").innerHTML += `
	<tr id="selected_tr${i.stuId}">
	<td ondblclick="alter(this)" class="stuName">${JSON.parse(localStorage.getItem(i)).stuName}</td>
	<td ondblclick="alter(this)" class="stuId">${JSON.parse(localStorage.getItem(i)).stuId}</td>
	<td ondblclick="alter(this)" class="CHS">${JSON.parse(localStorage.getItem(i)).CHS}</td>
	<td ondblclick="alter(this)" class="MATH">${JSON.parse(localStorage.getItem(i)).MATH}</td>
	<td ondblclick="alter(this)" class="ENG">${JSON.parse(localStorage.getItem(i)).ENG}</td>
	<td ondblclick="alter(this)" class="IT">${JSON.parse(localStorage.getItem(i)).IT}</td>
	<td>${JSON.parse(localStorage.getItem(i)).avg}</td>
	<td>${JSON.parse(localStorage.getItem(i)).total}</td>
	<td><div class="glyphicon glyphicon-remove" onclick="remove(this)"></div></td>
	</tr>`;
	}
}

function alter(element) {
	let pre = element.innerHTML;
	if(pre.indexOf('type="text"') > 0) { //如果已经双击过，内容已经存在input，不做任何操作
		return;
	}
	let newelm = document.createElement('input');
	newelm.type = 'text';
	newelm.className = 'form-control';
	newelm.value = pre;
	newelm.onblur = function() {
		element.innerHTML = this.value == pre ? pre : this.value; //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值 
		let currentId = element.parentElement.cells[1].innerHTML;
		let storage = JSON.parse(localStorage.getItem(currentId));
		storage[element.className] = this.value;
		storage["total"] = parseFloat(storage["CHS"]) + parseFloat(storage["MATH"]) + parseFloat(storage["ENG"]) + parseFloat(storage["IT"]);
		storage["avg"] = parseFloat(storage["total"]) / 4;
		localStorage.setItem(currentId, JSON.stringify(storage));
	}
	element.innerHTML = ''; //设置该标签的子节点为空
	element.appendChild(newelm);
	newelm.setSelectionRange(0, pre.length); //设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
	newelm.focus();
}

function remove(element) {
	let currentName = element.parentElement.parentElement.cells[0].innerHTML;
	let currentId = element.parentElement.parentElement.cells[1].innerHTML;
	decision = window.confirm(`确定删除${currentName}${currentId}的成绩?`);　　
	if(decision == true) {　　　　
		localStorage.removeItem(`${currentId}`);
		element.parentElement.parentElement.remove();
	}　　
	else {　　　　
		close();
	}
}

function empty(element) {
	element.parentElement.childNodes.forEach(i => {
		if(i.type === "text") {
			i.value = "";
		}
	});
}

function goBack() {
	document.getElementById("selected").style.display = "none";
	document.getElementById("all").style.display = "table";
}