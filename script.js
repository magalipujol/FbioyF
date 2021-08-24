
function addWebpage (sectionID, link, linkText, description) {
    var newLink = document.createElement("a")
    newLink.href = link
    newLink.target ="_blank"
    newLink.innerHTML = linkText
    newLink.classList.add("lead")
    document.getElementById(sectionID).appendChild(newLink)
    document.getElementById(sectionID).appendChild(document.createElement('br'))
    
}

for (let section of pages) {
    for (let content of section.contents) {
        addWebpage(section.sectionId, content.link, content.linkText)
    }
}
