const repoOwner = 'llextv';
const repoName = 'CT-PF-plugins';
const folder = 'scenario';

let allPlugins = [];



const getAllPlugin = () => {
    const element = document.getElementById('scenarioList');
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folder}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(file => {
        let newName = file.name.replace(".json", "");
        newName = newName.replaceAll("_", " ");
        allPlugins.push({completeName: file.name, name: newName, link: file.download_url});
        let newElement = element.appendChild(document.createElement("li"))
        let newLinkElement = newElement.appendChild(document.createElement("a"))
        newLinkElement.innerText = newName;
        newLinkElement.href = file.download_url;
      });
      
    })
    .catch(err => console.error('Erreur:', err));
};

const search = () => {
  let searchBoxElement = document.getElementById("searched_box");
  const searchElement = document.getElementById("search-input");
  let search = searchElement.value;

  while (searchBoxElement.firstChild) {
    searchBoxElement.removeChild(searchBoxElement.lastChild);
  };

  allPlugins.forEach((value, index) =>{
    if(value.name.toLowerCase().startsWith(search.toLowerCase()) || value.completeName.toLowerCase().startsWith(search.toLowerCase())){
      let newElement = searchBoxElement.appendChild(document.createElement("li"));
      let newLinkElement = newElement.appendChild(document.createElement("a"));
      
      newLinkElement.innerText = value.name;
      newLinkElement.href = value.link;
    };
  });
};


document.getElementById("searched_box").addEventListener("change", () => {search()});