if("Notification" in window)
            {
                let ask = Notification.requestPermission();
                ask.then(permission =>{
                    if(permission === "granted")
                    {
                        let msg = new Notification("Tittle",{
                            body: "Hello World",
                            icon: "me.png"
                        });
                        msg.addEventListener("click", event => {
                            alert("clck recieved");
                        });
                    }
                }); 
            }