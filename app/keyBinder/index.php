<?php
	include('base64files.php');
?>
<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Archivo+Black' rel='stylesheet' type='text/css' />
		<link href='http://fonts.googleapis.com/css?family=Karla' rel='stylesheet' type='text/css' />
		<link href='style.css' rel='stylesheet' type='text/css' />
		<style rel="stylesheet" type='text/css'>
			body{
				background-image:url('<?php echo $bodyBG; ?>');
			}
			/*.keyBindNav .up{
				background-image:url('');
			}
			.keyBindNav .up:hover{
				background-image:url('');
			}
			.keyBindNav .down{
				background-image:url('');
			}
			.keyBindNav .down:hover{
				background-image:url('');
			}*/
			.toolbar{
				background-image:url('<?php echo $toolbarBG; ?>');	
			}
			.toolbar ul.nav li{
				background-image:url('<?php echo $toolbarulnavliBG; ?>');
			}
			.page{
				background-image:url('<?php echo $pageBG; ?>');
			}
			.pagebreak{
				background-image:url('<?php echo $pagebreakBG; ?>');
			}
			.top ul.nav li{
				background-image:url('<?php echo $topulnavliBG; ?>');
			}
			
		</style>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
		<script src="jquery.easing.1.3.js"></script>
		<script src="jquery.scrollTo-min.js"></script>
  		<script src="jquery.keyBinder.1.2.js"></script>
		<script src="base.js" type="text/javascript"></script>
	</head>
	<body>
		<div class="keyBindNav">
			<div class="up">
			</div>
			<div class="down">
			</div>
			<div class="info">
				Use the arrow keys on your keyboard to navigate through the pages
			</div>
		</div>
		<div class="toolbar">
			<div class="logo">
				<img src="<?php echo $keylogo; ?>" /> <span>keyBinder jQuery Plugin v1.3<span>
			</div>
			<ul class="nav">
				<li class="top">
					Return to Top
				</li>
				<li class="features">
					Features
				</li>
				<li class="demo">
					Demos
				</li>
				<li class="download">
					Download
				</li>
				<li class="documentation">
					Documentation
				</li>
				<li class="contact">
					Contact
				</li>
			</ul>
			<div class="attr">
				<img src="<?php echo $robologo; ?>" /> <span>a RebelRobot design<span>
			</div>
		</div>
		<div class="top page">
			<div class="top wrapper">
				<section class="header">
					<img src="<?php echo $keylogo; ?>" />
					
					<br/><span>keyBinder v1.3<span>
				</section>
				<section class="tagline">
					A fully functional jQuery plugin
				</section>
				<section class="description">
					A very simple plugin, keyBinder does exactly what it sounds like: binds functions to keystrokes.<br/>
					This can be to an individual key, a combination of keys, or a key sequence. <br/>
					For more info on what exactly keyBinder can do, check out the Features section below.
				</section>
				<ul class="nav">
					<li class="features">
						Features
					</li>
					<li class="demo">
						Demos
					</li>
					<li class="download">
						Download
					</li>
					<li class="documentation">
						Documentation
					</li>
					<li class="contact">
						Contact
					</li>
				</ul>
			</div>
		</div>
		<div class="pagebreak">
		</div>
		<div class="features page">
			<div class="features wrapper">
				<h1>Features</h1>
				<ul class="featureList">
					<li class="feature">Integrated jQuery functionality</li>
					<li class="feature">Single key mapping</li>
					<li class="feature">Dual/Triple key mapping</li>
					<li class="feature">Sequence Mapping</li>
					<li class="feature">Callback functions</li>
				</ul>
			</div>
		</div>
		<div class="pagebreak">
		</div>
		<div class="demo page">
			<div class="demo wrapper">
				<h1>Demos</h1>
				<section class="singleModifier">
					Press the "q" key:
					<output class="q">
					
					</output>
				</section>
				<section class="dualModifier">
					Press "shift" and "w" together:
					<output class="shiftW">
					
					</output>
				</section>
				<section class="sequence">
					Press "shift" then "e" then "r":
					<output class="shiftEr">
					
					</output>
				</section>
			</div>
		</div>
		<div class="pagebreak">
		</div>
		<div class="download page">
			<div class="download wrapper">
				<h1>Downloads</h1>
				Javascript file | File size: 7.2 KB | <a href="jquery.keyBinder.1.3.js" target="_blank">jquery.keyBinder.1.3.js</a> | <a href="https://github.com/therebelrobot/jquery.keyBinder" target="_blank">on Github</a>
				<h2>v1.3 Changelog</h2>
				<ul>
					<li>Implemented Callback functionality for all function types</li>
					<li>Removed unnecessary debugging logging in the console</li>
				</ul>
				Download <a href="keyBinder.changelog.txt" target="_blank">full changelog</a><br/>
				<b>Archive</b>
				<select class="archive" style="font-size:10px;">
					<option selected>Download older versions here</option>
					<option value="1.2">version 1.2</option>
				</select>
				
				<section class="license">
					<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">keyBinder jQuery Plugin</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://therebelrobot.com" property="cc:attributionName" rel="cc:attributionURL">Trent Oswald</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.
				</section>
			</div>
		</div>
		<div class="pagebreak">
		</div>
		<div class="documentation page">
			<div class="documentation wrapper">
				<h1>Documentation</h1>
					
					<table>
						<thead>
							<th>Valid Keys:</th>
						</thead>
						<tr>
							<td>backspace</td>
							<td>tab</td>
							<td>enter</td>
							<td>esc</td>
							<td>space</td>
						</tr>
						<tr>
							<td>shift</td>
							<td>ctrl</td>
							<td>alt</td>
							<td>leftSuper</td>
							<td>rightSuper</td>
						</tr>
						<tr>
							<td>pause</td>
							<td>capsLock</td>
							<td>numLock</td>
							<td>scrLock</td>
							<td>delete</td>
						</tr>
						<tr>
							<td>pgup</td>
							<td>pgdown</td>
							<td>end</td>
							<td>home</td>
							<td>insert</td>
						</tr>
						<tr>
							<td>pgup</td>
							<td>pgdown</td>
							<td>end</td>
							<td>home</td>
							<td>insert</td>
						</tr>
						<tr>
							<td>left</td>
							<td>up</td>
							<td>right</td>
							<td>down</td>
							<td>0-9 <small>top of keyboard</small></td>
						</tr>
						<tr>
							<td>a-z</td>
							<td>select</td>
							<td>num0-num9 <small>right of keyboard</small></td>
							<td>add <small>right of keyboard</small></td>
							<td>sub <small>right of keyboard</small></td>
						</tr>
						<tr>
							<td>mult <small>right of keyboard</small></td>
							<td>div <small>right of keyboard</small></td>
							<td>decPoint <small>right of keyboard</small></td>
							<td>f1-f12</td>
							<td>backTick <small>"`"</small></td>
						</tr>
						<tr>
							<td>fSlash</td>
							<td>bSlash</td>
							<td>openBracket <small>"["</small></td>
							<td>closeBracket <small>"]"</small></td>
							<td>equal</td>
						</tr>
						<tr>
							<td>dash</td>
							<td>comma</td>
							<td>period</td>
							<td>semiColon</td>
							<td>quote</td>
						</tr>
					</table>
			</div>
		</div>
		<div class="pagebreak">
		</div>
		<div class="contact page">
			<div class="contact wrapper">
				<h1>
					Contact
				</h1>
				<section class="tagline">
					Found a bug? Want a new feature added? <a href='mailto:admin@therebelrobot.com'>Send me an email!</a>
				</section>
			</div>
		</div>
	</body>	
</html>

