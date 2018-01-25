<html>
	<head>
		<title>Конец</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="st.css">
	</head>
	<body>
		<div data-tid="App" class="App" align="center">
			<div class="pustota"></div>
			<div class="startgame">
				<img src="assets/Group 2.png">
			</div>
			<div class="memory_game">
				<p>Поздравляем!</p>
			<?php print "<p>Ваш итоговый счет: ".$_POST['secret_input']."</p>";?>
			</div>
			<div class="pusto"></div>
			<a href="" data-tid="EndGame-retryGame" id="my">
				<div class="bt_start">
					<h3>Еще раз</h3>
				</div>
			</a>
		</div>
	</body>
</html>
<script type="text/javascript">
	var snd = new Audio("RollinRock.ogg");
	var snd1 = new Audio("ArcadeAlarm01.mp3");
	snd.play();
    var a = document.getElementById('my');
    function timepause()
    {
    	setTimeout(function() 
			{
				document.location.href = "game.html";
    		}, 1000);
    }
    a.onclick = function() 
    {
    	snd1.play();
    	timepause();
        return false;
    }
</script>