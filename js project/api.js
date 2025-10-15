let promises = new Promise((resolve, reject) => {
 console.log("promise is created"); 
//  reject("promise is rejected");
});

function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid);
            resolve("success");
            if(getnextdata){
                getnextdata();            }
}            , 2000);
    })
}   

async function karma() {
    return  new Promise ((resolve,reject)=>{
        setTimeout(() => { 
             console.log("weather data");
        resolve("success");
            
        }, 20000);
      
    })
    
}
async function weatherdata(){
      awaitkarma();
}
