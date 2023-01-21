export const CambiarMenu=(evento)=>{
    const divs=document.querySelectorAll(".div");
    const checked=document.querySelector("#menu-check");
    divs.forEach((div,indice)=>{
        if(checked.checked){
            div.classList.remove(`div-${indice+1}`);
        }else{
            div.classList.add(`div-${indice+1}`);
        }
    });
}

export const cerrarMenu=({target})=>{
    const checked=document.querySelector("#menu-check");
    if(checked.checked){
        CambiarMenu();
        checked.checked=false;
    }
}