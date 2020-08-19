export const parents = () => {
  const divParents = document.createElement('div');

  const viewParents = `
  <div>
    <div class="templateParents">
      <h2>Módulo Introductorio</h2>
      <h3>Tema 1: ¿Qué está pasando?</h3>
      <a href="./Doc/M1/HH_GanemosleAlVirus_PDF_M1_T1.pdf" download="">Descargar Material </a>
      <h3>Tema 2: ¿Qué es el covid-19?</h3>
      <a href="./Doc/M1/HH_GanemosleAlVirus_PDF_M1_T2.pdf" download="">Descargar Material </a>
    </div>
    <div class="templateParents">  
      <h2>Módulo 2: "Cultivando Nuestras Emociones"</h2>
      <h3>Tema 1: Cuidando las relaciones en cuarentena</h3>
      <a href="./Doc/M2/HH_GanemosleAlVirus_PDF_M2_T1.pdf/" download="">Descargar Material </a>
      <h3>Tema 2: ¿Cómo cambia la mente de los niños y niñas?</h3>
      <a href="./Doc/M2/HH_GanemosleAlVirus_PDF_M2_T2.pdf" download="">Descargar Material </a>
      <h3>Tema 3: Psicohigiene: El cuidado de uno mismo y de los demás</h3>
      <a href="./Doc/M2/HH_GanemosleAlVirus_PDF_M2_T3.pdf/" download="">Descargar Material </a>
    </div>
    <div class="templateParents"> 
      <h2>Módulo 3: "Cultivando Nuestro Cuerpo"</h2>
      <h3>Alimentos</h3>
      <a href=".Doc/M3/HootieHoo_GAV_M3_Contenido.docx" download="">Descargar Material </a>
    </div>
</div>
  `

  divParents.innerHTML = viewParents;

  return divParents;
}