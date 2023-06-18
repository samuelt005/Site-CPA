// =============================================================================
// SCRIPT PARA INJETAR HTMLS COMPONENTIZADOS
// =============================================================================
document.querySelectorAll('include-src').forEach(element => {
    const src = element.getAttribute('src')
    fetch(src).then(response => response.text())
               .then(text => element.insertAdjacentHTML('afterend', text))
  })