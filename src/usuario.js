import React from "react";

export default function Usuario(){
  const [nome, setNome] = React.useState("Catana");
  const [user, setUser] = React.useState("catanacomics");
  const [foto, setFoto] = React.useState('assets/img/catanacomics.svg')

  return(
      
        <div class="usuario">
        <img src={foto} onClick={((f)=> setFoto(prompt("Qual link gostaria de usar?")))} />
        <div class="texto" >
          <span onClick={(l)=> setUser(prompt("Qual seu usuario?"))}><strong>{user}</strong></span>
          <span>
            {nome}
            <ion-icon name="pencil" onClick={(n)=> setNome(prompt("Qual seu nome?"))}></ion-icon>
          </span>
        </div>
      </div>
    )
}