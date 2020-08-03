const QRCode = require('../index');

// ================================ PNG Configs


var config={
	// ====== Basic
	text: "https://www.mcdonalds.it/",
	width: 400,
	height: 400,
	quietZone: 10,
	colorGradient: true,
	colorDark1: "#ff560d",
	colorDark2: '#ffe831',
	colorLight: "#ffffff",
	correctLevel: QRCode.CorrectLevel.Q, // L, M, Q, H
	dotScale: 1, // Must be greater than 0, less than or equal to 1. default is 1
	dotShape: 'square',

	logo: "C:\\Users\\user\\WebstormProjects\\QRcodeNodeJS\\doc\\images\\mcd.png",
	logoBackgroundColor: "#ffffff",
	logoBackgroundShape: 'square'
};

var config2={
	// ====== Basic
	text: "https://burgerking.it",
	
	width: 400,
	height: 400,
	quietZone: 10,
	correctLevel: QRCode.CorrectLevel.Q, // L, M, Q, H
	dotScale: 1 ,// Must be greater than 0, less than or equal to 1. default is 1
	colorDark: "#1d4f9e",
	colorLight: "rgb(255,255,255)",

	dotShape: 'rounded',

	title: 'SCAN FOR MENU', // Title
	titleFont: "bold 24px Times New Roman", // Title font
	titleColor: "#ff2000", // Title Color
	titleBackgroundColor: "#ffffff", // Title Background
	titleHeight: 70, // Title height, include subTitle
	titleTop: 25, // Title draw position(Y coordinate), default is 30

	quietZone: 15,
	// === Posotion Pattern(Eye) Color
	PI_BL: '#ff2000',
	PI_TR: '#ff2000',
	PI_TL: '#ffbe00', // Position Inner - Top Left
		// === Aligment color
	AI: '#ffbe00',

	logo: "C:\\Users\\user\\WebstormProjects\\QRcodeNodeJS\\doc\\images\\bk.png",
	logoWidth: 150,
	logoHeight: 150,
	logoBackgroundColor: "#ffffff"
}

var config3={
	// ====== Basic
	text: "https://www.pescaria.it/pescaria/it/",
	
	width: 400,
	height: 400,
	correctLevel: QRCode.CorrectLevel.Q, // L, M, Q, H
	dotScale: 0.9,// Must be greater than 0, less than or equal to 1. default is 1
	colorGradient: true,
	colorDark1: "#eb3f31",
	colorDark2: "rgba(45,140,210,0.83)",
	colorLight: "#ffffff",
	dotShape: 'dots',
    
    // QuietZone
    quietZone:15,

	// // === Posotion Pattern(Eye) Color
	// PI: '#274f00',
	// PO: '#7da81d',
	//
	// PI_TL: '#274f00', // Position Inner - Top Left
	// PO_TL: '#7da81d', // Position Outer - Top Right
	// AO: '#274f00',  // Position Outer - Bottom Right
	// AI: '#7da81d',  // Position Inner - Bottom Right
	//
	// // === Aligment color
	// AI: '#274f00',
	// AO: '#7da81d',

	// === Logo
	logo: "C:\\Users\\user\\WebstormProjects\\QRcodeNodeJS\\doc\\images\\download2.png",
	logoWidth:100,
	logoHeight:100,
	//logoBackgroundColor: '#FFFFFF', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
	logoBackgroundTransparent: true, // Whether use transparent image, default is false

	
	onRenderingStart:function(options){
		console.info("The QRCode file `q3."+options.format+"` was created.");
	}
}

var config4={
	// ====== Basic
	text: "http://www.quarcore.com/",
	
	width: 400,
	height: 400,
	correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
	dotScale: 1 ,// Must be greater than 0, less than or equal to 1. default is 1
	dotShape: 'rounded',
	colorDark: "#4d667c",
	colorLight: "#ffffff",
	
	// QuietZone
	quietZone:15,
	quietZoneColor:'#ffffff',
	
	// === Position Pattern(Eye) Color
	PI: '#BF3030',
	PO: '#269926', 
	
	PI_TL: '#B03060', // Position Inner - Top Left
	PO_TL: '#4d667c', // Position Outer - Top Right
	PI_BL: '#b7d28d', // Position Inner - Top Left
	PO_BL: '#aa5b71', // Position Outer - Top Right
	PI_TR: '#b7d28d', // Position Inner - Top Left
	PO_TR: '#aa5b71', // Position Outer - Top Right
	// === Aligment color
	AI: '#4d667c',
	AO: '#B03060',
	//eyeShape: 'circle',

	// === Logo
	logo: "C:\\Users\\user\\WebstormProjects\\QRcodeNodeJS\\img\\crop3.png", // LOGO

	logoWidth:220,
	logoHeight:80,
	//logoBackgroundColor: '#FFF8DC', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
	logoBackgroundTransparent: true // Whether use transparent image, default is false
}

