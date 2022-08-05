import { useSelector, useDispatch } from 'react-redux';
import { beginGame, flippedCards } from './cardSlice';
import { useEffect } from 'react';

window.addEventListener('resize', function trty(){
    
    let windowWidth = window.innerWidth;
    document.getElementById('cards').style.width = `${windowWidth}px`;
    document.getElementById('cards').style.height = `${windowWidth}px`
    let cardArray = document.getElementsByClassName('card')
    for (let y = 0; y < cardArray.length; y++){
        cardArray[y].style.width = `${windowWidth/5}px`
        cardArray[y].style.height = `${windowWidth/5}px`
    }
})
let matches = 0
let attempts = 0
export function resetStats() {
    matches = 0;
    attempts = 0;
}
export function Cards() {
   
    const dispatch = useDispatch();
    const allCards = useSelector(beginGame)
    const chosen = useSelector(flippedCards)
    function looking() {
        if(chosen.length === 2){
            if(chosen[0].color === chosen[1].color){
                console.log('match')
                matches += 1;
                attempts += 1;
                dispatch({
                    type: 'allCards/match',
                    payload1: chosen[0],
                    payload2: chosen[1] 
                })
                
            } else {
                attempts += 1; 
                console.log('no match')
                dispatch({
                    type: 'allCards/reset',
                    payload1: chosen[0],
                    payload2: chosen[1]
                })
            }
        }
    }
   function checkForMatch(){
        if(matches < allCards.length/2){
            setTimeout(looking, 2000)
        }   
        }
    function handleClick(element) {
        console.log(element)
     if(chosen.length < 2){
        let flipTarget = document.getElementById(`card${element.id}`)
        let labelTarget = document.getElementById(`label${element.id}`)
        labelTarget.style.animation = 'disappear .5s'
        flipTarget.style.animation = 'flip .5s'
        
        dispatch({
            type: 'cards/flipCard',
            payload: element.id
        })
        function resetFlip(){
            flipTarget.style.animation = 'none';
            labelTarget.style.animation = 'none'
        }
        setTimeout(resetFlip, 500)
        }
        
        
    }
  // eslint-disable-next-line
    useEffect(() => checkForMatch(), [chosen])
    function createCard(element){
        return (
            
            <div id={'card'+element.id} onClick={() => handleClick(element)} style={{order: element.order, backgroundColor: element.visible === false && element.matched === false ? 'white' : element.color}}className='card'>
                <h1 id={'label'+element.id} >{element.visible === false && element.matched === false ? 'game' : element.color}</h1>
            </div>
        )
    }
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <h1 id='stats'>matches: {matches}/{allCards.length/2} & attempts: {attempts}</h1>
      <div id='cards'>
        
        {allCards.map(element => createCard(element))}
    
      </div>
      </div>
    )
    }

    document.addEventListener('DOMContentLoaded', function resize(){
    
        let windowWidth = window.innerWidth;
        document.getElementById('cards').style.width = `${windowWidth}px`;
        document.getElementById('cards').style.height = `${windowWidth}px`
        let cardArray = document.getElementsByClassName('card')
        for (let y = 0; y < cardArray.length; y++){
            cardArray[y].style.width = `${windowWidth/5}px`
            cardArray[y].style.height = `${windowWidth/5}px`
        }
    })
    