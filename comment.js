// Initialize like count and comment
var likeCount = 0;
var comment = '';

// Load likes and comments from the server on page load
window.onload = function () {
    fetchData();
};

// Function to handle 'Like' button click
function like() {
    likeCount++;
    updateLikeDisplay();
    saveData();
}

// Function to handle 'Comment' button click
function addComment() {
    comment = prompt("Please enter your comment:");
    updateCommentDisplay();
    saveData();
}

// Function to update the like display
function updateLikeDisplay() {
    var likeElement = document.querySelector('.fa.fa-thumbs-up');
    if (likeElement) {
        likeElement.textContent = ' ' + likeCount ;
    }
}

// Function to update the comment display
function updateCommentDisplay() {
    var commentElement = document.querySelector('.commenttext');
    if (commentElement) {
        commentElement.textContent = comment;
    }
}

// Function to fetch data from the server
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        if (data) {
            likeCount = data.likeCount || 0;
            comment = data.comment || '';
            updateLikeDisplay();
            updateCommentDisplay();
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to save data to the server
async function saveData() {
    try {
        const response = await fetch('http://localhost:3000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ likeCount, comment }),
        });
        const result = await response.json();
        if (result.success) {
            console.log('Data saved successfully.');
        } else {
            console.error('Failed to save data.');
        }
    } catch (error) {
        console.error('Error saving data:', error);
    }
}