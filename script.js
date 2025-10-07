// Data for all the stories
// const stories = {
//     'koala': {
//         id: 5,
//         title: "1. The Sleepy Animal!",
//         image: "koala.jpg", // Replace with a cartoon koala image
//         text: "The Koala is one of our favourite animals. They sleep for 20 hours a day! Why? Their food makes them feel a bit drunk. They are always sleepy!",
//         text_simple: [
//             "The Koala is one of our favourite animals.",
//             "They sleep for 20 hours a day!",
//             "They eat leaves and it makes them feel a bit drunk 🍺🍺🍺",
//             "They are always sleepy!"
//         ]
//     },
//     'quokka': {
//         id: 2,
//         title: "2. The Happy Island!",
//         image: "quokka.jpg", // Replace with a smiling quokka image
//         text: "This small animal is the Quokka. It is the happiest animal in the world! It always looks like it is smiling. People love to take Quokka Selfies!",
//         text_simple: [
//             "This small animal is the Quokka.",
//             "It is the happiest animal in the world!",
//             "It always looks like it is happy.",
//             "Would you take a photo with a Quokka?"
//         ]
//     },
//     'croc': {
//         id: 5,
//         title: "Crocodiles are everywhere",
//         image: "croc.jpg", // Replace with a funny cartoon crocodile image
//         text: "Crocodiles hide in rivers in the north. The signs say 'No Swimming. Crocs!' But sometimes, a big crocodile walks into a person's swimming pool. A man calls the police! There is a monster in his backyard!",
//         text_simple: [
//             "Crocodiles hide in rivers in the north.",
//             "They are usually very friendly",
//             "Sometimes, a crocodile is at the beach"
//         ]
//     },
//     'slang': {
//         id: 6,
//         title: "Australian outfits are weird",
//         image: "mullet.jpg", // Replace with an image of someone saying 'G'day'
//         text: "Australians speak English, but it is weird. They do not say 'Hello, how are you?' They say: 'G'day, mate!' Everything is shorter and smaller in Australia. A barbecue is a 'Barbie!'",
//         text_simple: [
//             "Australians speak English.",
//             "But because it is so hot, we have to shorten the words",
//             "We do not say Good Morning, we say 'G'day'",
//             "Everything is shorter. A barbecue is a 'Barbie!', Avocado is Avo, Afternoon is Arvo"
//         ]
//     },
//     'sydney': {
//         id: 4,
//         title: "Sydney is unique",
//         image: "sydney.jpg", // Replace with an image of the Opera House and Bridge
//         text: "Sydney has two big famous things. The Opera House looks like giant white shells. The Sydney Harbour Bridge is so big, people call it 'The Coathanger.' You can climb the Coathanger! What a funny clothes rack!",
//         text_simple: [
//             "Sydney has two big famous things.",
//             "I live in Sydney and it is the best city in the World",
//             "You can climb the Bridge and watch the sunrise."
//         ]
//     },
//     'christmas': {
//         id: 1,
//         title: "Christmas is Hot",
//         image: "santa.jpg", // Replace with a funny image of Santa on a beach
//         text: "In Australia, Christmas is in summer, and it is hot! Santa does not wear a red coat. He wears a swimming suit! Australians eat their Christmas lunch outside, next to the pool. Singing about a 'White Christmas' is very funny!",
//         text_simple: [
//             "Christmas is in summer, and it is hot!",
//             "Santa does not wear a red coat.",
//             "He wears a swimming suit or shorts!",
//             "Australians play cricket on the beach.."
//         ]
//     },
//     'desert': {
//         id: 3, 
//         title: "The Boomerang Desert!",
//         image: "uluru.jpg", // Replace with an image of a boomerang
//         text: "The Boomerang is a special wooden stick. Ancient people used it to hunt. The funny part? You throw it, and it magically flies all the way back to you! Just watch out it doesn't hit your head!",
//         text_simple: [
//             "Australia has many weird things in nature.",
//             "In the middle of Australia, is a big rock",
//             "There is nothing else nearby.",
//             "It is very sacred for Indigenous pepole"
//         ]
//     }
// };

