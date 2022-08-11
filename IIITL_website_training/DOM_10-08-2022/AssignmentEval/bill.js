usageDetails = []
function calculatebill() {
    const numNode = document.querySelectorAll(".wattField");
    let totwatt = 0;
    // console.log(numNode);
    numNode.forEach(element => {
        totwatt = totwatt + parseInt(element.value);

    });

    document.querySelector(".billLoad").innerHTML = totwatt + " W";

    //calculate total consumption
    const appliances = document.querySelectorAll('.appliance');
    let totalconsumption = 0;
    appliances.forEach(appliance => {
        const wattageNode = appliance.querySelector(".wattField");
        const usageNode = appliance.querySelector(".usageField");
        totalconsumption += parseFloat(wattageNode.value)*parseFloat(usageNode.value)*30;
    });

    document.querySelector(".billAmount").innerHTML = totalconsumption +" KWH";
}

function deleteAppliance(this){
    console.log(this);
}
