// Todos os itens repetitivos do projeto (stories, posts, sugestões, etc) devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando map. No projeto, esses itens são://
function PropStories(props){
  return(
    <div class="story">
            <div class="imagem">
              <img src={props.imagemStories} />
            </div>
            <div class="usuario">
              {props.nomeStories}
            </div>
          </div>
  )
}


export default function Stories (){
  const story = [{imagemStories:"assets/img/9gag.svg" , nomeStories:"9gag"},
  {imagemStories:"assets/img/meowed.svg", nomeStories:"meowed"},
  {imagemStories:"assets/img/barked.svg", nomeStories:"barked"},
  {imagemStories:"assets/img/nathanwpylestrangeplanet.svg", nomeStories:"nathanwpylestrangeplanet"},
  {imagemStories:"assets/img/wawawicomics.svg", nomeStories:"wawawicomics"},
  {imagemStories:"assets/img/respondeai.svg", nomeStories:"respondeai"},
  {imagemStories:"assets/img/filomoderna.svg", nomeStories:"filomoderna"},
  {imagemStories:"assets/img/memeriagourmet.svg", nomeStories:"memeriagourmet"}]
    return (
        <div class="stories">
          {story.map((p) => <PropStories imagemStories = {p.imagemStories} nomeStories = {p.nomeStories} />) }

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}