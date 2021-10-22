const linksSocialMedia = {
  github: 'jakeliny',
  youtube: 'jakelinygracielly',
  facebook: 'jonas',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  
  for(let li of socialLinks.children) {
  const social = (li.getAttribute('class'))
  // li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  // alert(li.children[0].href)
  }

}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
  
  // pode usar sem chaves se for um unico argumento
  
  // Arrow Functions
  // para criar funções rapidamente usamos arrow functions
  // com o seguinte padrão ---> argumento => {}
  // com um único argumento, não precisamos do uso de parentêses
  // se houver mais de um argumento ---> (argumento1, argumento2) => {}, fechamos em parentêses
  // e se a função for realizar apenas uma ação, não é necessário chaves
  // basta escrever diretamente ---> argumento => ação

}

getGitHubProfileInfos()