console.log(data);
let masterdiv = document.getElementById("masterDiv");
let newdiv = document.createElement("div");
for(let i = 0; i < culinary.length; i++){
    let newpT = document.createElement("p");
    let newpD = document.createElement("p");
    let newpURL = document.createElement("p");
    let newpTAGS = document.createElement("p");
    newpT.innerText = (data.culinary[i].title);
    newpD.innerText = (data.culinary[i].description)
    newpURL.innerText = (data.culinary[i].url)
    newpTAGS.innerText = (data.culinary[i].tags)
    newdiv.appendChild(newpT);
    newdiv.appendChild(newpD);
    newdiv.appendChild(newpURL);
    newdiv.appendChild(newpTAGS);
}
masterdiv.appendChild(newdiv);