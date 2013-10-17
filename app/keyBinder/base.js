function centering(parent, div, type){
	var parentOffset = parent.offset();
	switch(type){
		case 'width':
			var parentWidth = parent.width();
			var thisDivWidth = div.width();
			/*if ($.isPlainObject(parentOffset)){
				var thisMarginLeft = ((parentWidth-thisDivWidth)/2)+parentOffset.left;
				console.log("width: "+parentOffset.left+" : "+parentWidth+" : "+thisDivWidth+" | "+(parentWidth-thisDivWidth)/2+" : "+thisMarginLeft);
			}*/
			var thisMarginLeft = (parentWidth-thisDivWidth)/2;
			div.css({'position':'absolute','left':thisMarginLeft});
			break;
		case 'height':
			var parentHeight = parent.height();
			console
			var thisDivHeight = div.height();
			if ($.isPlainObject(parentOffset)){
				var thisMarginTop = ((parentHeight-thisDivHeight)/2)+parentOffset.top;
				console.log("height :"+parentOffset.top+" : "+parentHeight+" : "+thisDivHeight+" | "+(parentHeight-thisDivHeight)/2+" : "+thisMarginTop);
			}
			else{
				var thisMarginTop = (parentHeight-thisDivHeight)/2;
			}
			div.css({'position':'absolute','top':thisMarginTop});
			break;
	}
}
function percentageSizing(parent, div, type, height, width){
	var returns = {};
	switch(type){
		case 'height':
			width = false;
			break;
		case 'width':
			width = height;
			height = false;
			break;
	}
	if (height){
		if (height.indexOf('%') >= 0){
			height = height.split('%');
			height = height[0];
		}
		if (isNaN(height)){
			height = parseFloat(height);
		}
		var parentHeight = parent.height();
		var newHeight = (parentHeight/100)*height;
		div.css({'height':newHeight});
	}
	if (width){
		if (width.indexOf('%') >= 0){
			width = width.split('%');
			width = width[0];
		}
		if(isNaN(width)){
			width = parseFloat(width);
		}
		var parentWidth = parent.width();
		var newWidth = (parentWidth/100)*width;
		div.css({'width':newWidth});
	}
}
function styling(){
	var thisWindow = $(window);
	var wrapper = $('.wrapper');
	centering(thisWindow, wrapper, 'width');
	
	var topUlNav = $('.top ul.nav');
	var topPage = $('.top.page');
	var topWrapper = $('.top.wrapper');
	centering(topWrapper, topUlNav, 'width');
	topUlNav.css({'bottom':'5%'});
	
	var featuresPage = $('.features.page');
	var featuresWrapper = $('.features.wrapper');
	var demoPage = $('.demo.page');
	var demoWrapper = $('.demo.wrapper');
	var downloadPage = $('.download.page');
	var downloadWrapper = $('.download.wrapper');
	var documentationPage = $('.documentation.page');
	var documentationWrapper = $('.documentation.wrapper');
	var contactPage = $('.contact.page');
	var contactWrapper = $('.contact.wrapper');
	
	centering(featuresPage, featuresWrapper, 'height');
	centering(demoPage, demoWrapper, 'height');
	centering(downloadPage, downloadWrapper, 'height');
	centering(documentationPage, documentationWrapper, 'height');
	centering(contactPage, contactWrapper, 'height');
	
}
function runStyling(){
	styling();
	$(window).resize(function(){
		styling();
	});
}

