const EventEmitter=require("events");
const events=new EventEmitter();

events.on("rains",()=>{
    console.log("raining");
});

events.on("sunny",()=>{
    console.log("sunny day");
});

events.emit("rains");