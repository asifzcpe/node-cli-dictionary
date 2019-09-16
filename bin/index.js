#!/usr/bin/env node
const axios=require('axios');
let word=process.argv[2];

if(typeof word==='undefined'){
	console.log("please, provide a word to get the meaning");
}
else{
	axios.get('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20190915T183157Z.a694dca7aa4cf72f.40b92dc695b10128e4270c018ecbfd189493c875&lang=en-ru&text='+word)
	.then((response)=>{
		let meanings=response.data.def[0].tr[0].mean;
		console.log(meanings.length+" meaning/s found for the word: "+word);
		console.log("=====================================");
		meanings.forEach((mean,index)=>{
			index+=1;
			console.log(index+". "+mean.text);
		});
	})
	.catch((error)=>{
		console.log("sorry, the word is not in our database");
	});
}


