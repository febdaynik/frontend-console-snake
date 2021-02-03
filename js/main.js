url_local = "http://127.0.0.1:8000/"
url_site = "https://febday.pythonanywhere.com/"

function start(){
	post_signin()
	setTimeout(get_task, 1000);
}

function record(arr){
	document.getElementById("record_table").innerHTML = `<div class="name-column-table">
							<div class="name-column"><b>Имя</b></div>
							<div class="space-gor"></div>
							<div class="name-column"><b>Очки</b></div>
						</div>`
	arr.sort((prev, next) => next.score - prev.score );
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]["score"] != undefined && arr[i]["score"] != 0){
			// document.getElementById("record_table").innerText += arr[i]["name"]+": "+ arr[i]["score"]+"\n"

			document.getElementById("record_table").innerHTML += `<div class="space-ver"></div>
					<div class="name-column-table">
						<div id="nickname" class="name-column">`+arr[i]["name"]+`</div>
						<div class="space-gor"></div>
						<div id="score" class="name-column">`+arr[i]["score"]+`</div>
					</div>`

		}

	}
	// setTimeout(start, 1000*60*10); // авто-обновление таблицы
}

function post_signin() {
	
	$.ajax({
		type: 'POST',
		dataType: 'json',
		data: {username: "admin", password: "12223admin"},
		url: url_site+'signin/',
		success: function(jsondata){
			document.getElementById("token").innerText = jsondata["token"] 
		}

	});
}

function get_task() {
	token = document.getElementById("token").innerText
	return $.ajax({
		url: url_site+'all/',
		type: 'GET',
		dataType: 'json',
		headers: {Authorization: token},
		success: function(jsondata){ record(jsondata["tasks"]) }
	});
}

window.onload = function() {
	post_signin()
	setTimeout(get_task, 1000);
};