// Dados de todas as histórias em Português Europeu Elementar
const stories = {
    'koala': {
        id: 4,
        title: "O Animal Dorminhoco!",
        image: "koala.jpg", 
        text: "O Coala é um dos nossos bichos favoritos. Ele dorme 20 horas por dia! Porquê? A comida dele faz com que se sinta meio tonto. Ele está sempre a dormir!",
        text_simple: [
            "O Coala é um dos nossos animais favoritos.",
            "Ele dorme 20 horas por dia!",
            "Ele come folhas e isso deixa-o meio tonto 🍺🍺🍺",
            "Está sempre com sono!"
        ]
    },
    'quokka': {
        id: 2,
        title: "A Ilha Feliz!",
        image: "quokka.jpg", 
        text: "Este bicho pequeno é o Quokka. É o animal mais feliz do mundo! Parece sempre que está a sorrir. As pessoas gostam muito de tirar 'selfies' com o Quokka!",
        text_simple: [
            "Este bicho pequeno é o Quokka.",
            "É o animal mais feliz do mundo!",
            "Estão sempre felizes.",
            "Gostavas de tirar uma foto com um Quokka?"
        ]
    },
    'croc': {
        id: 5,
        title: "Crocodilos estão por todo o lado",
        image: "croc.jpg", 
        text: "Os Crocodilos estão escondidos nos rios, no norte. Os sinais dizem: 'Não Nadem. Crocodilos!' Mas, às vezes, um crocodilo grande entra na piscina de alguém. O homem chama a polícia! Há um monstro no jardim dele!",
        text_simple: [
            "Os Crocodilos escondem-se nos rios, no norte.",
            "Normalmente, são muito simpáticos", 
            "Às vezes, há um crocodilo na praia"
        ]
    },
    'slang': {
        id: 6,
        title: "A maneira de falar australiana é estranha",
        image: "mullet.jpg", 
        text: "Os Australianos falam Inglês, mas é estranho. Não dizem 'Olá, como estás?' Eles dizem: 'G'day, mate!' (Olá, amigo!). Tudo é mais curto na Austrália. Uma churrasqueira é uma 'Barbie'!",
        text_simple: [
            "Os Australianos falam Inglês.",
            "Mas como faz muito calor, eles encurtam as palavras.",
            "Não dizem Bom Dia, dizem 'G'day' (Olá)",
            "Tudo é mais curto. A churrasqueira é 'Barbie!', Abacate é 'Avo', Tarde é 'Arvo'"
        ]
    },
    'sydney': {
        id: 7,
        title: "Sidney é única",
        image: "sydney.jpg", 
        text: "Sidney tem duas coisas grandes e famosas. A Casa da Ópera parece conchas brancas gigantes. A Ponte da Baía é tão grande que as pessoas chamam-lhe 'O Cabide'. Podes subir ao Cabide! Que cabide engraçado!",
        text_simple: [
            "Sidney tem duas coisas grandes e famosas.",
            "Eu moro em Sidney e é a melhor cidade do mundo.",
            "Podes subir à Ponte e ver o nascer do sol."
        ]
    },
    'christmas': {
        id: 1,
        title: "O Natal é Quente",
        image: "santa.jpg", 
        text: "Na Austrália, o Natal é no verão, e está muito calor! O Pai Natal não usa um casaco vermelho. Ele usa um fato de banho! Os Australianos comem o almoço de Natal fora, ao pé da piscina. Cantar sobre um 'Natal Branco' é muito engraçado!",
        text_simple: [
            "O Natal é no verão, e está muito calor!",
            "O Pai Natal não usa um casaco vermelho.",
            "Ele usa um fato de banho ou calções!",
            "Os Australianos jogam críquete na praia."
        ]
    },
    'desert': {
        id: 3, 
        title: "O Deserto Bumerangue!", // Tradução literal de "The Boomerang Desert"
        image: "uluru.jpg", 
        text: "O Bumerangue é um pau de madeira especial. Pessoas antigas usavam-no para caçar. O mais engraçado? Tu atiras, e ele volta, por magia, até ti! Só tens de ter cuidado para não te acertar na cabeça!",
        text_simple: [
            "A Austrália tem muitas coisas estranhas na natureza.",
            "No meio da Austrália, há uma rocha gigante.",
            "Não há mais nada por perto.",
            "É muito importante para as pessoas Indígenas."
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

hotspots.forEach(button => {
    const locationKey = button.getAttribute('data-location');
    if (stories[locationKey]) {
        const storyId = stories[locationKey].id;
        button.textContent = storyId;
    }
});


// Add event listener to close button
closeButton.addEventListener('click', function() {
    popup.classList.add('hidden');
});