import React from 'react'

export function fetchNews(fakeNews){
    console.log('presend')
    return dispatch => {
        return fetch(`https://safe-depths-39797.herokuapp.com`, {method: 'GET', mode: 'cors'})
        .then( (response) => {
            console.log('==========================');
            console.log(response);
        });
    }    
}


// http://www.darrenbeck.co.uk/nodejs/react/reacttutorial-part3/