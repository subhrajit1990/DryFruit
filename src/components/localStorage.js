export default function viewRecentlyStorage(arrayName, oParams,keyToValidate) {
    var localData = JSON.parse(localStorage.getItem(arrayName) || "[]");

    if(localData.length > 0){
     
      if(localData.length > 5){
        localData = [];
        localStorage.removeItem(arrayName);
      }else{
        if(localData.find(x => x[keyToValidate] === oParams[keyToValidate])){          
          return;
        }
     
      }
    }
    localData.push(oParams);  
    localStorage.setItem(arrayName, JSON.stringify(localData));
  }