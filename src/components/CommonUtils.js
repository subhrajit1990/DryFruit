import 'regenerator-runtime/runtime';

const BASEURL = 'https://sharemybillapi.herokuapp.com/BillManager';

function refNoGenerator(){
	return new Date().valueOf();
}

export async function  APIServerCall (...args)  {
	console.log("About to submit the data ");
	debugger;
	let data="";
	try { 
		const res = await fetch(BASEURL+args[2],{
			"method": args[1],
			"headers": {
				'Content-Type': 'application/json',
		     	'Accept': 'application/json',
			    'channel': 'MB',
			    'masterTxnRefNo': refNoGenerator() ,
				'Authorization':'Basic YWRtaW46cGFzc3dvcmQ=',
			},
        	body: JSON.stringify(args[0]),
		});
		if (!res.ok) {
        	const message = `An error has occured: ${res.status} - ${res.statusText}`;
        	throw new Error(message);
      	}
      	data = await res.json();
      	console.log("Final results 1 :: "+JSON.stringify(data));
      	return data;
	}catch(err){
		console.log("Error logs"+err);
	}
	console.log("Final results 2 :: "+JSON.stringify(data));
	return null;		
}