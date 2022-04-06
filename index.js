console.log("hello world")

//S5: 
 let message = document.querySelector('#message')



//S2:created new function called addMovie
//S2:use query selector to get input and saved to variable inputField
const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input')

//S2: creating HTML for movie list items using creatElement method
//S2: parent element of our movie's title and movie's delete button
const movie = document.createElement('li')
//S2:movie.textContent = addMovie.value

const movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value

//S4: addEventListener to listen for 'click' and run crossOffMovie function
movieTitle.addEventListener('click', (crossOffMovie))

//S2: we’ll need to append the movieTitle span to our movie element. Use the appendChild method on movie, passing in movieTitle to attach the title to its parent
movie.appendChild(movieTitle)

//S3: the addMovie function, after appending the movieTitle to movie, use createElement to create a new button element and save it to a variable called deleteBtn.
const deleteBtn = document.createElement('button')
//S3: Set the textContent of deleteBtn to be the letter X.
deleteBtn.textContent = "x"

//Use addEventListener to listen for a click event on the button and run the deleteMovie function(created later) 
deleteBtn.addEventListener('click',(deleteMovie))

//S3: append deleteBTN to movie element
movie.appendChild(deleteBtn)

//S2: use querySelector to find the ul element that already exists in our HTML and use appendChild to attach the movie element we created to the list.
const ulProperty = document.querySelector('ul')

ulProperty.appendChild(movie)

}

//S2:Finally, outside of your function, use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.
const submit = document.querySelector('form');
submit.addEventListener('submit', (addMovie));

//S3: create new deleteMovie function that takes event param
const deleteMovie = (event) => {
    //event.target.parentNode.remove() to remove the entire list item. JavaScript knows what the target of this event is (the specific delete button that’s clicked) and will only get rid of that one button’s parent (the movie list item that holds the title and button).
    event.target.parentNode.remove()

    //S5: add textContent to message
    message.textContent = 'Movie deleted'

}

//S4: passing in 'checked' class -- class name must include ('') single quotes
const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')

//S5: check if event.target.classList contains checked class
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added back'
    }

}