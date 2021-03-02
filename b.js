const style=`
    .question{
        color:back;
        font-size: larger;
        width: 50%;
    }
    .co, .in{
        
        border: 1px solid #49C598;
        border-left-width:5px;
        width:50%;
        margin: 10px 0px;
        cursor:pointer;
    }
    .co:hover, .in:hover{
        background-color: red;
    }
   
`

$.getJSON("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple", function(data){
    console.log(data);
   
    var results=data.results;
    let game = document.getElementById("quizz")
    game.innerHTML = '';
    for (let i = 0; i < results.length; i++) {
        let re=results[i];
        let html = `
        <style>${style}</style>
        <div class="question">
            Question ${i+1}: ${re.question}
        </div>
        <div id="answer">
        <div class="co" id="co" onclick="check('co')" onclick="hide()">
            ${re.correct_answer}
        </div>
        <div class="in" onclick="check('in')">
            ${re.incorrect_answers[0]}
        </div>
        <div class="in" onclick="check('in')">
            ${re.incorrect_answers[1]}
        </div>
        <div class="in" onclick="check('in')">
            ${re.incorrect_answers[2]}
        </div>
        </div>
        `
        game.innerHTML+=html;
        
    }
   
});
