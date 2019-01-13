// let test = "some test string";

// console.log(test.charAt(0).toUpperCase() + test.slice(1,-1) + test.charAt(test.length-1).toUpperCase());

// console.log(test.indexOf('string'));

// console.log(test.indexOf(' ', 5));

// console.log(test.substr(5, 4));

// console.log(test.slice(5, 9));


// console.log(test.slice(0, -6));

// let a=20,
// b=16;

// console.log(a+""+b);
//------------------------------------------------------------------------------------ 
// var b=Math.PI;
// console.log(b.toFixed(2));

// var b1=[15,11,16,12,51,12,13,51];
// console.log(Math.max(...b1));
// console.log(Math.min(...b1));

// var b2=Math.random()*100;
// console.log(b2.toFixed(2));
// console.log(Math.floor(b2));

// var b3="200$";

// console.log(parseInt(b3));
//----------------------------------------------------------------------------------------
// var c={product:"iphone"}
// c.price=1000;
// c["currency"]="dollar";
// console.log(c);
// c["details"]={
// 	model: 123,
// 	color: "red"
// }
// console.log(c);
// console.log(c.details);
//-------------------------------------------------
//////////////////////////////////////////////les 2///////////////////////////////////////////////////////////////////////////////////
// for (var a = "javaScript is a good language", b = "", i = 0; i < a.length; i++) {
// 		b += " " != a[i] ? i && " " != a[i - 1] ? a[i] : a[i].toUpperCase(): "";
// 		console.log(i)
// 		console.log(b)
// 	}
// 	console.log(b);
//////////////////////////////////////////////
// let str="tseb eht ma i",b1='';
// for (let i=str.length-1; i >= 0; --i){
// 	b1 += str[i];
// 	console.log(b1);
// }
/////////////////////////////////////////////////

// for(let f=10, fct=1, i=1;i<=f;i++){
// 	fct = i*fct;
// 	console.log(fct);
// }
///////////////////////////////////////////////
// let str="Считаем до 10и:"
// for(let i=1;i<=10;i++){
// 	i != 10 ? str+= i + "," : str+= i + ".";
// }
// console.log(str);
/////////////////////////////////////////////////
// var evn=[],
// odd=[];
// for(let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], i=0; i<=arr.length-1; i++){
// 	arr[i] % 2 == 0 ? odd.push(arr[i]) : evn.push(arr[i])	
// }console.log(evn)
//////////////////////////////////////////////--les 3--///////////////////////////////////////////////////////////////////////////////////
// let mulrpp=1;
// function multiply(...argmnts) {
// 	if (!argmnts) return 0 ; 
// 	for(let i=0; i<=argmnts.length-1;i++){
// 		mulrpp *= argmnts[i];
// 	}
// 	// console.log(mulrpp)
// 	return mulrpp;
// }
// console.log(multiply(2,4,6,8));
//-----------------------------------------------------------------------------------------
// function reverseString (sstring) {
// 	let nwstr="";
// 	for(let i = sstring.length-1 ; i>=0 ; i--){

// 	nwstr += sstring[i];
// }

// 	return nwstr;
// }
// console.log(reverseString("CXZ"))
//---------------------------------------------------------------------------------------------
// function getCodeStringFromText (text) {
// 	let newText="";
// 	for(let i = 0; i<=text.length-1; i++){
// 		newText += text.charCodeAt(i) + " ";
// 	}
// 	return newText
// }
// console.log(getCodeStringFromText("azx"));
//-------------------------------------------------------------------------------------------------
// function firstFunc ([...arr],fun){
// 	let newArr='';
// 	for(let i=0;i<=arr.length-1;i++){
// 		newArr+=fun(arr[i]);
// 	}
// 	return "New value:" + newArr;
// }
// function strFunc (elem){
// 	return elem.charAt(0).toUpperCase() + elem.slice(1);
// }
// console.log(firstFunc(['my','name','is'], strFunc));
// function numFunc (elem){
// 	return " " + elem + "0,"
// }
// console.log(firstFunc([10,20,30], numFunc));
// function objectMod (elem){
// 	return elem.name + " is " + elem.age + ", "
// }
// console.log(firstFunc([{age:26, name:"Dima"},{age:21, name:"Yura"}], objectMod));
// function invFunc(elem){
// 	let nvElem="";
// 	for(let j=elem.length-1;j>=0;j--){
// 		nvElem+=elem[j];
// 	}
// 	return nvElem + ", ";
// }
// console.log(firstFunc(['123','456',"abc","asd"], invFunc));
//-----
// function firstFunc ([...arr],fun){
// 	let newArr='';
// 		for(let i=0;i<=arr.length-1;i++){
// 			let prom=fun(arr[i]);
// 			newArr+=prom + ",";
// 		}
// 		return "New value:" + newArr;
// 	}
// function sunFive(elem){
// 	return elem + 5;
// }
// console.log(firstFunc([1,2,3], sunFive));
///////////////////////////////////////////////////////////////////////////-4-////////////////////////////////
//-----------------------------------------4.1---------------------------------------------------------
// function doubleArray (arr){
// 	let newArr=[];
// 	newArr=arr.concat(arr);
// 	return newArr;
// }
// console.log(doubleArray([1,2,3]));
///////////////////////////////////////
// function getLastEl (arr){
// 	return arr[arr.length-1];
// }
// console.log(getLastEl([3,2,1,0,'a']));
////////////////////////////////////////
// function getArray (n){
// 	let newArr=[];
// 	for (let i = 1; i <= n; i++) {
// 		newArr.push(i);
// 	}
// 	return newArr;
// }
// console.log(getArray(10))
//////////////////////////////////
// function changeColection(...args) {
// 	for (let i = 0; i < args.length; i++) {
// 		args[i].shift();
// 	}
// 	return args
// }
// console.log(changeColection([1,0,2,3],['ex','sada','a','b','c']));
/////////////////////////////////////////////////////
// function alf(text){
// 	return text.split('').sort().reverse().join('')
// }
// console.log(alf('vfcaz'))
/////////////////////////////////////////////////////////

