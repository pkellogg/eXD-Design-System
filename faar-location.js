<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>01-Search Results</title>
<script src="https://bossanova.uk/jsuites/v2/jsuites.js"></script>
<script src="https://bossanova.uk/jsuites/v2/jsuites.webcomponents.js"></script>
<link rel="stylesheet" href="https://bossanova.uk/jsuites/v2/jsuites.css" type="text/css" />
<script src="faar-headersearch.js"></script>
<script src="fx-dropdownmenu.js"></script>
<script src="faar-simplelistbox.js"></script>
<script src="fx-markup.js"></script>
</head>

<body>

<div style = "position:relative;top:-150px;"> <!--for positioning only-->

<faar-headersearch xpos = 20 ypos = 200 width = 1200 textcolor = "silver"  c = #4D148C  size = 22 
family = "roboto"></faar-headersearch>

<fx-dropdownmenu style = "position:absolute;right:57px;top:210px;" width = 150 height = 70 orientation = left textcolor = "white" c = #4D148C size = 18 family = "roboto"
link1 = "http:\\fedex.com"  link1A = "http:\\fedex.com" link1B = "http:\\fedex.com" link1C = "http:\\fedex.com" style="margin-bottom:200px;font-family:roboto;">
<!--1st Tier-->
<span slot="drop-text1">Hi, Anton!</span><span  slot="drop-text1">&nbsp;&nbsp;&nbsp;&#9660;</span>
 <!--2nd Tier-->
<span slot="drop-drop-text1">Person B</span>
<span slot="drop-drop-text2">Person C</span>
<span slot="drop-drop-text3">Person D</span>
</fx-dropdownmenu>

<fx-markup style="position:absolute;left:50px;top:320px;" textcolor = "black" size = 25 family = "roboto"><span slot = "element-name"><span style= "font-weight:bold;">Your locations<br /><a href = '' style= "font-weight:normal;font-size:14px;">OLVA</a></span></fx-markup>

<fx-markup style="position:absolute;left:50px;top:400px;" textcolor = "black" size = 16 family = "roboto"><span style = "font-weight:bold;" slot = "element-name">Browse by region</span></fx-markup>

<faar-simplelistbox xpos = 50 ypos = 350 c = "white" dataSource = "A"></faar-simplelistbox>
 
</div>
 

</body>
</html>