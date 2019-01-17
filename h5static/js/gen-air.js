var fs = require("fs");
var head = `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1">
	<title>航司logo</title>
	<style>
	.wrap{
		display: inline-flex;
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	.wrap>.item{
		display: inline-flex;
		width:32px;
		box-sizing: border-box;
		height:50px;
		flex-direction: column;
		margin-right:6px;
	}
	.wrap>.item>img{
		display: inline-flex;
		width:100%;
		height:32px;		
		border:1px solid #ddd;
	}
	.wrap>.item>span{
		display: inline-flex;
		width:100%;
		box-sizing: border-box;
		height:18px;
		justify-content: center;
		align-items: center;
		font-size: 12px;
	}
	</style>
</head>
<body><div class="wrap">`;
var temp = '<div class="item"><img data-src="{path}"><span>{name}</span></div>';
var footer = `</div>
	<script src="../js/lib/jquery1.11.3.min.js"></script>
	<script>
		$("img").each(function(i,ele){
			setTimeout(function(){
				var src = $(ele).data("src");
				$(ele).attr("src",src);
			},i*30)
		});
	</script>
	</body></html>`;
var result = [];
fs.readdir("../images/AirlineIcon", function(err, files) {
	files.forEach(function(ele) {
		if (ele.indexOf("png") > -1) {
			var path = "../images/AirlineIcon/" + ele;
			result.push(temp.replace("{path}", path).replace("{name}", ele.split(".")[0]));
		}
	});
});

setTimeout(function() {
	console.log(result);

	fs.writeFile("../html/airs.html", head + result.join('') + footer, function() {});
}, 1000)