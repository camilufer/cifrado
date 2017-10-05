    function principal(){
    	//usamos un do while para que sea "obligacion" responder correctamente
	    do{
	        var respuesta = prompt("ingresa una opcion: 1)cipher - 2)decipher");
	        if(respuesta !=""){
		       if(respuesta == "1"){
			      cipher();
		    }else if (respuesta =="2"){
			    decipher();
		    }else{
			   alert("ingresa una respuesta válida");
		    }
	    }
    }while (respuesta == ""|| (respuesta != "1" && respuesta != "2"));
}
var alfabeto= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

function cipher(){
	var str = prompt("ingresa una palabra:");
	var newstr ="";
    for(var i= 0; i< 26; i++){
    	if (str[i] ==""){
    		newstr = newstr + "";
    	}else{
    		var letra = str.charCodeAt(i);
    		letra = ((letra - 65 + 33)%26+ 65);
    		newstr = newstr + String.fromCharCode(letra);
	    }
	}

    alert("Tu palabra cifrada es: \n \n" + newstr);

}

function decipher(){
    alert ("El decifrado de tu palabra es ''")

}
 principal();


/*
function
cipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ") 
"HIJKLMNOPQRSTUVWXYZABCDEFG"
descipher("HIJKLMNOPQRSTUVWXYZABCDEFG")
"ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var palabra = prompt("ingresa una palabra")


var letras = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

(x-23+26)%26

prompt("ingresa una palabra")
function cesar(str, key) {
	 do{
	 	var str ="";
        
    	
    	if(respuesta !=""){
    		if (respuesta ===[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]){
    			return "hola";
    		}

    		}
    	}

     }







    function cesar(texto, cifrado) {
    var output="";
    cifrado = parseInt(cifrado);
    for (var i=0; i<texto.length;i++){
		output += String.fromCharCode(texto.charCodeAt(i)+clave);
    }
    return output;    
}
respuesta = str.tolowercase();


      for (var i=0; i<str.length; i++){
      	if (respuesta != "")
       return Str.charCodeAt
      }

*/
