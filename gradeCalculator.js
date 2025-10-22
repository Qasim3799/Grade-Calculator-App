function getGrade(event){
    event.preventDefault();

    let score = document.getElementById('score').value;
    const display = document.getElementById('display');
    let grade;

    if(score >= 70  && score <= 100){
        grade = 'A';
    }
    else if(score >= 60 && score < 70){
        grade = 'B';
    }
    else if(score >= 50 && score < 60){
        grade = 'C'
    }
    else if(score >= 45 && score < 50){
        grade = 'D'
    }
    else if(score >= 40 && score < 45){
        grade = 'E'
    }
    else if(score >= 0 && score < 40){
        grade = 'F'
    }
    else{
        grade = 'Score can only be between 0 - 100'
    }

    display.innerText = `Output: ${grade}`


}

