let randvar = 0;

     let score = JSON.parse(localStorage.getItem('score')) ||
                    {
                      won: 0,
                      tie: 0,
                      loss: 0
                    };

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
                      display('ROCK(you) vs ROCK(comp) \n TIE');
                    }
                    else if(randvar<(2/3))
                    {
                      score.loss++;                     
                      display('ROCK(you) vs PAPER(comp) \n LOSS');
                    }
                    else if(randvar<(1))
                    { 
                      score.won++;                       
                      display('ROCK(you) vs SCISSOR(comp) \n WON');
                    };
                    localStorage.setItem('score', JSON.stringify(score));
      }
      else if(playermove === 'PAPER')
      {
                   if(randvar<(1/3))
                   {
                    score.won++;
                    display('PAPER(you) vs ROCK(comp) \n WON');
                   }
                   else if(randvar<(2/3))
                   {
                    score.tie++;
                    display('PAPER(you) vs PAPER(comp) \n TIE');
                   }
                   else if(randvar<(1))
                   {
                    score.loss++;
                    display('PAPER(you) vs SCISSOR(comp) \n LOSS');
                   };
                   localStorage.setItem('score', JSON.stringify(score));
      }
      else if(playermove === 'SCISSOR')
      {
                   if(randvar<(1/3))
                   {
                    score.loss++;
                    display('SCISSOR(you) vs ROCK(comp) \n LOSS');
                   }
                   else if(randvar<(2/3))
                   {
                    score.won++;
                    display('SCISSOR(you) vs PAPER(comp) \n WON');
                   }
                   else if(randvar<(1))
                   {
                    score.tie++;
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
      localStorage.setItem('score', JSON.stringify(score));
      localStorage.setItem('load','');
      document.querySelector('.js-score').innerHTML = 'RESET SUCCESSFUL';
    }

    function display(statement)
    {
      document.querySelector('.js-score').innerText = `${statement}\nWon: ${score.won}\nTie: ${score.tie}\nLoss: ${score.loss}`;
      localStorage.setItem('load',document.querySelector('.js-score').innerText);
    }