// console.log([2,4,7,1,-2,10,-9,-15].sort( (a,b) => a-b ).reverse());

////////////////////////////////////////////////////////////
// function getNewArray(arr,min,max) {
// 	let newArr=[].concat(arr);
// 	return newArr.splice(min,max);
// }
// console.log(getNewArray([1,2,3,4,5,6,7],1,2));
/////////////////////////////////////////////////////////
// let arr=['one',2,3,4,5,6,7,8];
// // console.log(arr.concat(arr));
// //////////////////////////////////////////////////////////
// console.log(arr.splice(2,2,'three','four'));
// console.log(arr);
// ////////////////////////////////////////////////////////
// console.log(arr.splice(3,0,"awesome"));
// console.log(arr)
//////////////////////////////////////////////////////////
// let arr=[[14,45],[1],['a','c','d'],[]];
// console.log(arr.sort( (a,b) => a.length-b.length ));
//////////////////////////////////////////////////////////
// let arr=[
// 	{cpu:'intel',info:{cores:2,cache:3}},
// 	{cpu:'intel',info:{cores:4,cache:4}},
// 	{cpu:'amd',info:{cores:1,cache:1}},
// 	{cpu:'intel',info:{cores:3,cache:2}},
// 	{cpu:'amd',info:{cores:4,cache:2}},
// ];
// function sortd(a,b) {
// 	if(a.info.cores<b.info.cores) return -1;
// 	if(a.info.cores>b.info.cores) return 1;
// }
// console.log(arr.sort(sortd));
///////////////////////////////////////////////////////////
// const products = [
// 	{title: 'prod1',price:5.2},{title: 'prod2',price:0.2},{title: 'prod3',price:15},{title: 'prod4',price:25},{title: 'prod5',price:19.8},{title: 'prod6',price:8},{title: 'prod7',price:12}];
// 	function filterCollection(products, firstPrice, secondPrice) {
//     let result = [];
//     for ( i = 0; i < products.length; i++ ) {
//         if ( products[i].price >= firstPrice &&
//              products[i].price <= secondPrice ) {
//                 result.push(products[i]); 
//              }
//     }
//     return result.sort(( prev, next ) => prev.price - next.price);
// }
// console.log(filterCollection(products, 0, 10));
//-----------------------------------------4.2---------------------------------------------------------
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.children);
// let a=document.getElementsByTagName('div');
// console.log(a[0]);
// console.log(a[0].children);
// for (let i = 1; i < a[0].children.length-1; i++) {
// 	console.log(a[0].children[i])
// }
// let a=document.body.firstChild,
// b=document.querySelector('a'),
// c=document.querySelector('ul');
// function isParent(parent,child){
// 	if (parent.contains(child)) return true ;
// 	return false;
// }
// console.log(isParent(a,b));
///////////////////////////////////////////////////////
// let c = document.getElementsByTagName('a');
// for (let i = 0; i < c.length; i++) {
// 	if (!document.querySelector('ul').contains(c[i]) )console.log(c[i]);
// }
///////////////////////////////////////////////////////////////
// let c = document.querySelector('ul');
// console.log(c.previousElementSibling);
// console.log(c.nextElementSibling);
//////////////////////////////////////////////////////////
// let c = document.getElementsByTagName('li'),
// count=0;
// for (let i = 0; i < c.length; i++) {
// 	if (document.querySelector('ul').contains(c[i]) ) count++;
// }
// console.log(count);
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////-5-////////////////////////////////
// let tasks= ["item 1","item 2","item 3","item 4"];
// let ul = document.querySelector('.list-group'),
// 		form = document.forms['addTodoItem'],
// 		inputText = form.elements['todoText'];

