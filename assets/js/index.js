document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previeni il comportamento predefinito di submit del form
    checkValidityAndRedirect();
});
function checkValidityAndRedirect() {
    // Verifica la validità del checkbox
    var checkbox = document.getElementById("iPromise");
    if (checkbox.checkValidity()) {
       window.location.href = 'question-page.html'
    } else {
        // Altrimenti, mostra un messaggio di errore o esegui un'altra azione
        alert("Devi accettare i termini e le condizioni per continuare.");
    }
}