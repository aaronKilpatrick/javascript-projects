const clockDiv = document.querySelector("#clock");

setInterval( () => {
    let date = new Date();
    clockDiv.innerHTML = date.toLocaleString('en-AU', {
                                                        hour: '2-digit', 
                                                        minute: '2-digit', 
                                                        second: '2-digit', 
                                                        hour12: 'true'
                                                    });
}, 1000);