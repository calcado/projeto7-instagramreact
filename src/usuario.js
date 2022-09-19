// O usuário acima das sugestões (este não é um array, mas os dados devem vir de props)

export default function Usuario(){
    return(
      
        <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          <span>
            Catana
            <ion-icon name="pencil" onClick={()=> prompt("Qual seu nome?")}></ion-icon>
          </span>
        </div>
      </div>
    )
}