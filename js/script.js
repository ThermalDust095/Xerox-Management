document.getElementById("ordersBtn").addEventListener("click", function(){

    // let latestOrderNo=1;

    // function generateOrderNo() {
    //     return latestOrderNo++;
    // }

    // const orderNo =generateOrderNo();
    
    const sampleOrder = {
        orderNo: "1",
        name: "Alan Albuquerque",
        usn: "1DT21CS012",
        file: "example.pdf",
        description: "This is a sample description."
    };

    
    const boxContainer = document.createElement('div');
    boxContainer.className = "box-container";

    const boxContent = document.createElement('div');
    boxContent.className = "box-content";

    const orderNumber=document.createElement('h2');
    orderNumber.textContent=`Order No: ${sampleOrder.orderNo}`;
    boxContent.appendChild(orderNumber);

    const orderDetails=document.createElement('div');
    orderDetails.className="order-details";

    const userDetails=document.createElement('div');
    userDetails.className="user-details";
    userDetails.innerHTML=`
    <p>Name: ${sampleOrder.name}</p>
    <p>USN: ${sampleOrder.usn}</p>
    <p>Description: ${sampleOrder.description}</p>`;
    
    orderDetails.appendChild(userDetails);

    const fileContainer=document.createElement('div');
    fileContainer.className="file-container";
    fileContainer.innerHTML=`
    <p><a href="${sampleOrder.file}" id="fileLink"><img src="img/file-img.png" alt="File Image" class="file-image"></a></p>`;

    orderDetails.appendChild(fileContainer);

    boxContent.appendChild(orderDetails);

    const confirmationContainer=document.createElement('div');
    confirmationContainer.className="action-images";
    confirmationContainer.innerHTML=`
    <img src="img/accept.png" alt="Accept Image" class="action-image accept-image"> 
    <img src="img/reject.png" alt="Reject Image" class="action-image reject-image">`;

    boxContent.appendChild(confirmationContainer);

    boxContainer.appendChild(boxContent);

    
    document.getElementById("cardContainer").appendChild(boxContainer);

    const acceptMessage=document.querySelector('.accept-image');
    const rejectMessage=document.querySelector('.reject-image');

    acceptMessage.addEventListener('click', function() {
        console.log('Accepted');
    });

    rejectMessage.addEventListener('click', function(){
        console.log('Rejected');
    })
});
