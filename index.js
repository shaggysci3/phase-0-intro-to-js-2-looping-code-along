const gifts = ["Guadalupe", "Ollie", "aki"];

/*function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}
*/

function writeCards(cards, scissor) {
  const newCards = [];

  for (let i = 0; i < cards.length; i++) {
    newCards.push(`Thank you, ${cards[i]}, for the wonderful ${scissor} gift!`);
  }

  return newCards;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(totalNumbers) {
  console.log(totalNumbers); // Log the initial value first

  while (totalNumbers > 0) {
    totalNumbers -= 1;
    console.log(totalNumbers);
  }
}