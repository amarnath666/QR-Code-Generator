
let btn = document.querySelector("button");
let qrText = document.getElementById("qrText")
let qrImage = document.getElementById("qrImage");

btn.addEventListener ("click", async () => {
    await getCode();
});

async function getCode () {
    try {
        qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data="+qrText.value;
    } catch (err) {
        console.log("Error -", err);
    }  
}

