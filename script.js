// Data for all the stories
const stories = {
    'koala': {
        title: "1. The Sleepy Tree!",
        image: "image-koala.png", // Replace with a cartoon koala image
        text: "The Koala is very sleepy. They sleep for 20 hours a day! Why? Their food makes them feel a bit drunk. They are always sleepy!",
        text_simple: [
            "The Koala is very sleepy.",
            "They sleep for 20 hours a day!",
            "Why? Their food makes them feel a bit drunk.",
            "They are always sleepy!"
        ]
    },
    'quokka': {
        title: "2. The Happy Island!",
        image: "image-quokka.png", // Replace with a smiling quokka image
        text: "This small animal is the Quokka. It is the happiest animal in the world! It always looks like it is smiling. People love to take Quokka Selfies!",
        text_simple: [
            "This small animal is the Quokka.",
            "It is the happiest animal in the world!",
            "It always looks like it is smiling.",
            "People love to take Quokka Selfies!"
        ]
    },
    'croc': {
        title: "3. The Croc Pool!",
        image: "image-croc.png", // Replace with a funny cartoon crocodile image
        text: "Crocodiles hide in rivers in the north. The signs say 'No Swimming. Crocs!' But sometimes, a big crocodile walks into a person's swimming pool. A man calls the police! There is a monster in his backyard!",
        text_simple: [
            "Crocodiles hide in rivers in the north.",
            "The signs say 'No Swimming. Crocs!'",
            "Sometimes, a crocodile walks into a person's pool.",
            "A man calls the police: 'Monster in my backyard!'"
        ]
    },
    'slang': {
        title: "4. The Short-Word City!",
        image: "image-slang.png", // Replace with an image of someone saying 'G'day'
        text: "Australians speak English, but it is weird. They do not say 'Hello, how are you?' They say: 'G'day, mate!' Everything is shorter and smaller in Australia. A barbecue is a 'Barbie!'",
        text_simple: [
            "Australians speak English, but it is weird.",
            "They do not say 'Hello, how are you?'",
            "They say: 'G'day, mate!'",
            "Everything is shorter here. A barbecue is a 'Barbie!'"
        ]
    },
    'sydney': {
        title: "5. The Coathanger View!",
        image: "image-sydney.png", // Replace with an image of the Opera House and Bridge
        text: "Sydney has two big famous things. The Opera House looks like giant white shells. The Sydney Harbour Bridge is so big, people call it 'The Coathanger.' You can climb the Coathanger! What a funny clothes rack!",
        text_simple: [
            "Sydney has two big famous things.",
            "The Opera House looks like giant white shells.",
            "The big bridge is called 'The Coathanger.'",
            "You can climb the Coathanger! What a funny clothes rack!"
        ]
    },
    'christmas': {
        title: "6. The Hot Christmas Beach!",
        image: "image-santa.png", // Replace with a funny image of Santa on a beach
        text: "In Australia, Christmas is in summer, and it is hot! Santa does not wear a red coat. He wears a swimming suit! Australians eat their Christmas lunch outside, next to the pool. Singing about a 'White Christmas' is very funny!",
        text_simple: [
            "Christmas is in summer, and it is hot!",
            "Santa does not wear a red coat.",
            "He wears a swimming suit or shorts!",
            "Australians eat lunch next to the pool."
        ]
    },
    'desert': {
        title: "7. The Boomerang Desert!",
        image: "image-boomerang.png", // Replace with an image of a boomerang
        text: "The Boomerang is a special wooden stick. Ancient people used it to hunt. The funny part? You throw it, and it magically flies all the way back to you! Just watch out it doesn't hit your head!",
        text_simple: [
            "The Boomerang is a special wooden stick.",
            "Ancient people used it to hunt.",
            "The funny part is: you throw it...",
            "...and it magically flies all the way back to you!"
        ]
    }
};

// Get the DOM elements
const popup = document.getElementById('story-popup');
const title = document.getElementById('story-title');
const image = document.getElementById('story-image');
const text = document.getElementById('story-text');
const closeButton = document.getElementById('close-popup');
const hotspots = document.querySelectorAll('.hotspot');

// Function to show the popup with the correct story
function showStory(locationKey) {
    const story = stories[locationKey];
    if (story) {
        // Update the content
        title.textContent = story.title;
        image.src = story.image;

        // Use the simple sentence structure for elementary level
        const simpleTextHTML = story.text_simple.map(sentence => `<p>${sentence}</p>`).join('');
        text.innerHTML = simpleTextHTML;

        // Show the popup
        popup.classList.remove('hidden');
    }
}

// Add event listeners to all hotspots
hotspots.forEach(spot => {
    spot.addEventListener('click', function() {
        const locationKey = this.getAttribute('data-location');
        showStory(locationKey);
    });
});

// Add event listener to close button
closeButton.addEventListener('click', function() {
    popup.classList.add('hidden');
});