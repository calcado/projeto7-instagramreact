// Todos os itens repetitivos do projeto (stories, posts, sugestões, etc) devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando map. No projeto, esses itens são://
function Postagem(props){
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
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.imagemCurtida} />
              <div class="texto">
                Curtido por <strong>{props.userCurtida}</strong> e <strong>outras {props.numeroCurtidas}</strong>
              </div>
            </div>
          </div>
        </div>
  )

}

export default function Posts (){
  const posts = [{imagemUser:"assets/img/meowed.svg", nomeUser:"meowed", postFoto:"assets/img/gato-telefone.svg",imagemCurtida:"assets/img/respondeai.svg" , userCurtida:"respondeai", numeroCurtidas:"101.523"}, 
  {imagemUser:"assets/img/barked.svg" , nomeUser:"barked", postFoto:"assets/img/dog.svg",imagemCurtida:"assets/img/adorable_animals.svg" , userCurtida:"adorable_animals", numeroCurtidas:"99.159"}]

    return (
        <div class="posts">
        {posts.map((p) => <Postagem imagemUser = {p.imagemUser} nomeUser = {p.nomeUser} postFoto = {p.postFoto} imagemCurtida = {p.imagemCurtida} userCurtida = {p.userCurtida} numeroCurtidas = {p.numeroCurtidas} /> )}  
      </div>
    
    )
}