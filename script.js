    // Inicio EasterEgg
    let clickCount = 0;


    const logo = document.querySelector('.logo img');
    
    
    logo.addEventListener('click', () => {
    
      clickCount++;
    
    
      if (clickCount === 5) {
    
        const gif = document.createElement('img');
        gif.src = './img/the-binding.gif'; 
        gif.alt = 'Gif';
        
    
        const gifContainer = document.getElementById('gifContainer');
        gifContainer.appendChild(gif);
        
        // Después de 30 segundos, elimina el gif
        setTimeout(() => {
          gifContainer.removeChild(gif);
          clickCount = 0; 
        }, 10000); 
      }
    });
        // Fin EasterEgg
        // Inicio Carousel
    /*Cargador de eventos al iniciar la página*/
    window.addEventListener('load',iniciar,false);
    
    /*Contador inicializado en cero*/
    var contador=0;
    
    function iniciar(){
        setInterval('cambiarImg()',5000);
    }
    
     var obj=document.getElementById('slider');
    var obj2=obj.getElementsByTagName('img');
    
    function cambiarManual(sentido)
    {
      if (sentido=="DER") {
        obj2[contador].style.opacity=0;
        if (contador<obj2.length-1) 
        {
          contador++;
          obj2[contador].style.opacity=1;
          console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
        }
        else
        {
          contador=0;
          obj2[contador].style.opacity=1;
          console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
        }
      }
      else if (sentido=="IZQ") 
      {
        obj2[contador].style.opacity=0;
        if (contador!=0) 
        {
          contador--;
          obj2[contador].style.opacity=1;
        }
        else
        {
          contador=obj2.length-1;
          obj2[contador].style.opacity=1;
        }
      }
    }
    
    function cambiarImg(){	        
    
        if(contador==obj2.length){
            for(var i=0; i<obj2.length; i++){
                obj2[i].style.opacity='0';
                contador--;
            }
            obj2[contador].style.opacity='1';
        }
        else
        {
          obj2[contador].style.opacity='1';
          contador++;
        }
        
    }
        // Fin de Carousel