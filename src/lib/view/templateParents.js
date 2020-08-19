export const parents = () => {
  const divParents = document.createElement('div');

  const viewParents = `
  <div> <h1>ZONA PAPÁS</h1></div>
 
  `

  divParents.innerHTML = viewParents;

  return divParents;
}