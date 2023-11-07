function logica_mes(mes:Number){
    let nomeMes;
    switch(Number(mes)) {
        case 1: 
          nomeMes = "Jan";
          break;
        case 2: 
          nomeMes = "Fev";
          break;
        case 3: 
          nomeMes = "Mar";
          break;
        case 4: 
          nomeMes = "Abr";
          break;
        case 5: 
          nomeMes = "Mai";
          break;
        case 6: 
          nomeMes = "Jun";
          break;
        case 7: 
          nomeMes = "Jul";
          break;
        case 8: 
          nomeMes = "Ago";
          break;
        case 9: 
          nomeMes = "Set";
          break;
        case 10: 
          nomeMes = "Out";
          break;
        case 11: 
          nomeMes = "Nov";
          break;
        case 12: 
          nomeMes = "Dez";
          break;
        default:
          break;
      }

      return nomeMes
}

export default logica_mes;