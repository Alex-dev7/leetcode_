var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) { return ""}
     let res = ""
    let length = Math.max(str1.length, str2.length)

    function validate(str){
        if(str.length / 2 === 0){
            if(str.slice( str.length / 2) !== str.slice(0, str.length / 2) ){
                // console.log(str.slice(0, str.length / 2 + 1) )
                return str.slice( str)
            } else {
                
                return validate(str.slice(0, str.length / 2))
            }           
        } else {
            if(str.slice( str.length / 3) !== str.slice(0, str.length / 3) ){
                console.log(str.slice( str.length / 5))
                return str
            } else {
                
                return validate(str.slice(0, str.length / 3))
            }  
        }

    }

   
    for(let i = 0; i < length; i++){
        if(str1[i] === str2[i]){
            res += str1[i]
        }            
    }
    return validate(res)
};

console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))