function toggleMode() {
    const html = document.documentElement

    //if(html.classList.contains('light')){
     //  html.classList.remove('light')
   // } else{
   //     html.classList.add('light')
   // }esse codigo comentado faz a mesma coisa que a linha abaixo

    html.classList.toggle('light')


    //mudar avatar
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
          
        img.setAttribute('src', './assets/assets/avatar-light.png')

       } else{
        img.setAttribute('src', './assets/assets/avatar.png')
       }
}