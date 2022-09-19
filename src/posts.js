import React from 'react';
function Postagem(props){
  const [iconHeart, setIconHeart] = React.useState("heart-outline");
  const [iconBook, setIconBook] = React.useState("bookmark-outline");
  const [curtida, setCurtida] = React.useState(props.numeroCurtidas);
  const [cor, setCor] = React.useState("")
  
function curtiuHeart(){
  
  if(iconHeart === "heart-outline"){
    setIconHeart("heart")
    setCor("vermelho")
    setCurtida(curtida + 1)
  }else{
    setIconHeart("heart-outline")
    setCor("")
    setCurtida(curtida - 1)
    
  }
}
function curtiuBook(){
  if(iconBook === "bookmark-outline"){
    setIconBook("bookmark")
  }else{
    setIconBook("bookmark-outline")
  }
}
  return (

    <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.imagemUser} />
              {props.nomeUser}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src= {props.postFoto} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon onClick={curtiuHeart} name={iconHeart} class={cor}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={curtiuBook} name={iconBook} ></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.imagemCurtida} />
              <div class="texto">
                Curtido por <strong>{props.userCurtida}</strong> e <strong>outras {curtida}</strong>
              </div>
            </div>
          </div>
        </div>
  )

}

export default function Posts (){
  const posts = [{imagemUser:"assets/img/meowed.svg", nomeUser:"meowed", postFoto:"assets/img/gato-telefone.svg",imagemCurtida:"assets/img/respondeai.svg" , userCurtida:"respondeai", numeroCurtidas:101523}, 
  {imagemUser:"assets/img/barked.svg" , nomeUser:"barked", postFoto:"assets/img/dog.svg",imagemCurtida:"assets/img/adorable_animals.svg" , userCurtida:"adorable_animals", numeroCurtidas:99159}]

    return (
        <div class="posts">
        {posts.map((p) => <Postagem imagemUser = {p.imagemUser} nomeUser = {p.nomeUser} postFoto = {p.postFoto} imagemCurtida = {p.imagemCurtida} userCurtida = {p.userCurtida} numeroCurtidas = {p.numeroCurtidas} /> )}  
      </div>
    
    )
}