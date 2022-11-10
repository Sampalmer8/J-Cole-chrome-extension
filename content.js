let JCole = [
    "https://i.kym-cdn.com/entries/icons/original/000/038/201/jcolecover.jpg",
];


const img = document.getElementsByTagName("img");
for (let i = 0; i< img.length; i++) {
    const randomImg = Math.floor(Math.random() * JCole.length);
    img[i].src = JCole[randomImg];
}