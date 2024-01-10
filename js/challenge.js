document.addEventListener('DOMContentLoaded', function () {
   //DOM Elements
    const timerDisplay = document.getElementById('timerDisplay');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const likeBtn = document.getElementById('likeBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const restartBtn = document.getElementById('restartBtn');
    const commentBox = document.getElementById('commentBox');
    const commentList = document.getElementById('commentList');
//Timer and counter variables
    let timer; //Variable to store the timer
    let count = 0; //Counter for the timer
    let likeCount = 0; //Counter for the likes
    let isPaused = false; //Flag to track whether the timer is paused

    //To start the timer function
    function startTimer() {
        timer = setInterval(() => {
            if (!isPaused) {
                count++;
                timerDisplay.textContent = count;
            }
        }, 1000);
    }

    //Event listeners for increment, decrement, and like buttons
    incrementBtn.addEventListener('click', function () {
        count++;
        timerDisplay.textContent = count;
    });

    decrementBtn.addEventListener('click', function () {
        count--;
        timerDisplay.textContent = count;
    });

    likeBtn.addEventListener('click', function () {
        likeCount++;
        timerDisplay.insertAdjacentHTML('beforebegin', `<span>❤️: ${likeCount}</span>`);
    });

    //Event listener for the pause button
    pauseBtn.addEventListener('click', function () {
        //Toggle the pause state
        isPaused = !isPaused;
        //Update the pause button text
        pauseBtn.textContent = isPaused ? 'resume' : 'pause';

        //Pause or resume the timer based on the state
        if (isPaused) {
            clearInterval(timer);
        } else {
            startTimer();
        }
    });

      // Event listener for the restart button
    restartBtn.addEventListener('click', function () {
        // Reset the timer, count, and likeCount
        clearInterval(timer);
        count = 0;
        timerDisplay.textContent = count;
        // Reset the pause state and button text
        isPaused = false;
        pauseBtn.textContent = 'pause';
        //Start the timer
        startTimer();
    });
      // Event listener for the comment box
    commentBox.addEventListener('keypress', function (event) {
        // Check if the 'Enter' key is pressed
        if (event.key === 'Enter') {
            // Create a new comment element and append it to the comment list
            const comment = document.createElement('li');
            comment.textContent = commentBox.value;
            commentList.appendChild(comment);
            //Clear the comment box
            commentBox.value = '';
        }
    });
     // Start the timer when the page is loaded
    startTimer();
});