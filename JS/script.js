let currentQuestion = 0;
let score = 0;
let incorrect = 0;
function startQuiz() {
    $('.start').on('click', function(event) {
        $('.start').remove();
        $('.handel').remove();
        event.preventDefault();
        $('.hide').toggle();
        showQuestion();
    });
}

function showQuestion() {
    $('#question-num').text(currentQuestion+1);
    let html =
        `<h3 class="question">${STORE[currentQuestion].question}</h3>
        <div class="answers">`;

    for(let i=0; i< STORE[currentQuestion].answers.length; i++){
        html += `<button class="btn" id="${i}">${STORE[currentQuestion].answers[i]}</button>`
    }
    
    html += `</div>`;
    
    $('.question-card').html(html);
}

function checkAnswer(answer){

    if(parseInt(answer) === STORE[currentQuestion].correctAnswer){
        
        score++;
    }
    else {
        incorrect++;
    }



    $('#amount-correct').text(score);
    $('#amount-wrong').text(incorrect);

    currentQuestion++;

    if(currentQuestion >= STORE.length){
        showSummary();
    } else {
        showQuestion();
    }

}



//next question function

    //question incriment

    //correct/incorrect incriment

//reset quiz function

$('.question-card').on('click','.btn', e=>{
    $('.selected').removeClass('selected');
    $(e.target).addClass('selected');
});

$('.nxt-btn').click(e=>{
    if($('.selected').length){
        const answer = $('.selected').attr('id');
        checkAnswer(answer);
    } else {
        alert('Please select an answer');
    }
});







function runtheQuiz() {
    startQuiz();
}

$(runtheQuiz);

