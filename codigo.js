const consultaUsuario = () => {
    let busquedaUsuario = document.getElementById("busquedaUsuario").value;
    console.log(busquedaUsuario)

    console.log("Hago consulta - fetch")
fetch(`https://dummyjson.com/products/search?q=${busquedaUsuario}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        valores = document.getElementById("valores");
        const resultados = document.getElementById("gridResultados");
        resultados.innerHTML = null;
        res.products.forEach(actual => {
            const newElement = document.createElement("div");
            newElement.classList = "col"
            newElement.innerHTML = `<div class="card" style="width: 18rem;"><img src="${actual.images[0]}" class="card-img-top" alt="${actual.title}"><div class="card-body"><h5 class="card-title">${actual.title}</h5><p class="card-text">${actual.description}</p><a href="https://www.amazon.com/s?k=${actual.title}" class="btn btn-primary">Comprar por ${actual.price}$ </a></div></div>`
            resultados.innerHTML += newElement.outerHTML;
        })
    }
    )
    .catch(err => console.error("error", err))
console.log("Fin consulta - fetch")
  }

  const element = document.getElementById("resultadoRapidez");
  element.innerHTML = `La tarea resuelta más rápidamente fue ${taskRapida}`