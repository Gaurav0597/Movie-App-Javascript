let filmName
var container = document.getElementById('container')
var movies = document.getElementById('movies')
async function getMovies() {
  filmName = document.getElementById('query').value
  try {
    let res = await fetch(
      `http://www.omdbapi.com/?apikey=3bf25992&s=${filmName}`,
    )

    let data = await res.json()
    container.innerHTML = ''
    console.log(data)
    displayMovies(data)
    //    console.log(data)
  } catch (err) {
    showError(err)
  }
}
async function main() {
  let data = await getMovies()

  if (data === undefined) {
    return false
  }
  displayMovies(data)
  console.log(data)
}
function showError(err) {
  container.innerHTML = ''
  let div = document.createElement('div')
  div.setAttribute('class', 'errordiv')
  let msg = document.createElement('p')
  msg.innerText = `${filmName} Movie Not Found`
  msg.setAttribute('class', 'msg')

  let errorimg = document.createElement('img')
  errorimg.src = 'https://c.tenor.com/eDchk3srtycAAAAj/piffle-error.gif'
  errorimg.setAttribute('class', 'errorimg')
  div.append(msg, errorimg)
  container.append(div)
}

function displayMovies(data) {
  movies.innerHTML = ''
  console.log(data)

  data.Search.forEach(function (el) {
    let div = document.createElement('div')
    let Title = document.createElement('button')
    Title.innerText = el.Title
    Title.setAttribute('class', 'Title')
    Title.addEventListener("click" ,function(){
      displayData(el)
    
  })

    div.append(Title)
    movies.append(div)
  })
}

let timerId
function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId)
  }
  timerId = setTimeout(function () {
    func()
  }, delay)
}

function displayData(el){

  let div=document.createElement("div");

  let img=document.createElement("img");
  img.src=el.Poster;
  img.setAttribute("class","img")

  let Title=document.createElement("p")
  Title.innerText=el.Title
  Title.setAttribute("class","Title")

  let Year=document.createElement("p")
  Year.innerText=el.Year
  Year.setAttribute("class","Year")

  div.append(img,Title,Year)

  container.append(div)

}

