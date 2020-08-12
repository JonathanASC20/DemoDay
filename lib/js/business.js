console.log(data);
let masterdiv = document.getElementById("masterDiv");
let newdiv = document.createElement("div");
for(let i = 0; i < business.length; i++){
    let newpT = document.createElement("p");
    let newpD = document.createElement("p");
    let newpURL = document.createElement("p");
    let newpTAGS = document.createElement("p");
    newpT.innerText = (data.business[i].title);
    newpD.innerText = (data.business[i].description)
    newpURL.innerText = (data.business[i].url)
    newpTAGS.innerText = (data.business[i].tags)
    newdiv.appendChild(newpT);
    newdiv.appendChild(newpD);
    newdiv.appendChild(newpURL);
    newdiv.appendChild(newpTAGS);
}
masterdiv.appendChild(newdiv);