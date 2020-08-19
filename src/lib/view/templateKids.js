export const kids = () => {
  const divKids = document.createElement('div');

  const viewKids = `
  <div> <h1>ZONA KIDS!</h1>
  <p>amigo puma espuma</p>
  </div>
  `

  divKids.innerHTML = viewKids;

  return divKids;
}