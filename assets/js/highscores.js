var storage = JSON.parse(localStorage.getItem('quizScores'))
var scores = document.getElementById('scores')

if (storage === null) {
    var p = document.createElement('p')
    p.textContent = 'No Scores'

    scores.append(p)
} else {
    scores.textContent = ''

    for(var i = 0; i < storage.length; i++) {
        var h4 = document.createElement('h4')
        h4.textContent = "Initials: " + storage[i].initials + " ------ Score: " + storage[i].score
        scores.append(h4)
    }
}