

async function searchMovie(){
    try {
    let movie=document.getElementById("query").value

    let res= await fetch(`https://www.omdbapi.com/?apikey=d806bd70&s=${movie}`)
    let data=await res.json()
     console.log(data)
    return data.Search

    }catch(err){
        console.log(err)
    }
}

async function main(){
    let data = await searchMovie()
    
     if(data===undefined){
         return false
     }
     appendData(data)
    console.log(data)
}
 let moviesDiv=document.getElementById("movies")
function appendData(movies){
    moviesDiv.innerHTML=""
    movies.forEach(function(el){
       
        let name=document.createElement("p")
        name.innerHTML=el.Title
       
        moviesDiv.append(name)
    })
}
// func---main

// "a"----> oninput


let timerId
function debounce(func,delay){
     if(timerId){
         clearTimeout(timerId)
     }
     timerId=setTimeout(function() {
        func()
    },delay)
}