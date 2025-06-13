console.log('JS connected')

function loadContent(id,file){
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;

})
    .catch(e => {
        console.log('Failed to fetch file')
    })
}






loadContent('hero','components/hero.html')
loadContent('about','components/about.html')
loadContent('projects','components/projects.html')
loadContent('contact','components/contact.html')