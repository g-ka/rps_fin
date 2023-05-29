let randvar = 0;
    /*let score = 
    {
      won: 0,
      tie: 0,
      loss: 0
    };*/

 let score = JSON.parse(localStorage.getItem('score')); 

/*||
  //    {
    //    won: 0,
      //  tie: 0,
        //loss: 0
    //  }*/;
    //console.log(JSON.parse(localStorage.getItem('score')));

    /*if(!score)
    {
      score =
      {
        won: 0,
        tie: 0,
        loss: 0
      }
    }*/
    if(!localStorage.getItem('load'))
    {
      document.querySelector('.js-score').innerHTML = 'Let\'s START, choose your move from above';
    }
    else
    {
      document.querySelector('.js-score').innerHTML = 'CONTINUE.... your previous game by choosing a move';
    }
    
    function result(playermove)
    {
      if(playermove === 'ROCK')
      {
                    if(randvar<(1/3))
                    {
                      score.tie++;
                      //console.log('ROCK(you) vs ROCK(comp) --> TIE');
                      //alert('ROCK(you) vs ROCK(comp) --> TIE');         
                      display('ROCK(you) vs ROCK(comp) \n TIE');
                    }
                    else if(randvar<(2/3))
                    {
                      score.loss++;                     
                      //console.log('ROCK(you) vs PAPER(comp) --> LOSS');
                      //alert('ROCK(you) vs PAPER(comp) --> LOSS');
                      display('ROCK(you) vs PAPER(comp) \n LOSS');
                    }
                    else if(randvar<(1))
                    { 
                      score.won++;                    
                      //console.log('ROCK(you) vs SCISSOR(comp) --> WON');
                      //alert('ROCK(you) vs SCISSOR(comp) --> WON');   
                      display('ROCK(you) vs SCISSOR(comp) \n WON');
                    };
                    localStorage.setItem('score', JSON.stringify(score));
      }
      else if(playermove === 'PAPER')
      {
                   if(randvar<(1/3))
                   {
                    score.won++;
                    //console.log('PAPER(you) vs ROCK(comp) --> WON');
                    //alert('PAPER(you) vs ROCK(comp) --> WON');
                    display('PAPER(you) vs ROCK(comp) \n WON');
                   }
                   else if(randvar<(2/3))
                   {
                    score.tie++;
                    //console.log('PAPER(you) vs PAPER(comp) --> TIE');
                    //alert('PAPER(you) vs PAPER(comp) --> TIE');
                    display('PAPER(you) vs PAPER(comp) \n TIE');
                   }
                   else if(randvar<(1))
                   {
                    score.loss++;
                    //console.log('PAPER(you) vs SCISSOR(comp) --> LOSS');
                    //alert('PAPER(you) vs SCISSOR(comp) --> LOSS');
                    display('PAPER(you) vs SCISSOR(comp) \n LOSS');
                   };
                   localStorage.setItem('score', JSON.stringify(score));
      }
      else if(playermove === 'SCISSOR')
      {
                   if(randvar<(1/3))
                   {
                    score.loss++;
                    //console.log('SCISSOR(you) vs ROCK(comp) --> LOSS');
                    //alert('SCISSOR(you) vs ROCK(comp) --> LOSS');
                    display('SCISSOR(you) vs ROCK(comp) \n LOSS');
                   }
                   else if(randvar<(2/3))
                   {
                    score.won++;
                    //console.log('SCISSOR(you) vs PAPER(comp) --> WON');
                    //alert('SCISSOR(you) vs PAPER(comp) --> WON');
                    display('SCISSOR(you) vs PAPER(comp) \n WON');
                   }
                   else if(randvar<(1))
                   {
                    score.tie++;
                    //console.log('SCISSOR(you) vs SCISSOR(comp) --> TIE');
                    //alert('SCISSOR(you) vs SCISSOR(comp) --> TIE');
                    display('SCISSOR(you) vs SCISSOR(comp) \n TIE');
                   };
                   localStorage.setItem('score', JSON.stringify(score));
      }
    }

    function reset()
    {
      score.won = 0;
      score.tie = 0;
      score.loss = 0;
      //console.log('Reset Successful');
      //alert('Reset Successful');
      localStorage.setItem('score', JSON.stringify(score));
      localStorage.setItem('load','');
      document.querySelector('.js-score').innerHTML = 'RESET SUCCESSFUL';
    }

    function display(statement)
    {
      //console.log(`Won: ${score.won}\nTie: ${score.tie}\nLoss: ${score.loss}`);
      //alert(`Won: ${score.won}\nTie: ${score.tie}\nLoss: ${score.loss}`);
      document.querySelector('.js-score').innerText = `${statement}\nWon: ${score.won}\nTie: ${score.tie}\nLoss: ${score.loss}`;
      localStorage.setItem('load',document.querySelector('.js-score').innerText);
    }
