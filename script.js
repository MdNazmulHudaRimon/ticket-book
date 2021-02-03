// buying event handler
function ticketBuy(ticket, isBuy) {
    const inputTicketAmount = document.getElementById(ticket + "-count");
    const ticketAmount = parseInt(inputTicketAmount.value);
    let newTicketCount = ticketAmount;
    if (isBuy == true) {
        newTicketCount = ticketAmount + 1;
    }
    if (isBuy == false && ticketAmount > 0) {
        newTicketCount = ticketAmount - 1;
    }

    inputTicketAmount.value = newTicketCount;

    let ticketTotal = 0;
    if (ticket == 'first') {
        ticketTotal = newTicketCount * 150;

    }
    if (ticket == 'economy') {
        ticketTotal = newTicketCount * 100;

    }
    countTotalTicket();
}
// input event handler work start 


function countTotalTicket() {
    const firstClassCount = getInputValue('firstClass');
    const economyClassCount = getInputValue('economyClass');
    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById("final-price").innerText = '$' + totalPrice;
    const tax = totalPrice * 0.1;
        document.getElementById('tax').innerText = '$' + tax;
        const grandTotal = totalPrice + tax;
        document.getElementById('final-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    const inputTicketAmount = document.getElementById(ticket + "-count");
    const ticketAmount = parseInt(inputTicketAmount.value);
    return ticketAmount;
}

// confirmation massage
const button = document.getElementById('bookNow');
button.addEventListener('click', function () {
    alert("Thanks for being with us. Hope a safe jounrey!")
});
