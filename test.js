// const key = 'eec38f00c2952d05b3ce7ffa12b1e8eb';
// const token = '92d6cf2de2d7a5f619ffeb0f43457eb1a76bbef8547119fa3d50a90493dcf1b6';
// const boardId = 'poqO4b9d';
// const supportBoardId = 'poqO4b9d';
const supportBackLogListId = '5b5aa78b016f973d8b0b2235';
// const supportUrl = `https://api.trello.com/1/board/${supportBoardId}?key=${key}&token=${token}`;
// let myBoards;

// authentication

// var authenticationSuccess = function() {
//   console.log('Successful authentication');
// };


//get the questions from JSON file

function getQuestions(jsonData) {
  return {
    title: jsonData.title,
    link : jsonData.permalink.split("&")[0]
  }
}

let jsonData = ;
let questions = jsonData.posts.map(getQuestions);


var authenticationFailure = function() {
  console.log('Failed authentication');
};
window.Trello.authorize({
  type: 'popup',
  name: 'Test App',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: createCards,
  error: authenticationFailure
});

// create card

function createCard(title, questionLink) {
  let success = function(successMsg) {
    let cardId = successMsg.id;
    addAttachment(cardId, questionLink);
  };

  let error = function(errorMsg) {
    console.log(errorMsg);
  };
   Trello.post(`cards?name=${title}&pos=bottom&idList=${supportBackLogListId}&keepFromSource=all`, success, error);
   // Trello.post(`cards?name=${title}&pos=bottom&idList=5af69cecb4e4327794780d1e&keepFromSource=all`, success, error);
}

// create card attachment

function addAttachment(cardId, questionLink) {
   Trello.post(`cards/${cardId}/attachments?url=${questionLink}`);
}

// create cards

function createCards() {
  // get previous cards from trello list

  let success = function(listCards) {
    let previousCards = listCards.map(function(card) {
      return card.name;
    })
    questions.forEach(function(question) {
      // checking if the card already exists or not

      if(previousCards.indexOf(question.title) < 0) {
        createCard(question.title, question.link);
      }
    })
  }
  let fail = function() {
    console.log("Couldn't fetch data");
  }
  Trello.get(`lists/${supportBackLogListId}/cards?fields=name`, success, fail);

}
