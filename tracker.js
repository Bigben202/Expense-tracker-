var btn= document.getElementById("btn");

function track() {
    var name= document.getElementById("name").value;
    var date= document.getElementById("date").value;
    var amount= document.getElementById("amount").value;
    var table=document.getElementById("table");
    
    var row=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");


    var txt1=document.createTextNode(name);
    var txt2=document.createTextNode(date);
    var txt3=document.createTextNode("$" +amount);
    var txt2=document.createTextNode(date);
    var txt4=document.createTextNode("\u00D7");

    td1.appendChild(txt1);
    td2.appendChild(txt2);
    td3.appendChild(txt3);
    td4.appendChild(txt4);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
     row.appendChild(td4);



    if (name == "" || date== "" || amount == "") {
        alert( "no field should be empty");
        
    }
    else {
        table.appendChild(row);
    }
    
    if (name != "" && date != "" && amount != "") {
         var name= document.getElementById("name").value="";
         var date= document.getElementById("date").value="";
         var amount= document.getElementById("amount").value="";
    }

    // Continue from making the close button work tommorow
    td4.className="close";
    
 var closes = document.getElementsByClassName("close");

    td4.onclick = function () {
        var div = this.parentElement;
        div.style.display="none";
    }

        /* closes.forEach((closes) => {
            closes.onclick = function () {
        var div = this.parentElement;
        div.style.display="none";
            }
        });*/ 
        
    
}

 btn.addEventListener("click", track);