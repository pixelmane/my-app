


const initialState = [{id:1,
                        color: 'blue',
                        visible: false,
                        matched: false,
                        order: Math.floor(Math.random() * 100)},
                        {id: 2,
                        color: 'blue',
                        visible: false,
                        matched: false,
                        order: Math.floor(Math.random() * 100)},
                        {id:3,
                        color: 'yellow',
                        visible: false,
                        matched: false,
                        order: Math.floor(Math.random() * 100)},
                        {id: 4,
                        color: 'yellow',
                        visible: false,
                        matched: false,
                        order: Math.floor(Math.random() * 100)},
                        {id:5,
                        color: 'green',
                        visible: false,
                        matched: false,
                        order: Math.floor(Math.random() * 100)},
                        {id: 6,
                        color: 'green',
                        visible: false,
                        matched: false,
                        order: Math.floor(Math.random() * 100)},
                        {id:7,
                            color: 'brown',
                            visible: false,
                            matched: false,
                            order: Math.floor(Math.random() * 100)},
                            {id: 8,
                            color: 'brown',
                            visible: false,
                            matched: false,
                            order: Math.floor(Math.random() * 100)},
                            {id:9,
                                color: 'pink',
                                visible: false,
                                matched: false,
                                order: Math.floor(Math.random() * 100)},
                                {id: 10,
                                color: 'pink',
                                visible: false,
                                matched: false,
                                order: Math.floor(Math.random() * 100)},
                                {id:11,
                                    color: 'red',
                                    visible: false,
                                    matched: false,
                                    order: Math.floor(Math.random() * 100)},
                                    {id: 12,
                                    color: 'red',
                                    visible: false,
                                    matched: false,
                                    order: Math.floor(Math.random() * 100)},
                                    {id:13,
                                        color: 'purple',
                                        visible: false,
                                        matched: false,
                                        order: Math.floor(Math.random() * 100)},
                                        {id: 14,
                                        color: 'purple',
                                        visible: false,
                                        matched: false,
                                        order: Math.floor(Math.random() * 100)},
                                        {id:15,
                                            color: 'orange',
                                            visible: false,
                                            matched: false,
                                            order: Math.floor(Math.random() * 100)},
                                            {id: 16,
                                            color: 'orange',
                                            visible: false,
                                            matched: false,
                                            order: Math.floor(Math.random() * 100)}]
export const cardReducer = (state = initialState, action) => {
    switch (action.type){
        case 'allCards/restart':
            let mako = [...state];
            for (let n = 0; n < mako.length; n++){
                mako[n] = {...mako[n], visible: false, matched: false, order: Math.floor(Math.random() * 100)}
            }
            return mako
        case 'cards/flipCard':
            let test = [...state];
            for(let i = 0; i < test.length; i++){
                if(test[i].id === action.payload){
                    console.log(test)
                    test[i].visible = true
                } 
                
            }
            return test
        case 'allCards/match':
            let anotherTest = [...state];
            for (let j = 0; j < anotherTest.length; j++){
                if(action.payload1.id === anotherTest[j].id){
                    anotherTest[j] = {...anotherTest[j], visible: false, matched: true}
                }
                if(action.payload2.id === anotherTest[j].id){
                    anotherTest[j] = {...anotherTest[j], visible: false, matched: true}
                }
            }
            return anotherTest;
        case 'allCards/reset':
            let yetAnotherTest = [...state];
            for(let k = 0; k < yetAnotherTest.length; k++){
                if(yetAnotherTest[k].matched === false){
                    yetAnotherTest[k] = {...yetAnotherTest[k], visible: false}
                }
            }
            return yetAnotherTest;
        default:
            return state;
    }
}

export const beginGame = (state) => state.card
export const flippedCards = (state) => state.card.filter(element => element.visible === true)
export const matchedCards = (state) => state.card.filter(element => element.matched ===true)