const expenseContainer=document.querySelector('.expense-container');

function addExpenses(){
    const tableRow=document.createElement('tr');
    const numberOfElements=expenseContainer.childNodes.length-1;

    tableRow.innerHTML=`
    <td>${numberOfElements}</td>
    <td><input type="text" name="" id="" class="form-control" placeholder="Appliance  name"></td>
    <td><input type="number" name="" id="" class="form-control costField" placeholder="Cost"></td>
`
expenseContainer.appendChild(tableRow);
}

function calculatebill(){
    const numNode=document.querySelectorAll(".costField");
    let totcost=0;
    // console.log(numNode);
    numNode.forEach(element => {
        totcost=totcost + parseInt(element.value);
        
    });
    console.log(totcost);
    document.querySelector(".billAmount").innerHTML="Rs."+totcost+"/";
}