        function addFields(){
            var number = document.getElementById("points").value;
            var container = document.getElementById("container");
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<number;i++){
                container.appendChild(document.createTextNode("Name of traverse point"+ (i+1)));
                var input = document.createElement("input");
                input.type = "text";
                container.appendChild(input);
                container.appendChild(document.createElement("br"));
                
                container.appendChild(document.createTextNode(" Enter angle "+ (i+1)));
                var input1 = document.createElement("input");
                input1.type = "text";
                container.appendChild(input1);
                container.appendChild(document.createElement("br"));

                container.appendChild(document.createTextNode(" Enter distance "+ (i+1)));
                var input2 = document.createElement("input");
                input2.type = "text";
                container.appendChild(input2);
                container.appendChild(document.createElement("br"));
                

            }
            var input3 = document.createElement("input");
            input3.value = "Submit";
            input3.type = "button";
            onclick(send());
            container.appendChild(input3);
            container.appendChild(document.createElement("br"));

             function send() {
                console.log(container.value);
              }
        }

