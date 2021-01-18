const redise = require("redis");
const client = redise.createClient();

client.on("error", error => {
    console.error(error);
});
client.publish("spiderman","bu uygulama üzerinden",(error,number)=>{
    console.log(`Mesaj ${number} kişiye gonderildi.`);
});