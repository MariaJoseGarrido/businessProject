export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <h1>HOOTIEHOO</h1>
  `

  divHome.innerHTML = viewHome;

  return divHome;
}