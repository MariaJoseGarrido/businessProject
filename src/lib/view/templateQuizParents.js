export const quizParents = () => {
  const divQuizParents = document.createElement("div");
  divQuizParents.className = "templateQuizParents";
  const viewQuizParents = `
  
    <div id= "quiz">

    <h1>Cuánto sabes del COVID-19</h1>
    <div>  
      <br><br><br>
  <h3> 1. ¿Qué es el Covid?</h3>
<input type="radio" id="p1r1" name="covid1" value="1">Un virus
<br>
<input type="radio" id="p1r2" name="covid1" value="1">Una bacteria
<br>
<input type="radio" id="p1r3" name="covid1" value="1">Una ameba
</div>
<br><br>
<div>
<h3> 2. ¿Cuál es el mejor cuidado de manos que debemos hacer?</h3>
<input type="radio" id="p2r1" name="covid2" value="1">Sólo aplicar alcohol gel de vez en cuando
<br>
<input type="radio" id="p2r2" name="covid2" value="1">Lavar frecuentemente con agua y jabón durante 20 segundos
<br>
<input type="radio" id="p2r3" name="covid2" value="1">Solo lavar con agua
</div>
<br><br>

<div>
<h3>3. ¿Que debemos usar obligatoriamente cuando estamos en lugares publicos?</h3>
<input type="radio" id="p3r1" name="covid3" value="1">Mascarilla
<br>
<input type="radio" id="p3r2" name="covid3" Value="1">Guantes
<br>
<input type="radio" id="p3r3" name="covid3" value="1">Overol desechable
</div>
<div>
<br><br>

<h3>4. ¿A quiénes les puede afectar el COVID-19?</h3>
<input type="radio" id="p4r1" name="covid4" value="1">A los animales
<br>
<input type="radio" id="p4r2" name="covid4" value="1">Solo niños y ancianos
<br>
<input type="radio" id="p4r3" name="covid4" value="1">A todos los seres humanos
</div>
<br><br>


<div>
<h3>5. ¿Existe una vacuna para el COVID-19?</h3>
<input type="radio" id="p5r1" name="covid5" value="1"> Sí, esta confirmada hace algunos meses
<br>
<input type="radio" id="p5r2" name="covid5" value="1"> NO, todavia no existe con certeza una vacuna, aun se hacen pruebas para ello
<br>
<input type="radio" id="p5r3" name="covid5" value="1"> Tal vez
</div>
<br><br>


<div>
  <h3>6. Entre los modos de contagio, ¿Cuál podría ser uno de ellos?</h3>
  <input type="radio" id="p6r1" name="covid6" value="1"> Por el aire
  <br>
  <input type="radio" id="p6r2" name="covid6" value="1"> Por las gotas de la respiración que se expulsan a toser y estornudar
  <br>
  <input type="radio" id="p6r3" name="covid6" value="1"> Por usar mascarilla
</div>
<br><br>


<div>
  <h3>7. ¿Puede el coronavirus transmitirse tanto en temperaturas cálidas como temperaturas frías?</h3>
<input type="radio" id="p7r1" name="covid7" value="1">No, solo en inivierno
<br>
<input type="radio" id="p7r2" name="covid7" value="1">Sí, con cualquier temperatura
<br>
<input type="radio" id="p7r3" name="covid7" value="1"> No, solo en verano
</div>
<br><br>


<div>
  <h3>8. ¿Pueden cartas, encomiendas, paquetes de delivery estar contaminados por el virus causante del covid?</h3>
  <input type="radio" id="p8r1" name="covid8" value="1"> No, es un tontería
  <br>
  <input type="radio" id="p8r2" name="covid8" value="1">No, Solo el material organico puede estar contaminado
  <br>
  <input type="radio" id="p8r3" name="covid8" value="1"> Sí, todos los objetos organicos e inorganicos pueden ser contaminados
</div>
<br><br>


<div>
  <h3>9. ¿Qué significa que una comuna pase a la fase de Tansición?</h3>
  <input type="radio" id="p9r1" name="covid9" value="1"> Que se puede salir todos los dias a cualquier lado y hacer reuniones familiares
  <br>
  <input type="radio" id="p9r2" name="covid9" value="1"> Que debemos seguir todos los dias confinados
  <br>
  <input type="radio" id="p9r3" name="covid9" value="1"> Que tenemos tránsito libre de lunes a viernes igualmente tomando medidas de precaución y confinamiento Sábado, Domingo y festivos
  </div>
  <br>

  <button id ="send" input type="submit" value="Enviar">Enviar</button>

    </div>

</div>


      <p class="copyrigth">
        ©️ 2020 Hootie Hoo™️  | Todos los derechos reservados.
      </p>
    </div>
  </footer>
  `;


  
  divQuizParents.innerHTML = viewQuizParents;
  
  const buttonQuiz = divQuizParents.querySelector("#send");
  


  let puntaje=0; 

  const showSelect = () => {

    if (divQuizParents.querySelector('#p1r1').checked)
    {
       puntaje ++; 
    }
    if (divQuizParents.querySelector('#p2r2').checked)
    {
       puntaje ++; 
    }
    if (divQuizParents.querySelector('#p3r1').checked)
    {
        puntaje ++; 
    }
  if (divQuizParents.querySelector('#p4r3').checked)
    {
        puntaje ++; 
    }
     if (divQuizParents.querySelector('#p5r2').checked)
    {
        puntaje ++; 
    }
     if (divQuizParents.querySelector('#p6r2').checked)
    {
        puntaje ++; 
    }
     if (divQuizParents.querySelector('#p7r2').checked)
    {
        puntaje ++; 
    }
     if (divQuizParents.querySelector('#p8r3').checked)
    {
        puntaje ++; 
    }
     if (divQuizParents.querySelector('#p9r3').checked)
    {
        puntaje ++; 
    }


     alert("tu puntaje es " + puntaje); 

  }
  buttonQuiz.addEventListener("click", showSelect);

 
  return divQuizParents;
};