// function listTamlate(task){
// 	let li = document.createElement('li');
// 	li.textContent = task;
// 	li.className = 'list-group-item d-flex align-items-center';
// 	let iDelete = document.createElement('i');
// 	iDelete.className = 'fas fa-trash-alt delete-item ml-auto';
// 	li.appendChild(iDelete);
// 	return li;

// };

// function clearList() {	
// 	ul.innerHTML = '';
// };

// function generateList(tasksArray){
// 	clearList();
// 	for (let i = 0; i < tasksArray.length; i++) {
// 		let li = listTamlate(tasksArray[i]);
// 		ul.appendChild(li);
// 	};
// 	if(!ul.children[0]){
// 		createAlert('alert-info','Empty list.');
// 	}

// }

// function addList(list){
// 	tasks.unshift(list);
// 	ul.insertAdjacentElement('afterbegin', listTamlate(list));
// }

// function deleteListItem(target){
// 	let parent = target.closest('li');
// 	let index = tasks.indexOf(parent.textContent);
// 	tasks.splice(index, 1);
// 	parent.remove();
// }
// function createAlert (alertName, alertText, pos){
// 	let div = document.createElement('div');
// 	div.className = 'alert alert-dismissible mt-3 ' + alertName;
// 	div.innerHTML = '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ alertText;
// 	pos.appendChild(div);
// }


// ul.addEventListener('click', function(e){
// 	if(e.target.classList.contains('delete-item')){
// 		deleteListItem(e.target);
// 		createAlert('alert-danger','Task has been removed success', form);
// 		if(!ul.children[0]){
// 			createAlert('alert-info','Empty list.' , ul);
// 		}
// 	}
// });
// form.addEventListener('submit', function(e){
// 	e.preventDefault();
// 	if(!inputText.value){
// 		inputText.classList.add('is-invalid');
// 	}
// 	else{
// 		addList(inputText.value);
// 		form.reset();
// 		createAlert('alert-success','Task added success!', form);
// 	}
// });
// inputText.addEventListener('keyup',function(e){
// 	inputText.classList.remove('is-invalid');
// });
// document.getElementById('clear').addEventListener('click',function(e){
// 	clearList();
// 	if(!ul.children[0]){
// 		createAlert('alert-info','Empty list.', ul);
// 	}
// });
// generateList(tasks);
/////////////////////////////////////////////////////////////////////////////-les 7////////////////////////////////////////////////////////////////X
// const rectangle = {
// 	width : 10,
// 	height : 20,
// 	qetSquare : function(width,height){
// 		return this.width * this.height;
// 	}
// }
// console.log(rectangle.qetSquare());
//////////////////////////////////////////
// const price = {
// 	price: 10,
// 	discount : 20,
// 	getPrice : function (){return this.price},
// 	getPriceDisc : function (){return (100-this.discount) * this.price/100}
//  }
//  console.log(price.getPriceDisc());
//////////////////////////////////////////////
// const user = {
// 	name : 'Dima',
// 	getUserName : function(){return this.name}
// }
// console.log(user.getUserName())
///////////////////////////////////////////////////////
// const height = {
// 	height : 10,
// 	heightUp : function () {return this.height++ }
// }
// console.log(height.heightUp());
// console.log(height.heightUp());
// console.log(height.heightUp());
// console.log(height.height);
// /////////////////////////////////////////
// const numerator = {
// 	value : 6,
// 	double : function(){this.value=2*this.value;return this},
// 	plusOne : function(){this.value++;return this},
// 	minusOne : function(){this.value--;return this}
// }
// // console.log(numerator.double());
// // console.log(numerator.value);
// // console.log(numerator.plusOne());
// // console.log(numerator.value);
// // console.log(numerator.minusOne());
// // console.log(numerator.value);
// numerator.minusOne().double().plusOne();
// console.log(numerator.value)
/////////////////////////////////////////////////////////
// function getList(){return this.list}
// let users = {
// 	length: 4,
// 	list : ['abl', 'loc', 'doc']
// }
// console.log(getList());
// users.getList=getList;
// console.log(users.getList());
// console.log(getList.call(users) + '12');
///////////////////////////////////////////////////////////
// let priceRoz = {
// 	price : 3,
// 	count : 12,
// 	fullPrice : function(){
// 		return this.price * this.count
// 	}
// }
// console.log(priceRoz.fullPrice());
// ////////////
// let priceRozNext = {
// 	price : 5,
// 	count : 4
// }
// priceRozNext.fullPrice = priceRoz.fullPrice;
// console.log(priceRozNext.fullPrice());
///////////////////////////////////////////////////////////////
let sizes = {width:5,height : 10},
						getSquare = function(){return this.width * this.height};
