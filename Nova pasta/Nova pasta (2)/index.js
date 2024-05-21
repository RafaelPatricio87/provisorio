function getTotalX(a, b) {
  let maiorA = Math.max(...a)
  let menorB = Math.min(...b)
  let qtdDivisiveis = 0


    for(let i = maiorA; i <= menorB;i++){
      
     let divisivelPorTodosA = true

     for(let y = 0 ; y < a.length; y++){
      if(i%a[y] !== 0){
        divisivelPorTodosA = false
        break;
      }
     }
      
     if(divisivelPorTodosA){
      let divisivelPorTodosB = true

      for(let x = 0; x < b.length; x++){
        if(b[x]% i !== 0){
          divisivelPorTodosB = false
          break;
        }

      }
      if(divisivelPorTodosB){
       qtdDivisiveis++
      }
     }
    }
    

  return qtdDivisiveis
}
console.log(getTotalX([2,6],[24,36]))