var config6={

	text: "https://www.starbucks.com/menu",

	width: 400,
	height: 400,
	correctLevel: QRCode.CorrectLevel.Q, // L, M, Q, H
	dotScale: 1 ,// Must be greater than 0, less than or equal to 1. default is 1
	colorDark: "#d27b29",
	colorLight: "#ffffff",
	dotShape: "rounded",

	// QuietZone
	quietZone:20,
	quietZoneColor:'#ffffff',

	// === Position Pattern(Eye) Color
	PI_TL: '#017143', // Position Inner - Top Left

	PI_BL: '#d27b29', // Position Inner - Top Left
	PI_TR: '#d27b29', // Position Inner - Top Left

	AI: '#017143',

	eyeShape: 'circle',

	// === Logo
	logo: "C:\\Users\\user\\WebstormProjects\\QRcodeNodeJS\\doc\\images\\starb.png", // LOGO
	logoWidth:120,
	logoHeight:120,
	logoBackgroundColor: '#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
	logoBackgroundShape: 'circle'
}

var config5={
	text: "https://open.spotify.com/playlist/37i9dQZF1DXbuvTm9NMIGt",

	width: 600,
	height: 600,
	correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
	dotScale: 1,// Must be greater than 0, less than or equal to 1. default is 1
	dotShape: 'rounded' ,

	colorGradient: true,
	colorDark1: "rgb(51,208,112)",
	colorDark2: "#ffb457",
	colorLight: "#ffffff",
	eyeShape: 'circle',

	// QuietZone
	quietZone:20,
	quietZoneColor:'#ffffff',

	// === Logo
	logo: "C:\\Users\\user\\WebstormProjects\\QRcodeNodeJS\\doc\\images\\spotify.png", // LOGO
	logoWidth: 100,
	logoHeight: 100,
	logoBackgroundColor: '#ffffff', // Whether use transparent image, default is false
	logoBackgroundShape: 'circle'
}

var config13 = {
	text: "https://www.adidas.it",

	width: 600,
	height: 600,
	correctLevel: QRCode.CorrectLevel.Q, // L, M, Q, H
	dotScale: 1,// Must be greater than 0, less than or equal to 1. default is 1
	dotShape: 'rhombus',

	colorGradient: true,
	colorDark1: "rgb(178,5,0)",
	colorDark2: "#4e212b",
	colorLight: "#ffffff",

	PI: '#a09291',
	PO: '#a09291',

	PO_TL: '#a09291', // Position Inner - Top Left
	PI_TL: '#a09291', // Position Outer - Top Right
	AO: '#a09291',  // Position Outer - Bottom Right
	AI: '#a09291',  // Position Inner - Bottom Right
	// QuietZone
	quietZone:15,
	quietZoneColor:'#ffffff',

	// === Logo
	logo: "C:\\Users\\user\\WebstormProjects\\QRcodeNodeJS\\doc\\images\\adidas.png", // LOGO
	logoWidth: 150,
	logoHeight: 150,
	logoBackgroundShape: 'square',
	logoBackgroundColor: "#ffffff"
};




// ================================ PNG Test

var qrcode = new QRCode(config);
var qrcode2 = new QRCode(config2);
var qrcode3 = new QRCode(config3);
var qrcode4 = new QRCode(config4);
var qrcode5 = new QRCode(config5);
var qrcode6 = new QRCode(config6);
var qrcode13 = new QRCode(config13);

qrcode.saveImage({
	path: 'png/q1.png'
});
qrcode2.saveImage({
	path: 'png/q2.png'
});
qrcode3.saveImage({
	path: 'png/q3.png'
});
qrcode4.saveImage({
	path: 'png/q4.png'
});
qrcode5.saveImage({
	path: 'png/q5.png'
});
qrcode6.saveImage({
	path: 'png/q6.png'
});
qrcode13.saveImage({
	path: 'png/q13.png'
});
// qrcode.toDataURL().then(data=>{
// 	console.info('======QRCode PNG DataURL======')
// 	console.info(data)
// 	console.info('')
// });

// ================================ JPG Test

var config7 = Object.assign({}, config, {
    format:'JPG',
    version: 6
});
var config8 = Object.assign({}, config2, {
    format:'JPG'
});
var config9 = Object.assign({}, config3, {
    format:'JPG'
});
var config10 = Object.assign({}, config4, {
    format:'JPG'
});
var config11 = Object.assign({}, config5, {
	format:'JPG'
});
var config12 = Object.assign({}, config6, {
	format:'JPG'
});

var qrcode7 = new QRCode(config7);
var qrcode8 = new QRCode(config8);
var qrcode9 = new QRCode(config9);
var qrcode10 = new QRCode(config10);
var qrcode11 = new QRCode(config11);
var qrcode12 = new QRCode(config12);


qrcode7.saveImage({
	path: 'jpeg/q1.jpg'
});
qrcode8.saveImage({
	path: 'jpeg/q2.jpg'
});
qrcode9.saveImage({
	path: 'jpeg/q3.jpg'
});
qrcode10.saveImage({
	path: 'jpeg/q4.jpg'
});
qrcode11.saveImage({
	path: 'jpeg/q5.jpg'
});
qrcode12.saveImage({
	path: 'jpeg/q6.jpg'
});

// qrcode5.toDataURL().then(data=>{
// 	console.info('======QRCode JPG DataURL======')
// 	console.info(data)
// 	console.info('')
// });