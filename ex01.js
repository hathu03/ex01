function getQuestion() {
    let value  = document.getElementById('question').value;
    if (value == 'ECMAScript') {
        alert('Right!');
    } else {
        alert("You don't know? ECMAScript!");
    }
}
