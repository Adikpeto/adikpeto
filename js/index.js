(function() {

    // DIV STYLE
    // DIV CLICK END LOG 
      // FUNCTION DAGGABLE
    function draggable(selector){
          selector.addEventListener("click",()=>{
            let StyleSelector = selector.style;

            selector.classList.toggle('playStop');
            let classPresence =  selector.classList.contains("playStop");
           

            
            if (classPresence == true) {
              /*let currentWidth = selector.innerWidth;
                let currentHeight = selector.innerHeight;
                StyleSelector.width = currentWidth;
                StyleSelector.height = currentHeight; */
                StyleSelector.position = "absolute";
               
                function Play() {
                    
                      
                      selector.classList.remove("setPosition")
                      window.addEventListener("mousemove",(event)=>{
                      StyleSelector.top = (event.screenY - 115)+"px";
                      StyleSelector.left = (event.screenX - 70) +"px"      
                
                 })

                }
             Play();

            } 

            if (classPresence == false ) {
                       let  array = selector.classList;
                       array.forEach(element => {
                           let select = document.querySelector("."+element);
                           select.style.position = "block";
                           console.log(select.style );
                       });
                        selector.classList.remove("playStop");
                        selector.classList.add("setPosition");
                           
            }




           
       })

    // DIV CLICK AND LOG
    
    // FUNCTION DAGGABLE
   
    }
let selectest = document.querySelector(".selector");

draggable(selectest);

}())

