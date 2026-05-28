(function () {
  var app = document.getElementById('legal-content');
  var source = document.body.getAttribute('data-document-path');

  fetch(source, { cache: 'no-store' })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Impossibile caricare il documento.');
      }
      return response.text();
    })
    .then(function (markdown) {
      var html = window.marked.parse(markdown);
      app.innerHTML = window.DOMPurify.sanitize(html);
    })
    .catch(function () {
      app.innerHTML = '<p class="legal-state">Documento non disponibile in questo momento.</p>';
    });
})();
