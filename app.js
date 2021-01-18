const redise = require("redis");
const client = redise.createClient();

client.on("error", error => {
    console.error(error);
});


client.set("userName","murat",(error,message) =>{
    if(error){
        console.error(error);
    }
    console.log("Message :",message);
});
client.get("userName",(error,message) =>{
    if(error){
        console.error(error);
    }
    console.log("Message :",message);
});
client.del("userName",(error,message) =>{
    if(error){
        console.error(error);
    }
    console.log("Delete :",message);
});

client.exists("userName",(error,message) =>{
    if(error){
        console.error(error);
    }
    console.log("Exists :",message);
});
client.APPEND("lastName","tahsin",(error,message) =>{
    if(error){
        console.error(error);
    }
    console.log("Append :",message);
    client.get("lastName",(error,message) =>{
        console.log("okunan : ", message);
    })
});


client.on("message",(channel,message) => {
    console.log(`${channel} isimli kanala ${message} geldi..`);
});
client.subscribe("spiderman"); 
