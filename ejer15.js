    function converOcta() {      
    var num = document.getElementById("octal").value; 
    var resul= parseInt(num,8); 
    var veta=window.open("", "", "width=550,height=300, ,left=600, top=200" ); 
    veta.document.write('<html >'); 
    veta.document.write('<head>'); 
    veta.document.write('<title>Ejercicio15</title>');   
    veta.document.write('<div>'); 
    veta.document.write('<h1 style=" display: flex; justifycontent: center;">CONVERSION</h1>'); 
    veta.document.write('<p id="mensage">'+resul+'</p>'); 
    veta.document.write('<button style="padding: 5px 5px 5px 5px; borderradius: 8px; border: none;" onclick=window.close()>CERRAR</button>'); 
    veta.document.write('</div>'); 
    veta.document.write('</body>'); 
    veta.document.write('</html>');  
}

    function Sumar() {     
    var s,m, resul;     
    s=document.getElementById("dato1").value;     
    m=document.getElementById("dato2").value;             
    resul=parseInt(s)+parseInt(m); 
    alert("Resultado Suma: "+resul)      
}  

    function Restar() {
    var a,b, resul; 
    a =document.getElementById("dato1").value;    
    b=document.getElementById("dato2").value;        
    resul=parseInt(a)-parseInt(b); 
    alert("Resultado Resta: "+resul) 
} 
    function Multiplicar() {     
    var a,b, resul;   
    a =document.getElementById("dato1").value;    
    b=document.getElementById("dato2").value;           
    resul=a*b;     
    alert("Resultado Multiplicacion : "+resul) 
} 
    function Dividir() { 
    var a,b, resul;     
    a =document.getElementById("dato1").value;     
    b=document.getElementById("dato2").value;           
    resul=a/b;     
    alert("Resultado Division : "+resul) 
} 
