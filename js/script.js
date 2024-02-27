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

    
    const content = `
    <h2>Order No: ${sampleOrder.orderNo}</h2>
    <p>Name: ${sampleOrder.name}</p>
    <p>USN: ${sampleOrder.usn}</p>
    <p><a href="${sampleOrder.file}" id="fileLink"><img src="img/file-img.png" alt="File Image" class="file-image"></a></p> 
    <p>Description: ${sampleOrder.description}</p>
    <div class="action-images">
        <img src="img/accept.png" alt="Accept Image" class="action-image accept-image"> 
        <img src="img/reject.png" alt="Reject Image" class="action-image reject-image">
    </div>`;

    boxContent.innerHTML = content;

    
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
