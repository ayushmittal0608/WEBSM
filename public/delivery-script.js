function trackDelivery() {
    const trackingNumber = document.getElementById("tracking-number").value;
    // Replace this with your logic to fetch the delivery status using an API or database.
    // For this example, we're just using predefined statuses.
    const status = getStatusFromDatabase(trackingNumber);

    const statusContainer = document.getElementById("status-container");
    const statusMessage = document.getElementById("status-message");

    if (status) {
        statusContainer.style.display = "block";
        statusMessage.innerText = `Status for tracking number ${trackingNumber}: ${status}`;
    } else {
        statusContainer.style.display = "block";
        statusMessage.innerText = "Tracking number not found.";
    }
}

function getStatusFromDatabase(trackingNumber) {
    // Replace this function with your logic to fetch the status from your data source.
    // For this example, we'll use a hardcoded set of statuses.
    if(trackingNumber=='TRK380001' || trackingNumber=='TRK600001' || trackingNumber=='TRK122001'){
        statuses=window.open('shipped.html');
    }
    else if(trackingNumber=='TRK400001' || trackingNumber=='TRK500001' || trackingNumber=='TRK560001'){
        statuses=window.open('in-transit.html');
    }
    else if(trackingNumber=='TRK110001' || trackingNumber=='TRK700012' || trackingNumber=='TRK411001'){
        statuses=window.open('delivered.html');
    }
    else{
        alert('Tracking Id is wrong...!!!')
    }
    return statuses[trackingNumber];
}
