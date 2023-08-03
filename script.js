fetch('https://api.giphy.com/v1/gifs/random?api_key=Ni69DmLf73pI02ikE8YSE0YPc1LIGv11&tag=book&rating=g') 
// we can also keep tag value of more than one word using plus sign example :: sea+otter
.then(function(response){
    if(response.status==200){
    return response.json()
    }
    else{
        console.log("Whoops Problem!")
    }
})

.then(function(responseData){
    console.log(responseData)
    var gifUrl=responseData.data.images.originals.url; // change original to originals to see how catch handles it
    console.log(gifUrl)

    var gifImg=document.createElement("img")
    gifImg.setAttribute("src",gifUrl)
    document.body.appendChild(gifImg)

    var gifTitle=responseData.data.title;
    var caption=document.createElement("h3");
    caption.innerHTML=gifTitle;
    document.body.appendChild(caption)

})
.catch(function(error){
    console.log("There was a problem!",error)
}) // we can see the status code is still 200(good) but there is an error