$(document).ready(function(){
	/*sytling options*/
	
	$('.toolbar').mouseover(function(){
		var toolopac = $('.toolbar').css('opacity');
		toolopac = parseFloat(toolopac);
		if (toolopac != 0 ){
			$('.toolbar').clearQueue();
			$(this).fadeTo('fast', 0.9);
		}
	});
	$('.toolbar').mouseout(function(){
		var toolopac = $('.toolbar').css('opacity');
		toolopac = parseFloat(toolopac);
		if (toolopac != 0 ){
			$('.toolbar').clearQueue();
			$(this).fadeTo('fast', 0.5);
		}
	});
	
	/*size and position*/
	runStyling();
	
	/*page init*/
	var thisPage = 'top';
	var thisURL = window.location.href;
	if (thisURL.indexOf('#') >= 0){
		thisPage = thisURL.split('#');
		thisPage = thisPage[1];
		$(document).scrollTo( $('div.'+thisPage), 800 );
		if (thisPage != 'top'){
			$('.toolbar').fadeTo(800, 0.5);
		}
	}
	
	/*Button Navigation functions*/
	$('.nav li').click(function(){
		var thisPage = $(this).attr('class');
		$(document).scrollTo( $('div.'+thisPage), 800 );
		document.location='#'+thisPage;
		var toolopac = $('.toolbar').css('opacity');
		toolopac = parseFloat(toolopac);
		if (toolopac == 0 && thisPage != 'top'){
			$('.toolbar').fadeTo(800, 0.5);
		}
		else if (toolopac != 0 && thisPage == 'top'){
			$('.toolbar').fadeTo(800, 0);
		}
	});
	/*keyBind Navigation Functions*/
	$(document).keyBinder("hotkey","up",function(){
		$('.keyBindNav .up').css({'background-image':'url("arrowUp.key.pressed.png")'});
		var thisPage = 'top';
		var thisURL = window.location.href;
		if (thisURL.indexOf('#') >= 0){
			thisPage = thisURL.split('#');
			thisPage = thisPage[1];
		}
		switch(thisPage){
			case 'top':
				break;
			case 'features':
				var thisPage = 'top';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'demo':
				var thisPage = 'features';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'download':
				var thisPage = 'demo';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'documentation':
				var thisPage = 'download';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'contact':
				var thisPage = 'documentation';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
		};
		var toolopac = $('.toolbar').css('opacity');
		toolopac = parseFloat(toolopac);
		if (toolopac == 0 && thisPage != 'top'){
			$('.toolbar').fadeTo(800, 0.5);
		}
		else if (toolopac != 0 && thisPage == 'top'){
			$('.toolbar').fadeTo(800, 0);
		}
	},function(){
		$('.keyBindNav .up').css({'background-image':'url("arrowUp.key.open.png")'});
	});
	$(document).keyBinder("hotkey","down",function(){
		$('.keyBindNav .down').css({'background-image':'url("arrowDown.key.pressed.png")'});
		var thisPage = 'top';
		var thisURL = window.location.href;
		if (thisURL.indexOf('#') >= 0){
			thisPage = thisURL.split('#');
			thisPage = thisPage[1];
		}
		switch (thisPage){
			case 'top':
				thisPage = 'features';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'features':
				thisPage = 'demo';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'demo':
				thisPage = 'download';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'download':
				thisPage = 'documentation';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'documentation':
				thisPage = 'contact';
				$.scrollTo( $('div.'+thisPage), 800 );
				document.location='#'+thisPage;
				break;
			case 'contact':
				break;
		};
		var toolopac = $('.toolbar').css('opacity');
		toolopac = parseFloat(toolopac);
		if (toolopac == 0 && thisPage != 'top'){
			$('.toolbar').fadeTo(800, 0.5);
		}
		else if (toolopac != 0 && thisPage == 'top'){
			$('.toolbar').fadeTo(800, 0);
		}
     	},function(){
     		$('.keyBindNav .down').css({'background-image':'url("arrowDown.key.open.png")'});
     	});
     	var qKeyBind = 0;
     	$(document).keyBinder("hotkey","q",function(){
     		qKeyBind++;
     		$('output.q').append("function Hotkey has now run : "+qKeyBind+"</br>");
     	});
     	var shiftwKeyBind = 0;
     	$(document).keyBinder("hotkey","shift", "w",function(){
     		shiftwKeyBind++;
     		$('output.shiftW').append("function Combo has now run : "+shiftwKeyBind+"</br>");
     	});
     	var sequenceBind = 0;
     	$(document).keyBinder("sequence","shift e r", function(){
     		sequenceBind++;
     		$('output.shiftEr').append("function sequence has now run : "+sequenceBind+"</br>");
     	});
	$('select.archive').change(function(){
		var which = $(this).val();
		switch (which){
			case "1.2":
				window.open("jquery.keyBinder.1.2.js");
			break;
		}
	});
});
