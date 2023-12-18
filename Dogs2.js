fetch('./Dogs2.json')
  .then(response => response.json())
  .then(dogs => {
    
    // Create a new div for each dog
    const DogBox = document.createElement('div');
    DogBox.id = 'dog';
    
    dogs.forEach(dog => {
        //load up the div with smaller divs to display
      const DogRow = document.createElement('div');
      DogRow.className = 'IndivDog'

      DogRow.innerHTML = `
        <h2>${dog.dogname}</h2>
        <p>${CanPlayWithOthers(dog)}</p>
        <p>${appropriateWeight(dog)}</p>
        <p>${getDogYears(dog)}</p>
        `;

        //add the info from the small div to the bigger div
      DogBox.appendChild(DogRow);
      
     

      console.log(dog.dogname)
      console.log(CanPlayWithOthers(dog));
      console.log(appropriateWeight(dog));
      console.log(getDogYears(dog));

   });
   
   document.body.appendChild(DogBox);

  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  function CanPlayWithOthers(dog) {
    switch(dog.neutered){
      case true: 
        return`${dog.dogname} the ${dog.breed} can play with other dogs because they are fixed.`;
        break;
      case false:
        return `${dog.dogname} the ${dog.breed} should not play with other dogs because they are not fixed.`;
        break;
      //default:
        //return `${dog.dogname} should consider getting fixed if they want to play with other dogs.`;
    }
  }
  function appropriateWeight(dog) {
    if(dog.weight > 30) {
        return `${dog.dogname} is a large dog.`
        }else{
        return  `${dog.dogname}  is a small dog.`
};
  }
  function getDogYears(dog) {    
    return `${dog.dogname} is ${(new Date().getFullYear() - new Date(dog.birthday).getFullYear()) * 7} years old in dog years.`; 
  }



  

  