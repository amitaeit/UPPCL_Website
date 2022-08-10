usageDetails=[]
function calculatebill(){
    const numNode=document.querySelectorAll(".wattField");
    let totwatt=0;
    // console.log(numNode);
    numNode.forEach(element => {
        totwatt=totwatt + parseInt(element.value);
        
    });
    
    document.querySelector(".billLoad").innerHTML= totwatt+" W";
    const val=document.querySelectorAll('.appliance');
    console.log(val.childNodes.length);


}
