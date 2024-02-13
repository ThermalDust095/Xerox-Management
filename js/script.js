document.getElementById("ordersBtn").addEventListener("click" , function(){
    const boxContainer=document.createElement('div');
    boxContainer.className="box-container";

    const boxContent=document.createElement('div');
    boxContent.className="box-content";

    const content =`<p>Order No</p>
    <p>Name</p>
    <p>Usn</p>
    <div class="file-container">
        <p>File</p>
    </div>
    <button class="accept-btn btn1">Accept</button>
    <button class="reject-btn btn1">Reject</button>`;
    boxContent.innerHTML=content;

    boxContainer.appendChild(boxContent);

    document.getElementById("cardContainer").appendChild(boxContainer);
});