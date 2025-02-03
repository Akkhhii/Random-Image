let btn = document.querySelector('#btn');

function generateRandomImages(){
    let images = [
        'https://w7.pngwing.com/pngs/754/586/png-transparent-dragonfly-insect-mosquito-graphy-dragonfly-insects-dragonfly-wings-watercolor-dragonfly-thumbnail.png',
        'https://w7.pngwing.com/pngs/886/862/png-transparent-insect-longhorn-beetle-insect-insects-terrestrial-animal-animal-thumbnail.png',
        'https://w7.pngwing.com/pngs/750/137/png-transparent-ant-insect-bee-insect-image-file-formats-animals-ant-thumbnail.png',
        'https://w7.pngwing.com/pngs/154/675/png-transparent-brown-bee-illustration-western-honey-bee-insect-bee-sting-worker-bee-hornets-insects-honey-bee-animals-insects-thumbnail.png',
        'https://w7.pngwing.com/pngs/754/586/png-transparent-dragonfly-insect-mosquito-graphy-dragonfly-insects-dragonfly-wings-watercolor-dragonfly-thumbnail.png',
    ];

    let randomX = Math.floor(Math.random()*98);
    let randomY = Math.floor(Math.random()*98);
    let roteteImg = Math.floor(Math.random()*360);

    let imgArr = [images[Math.floor(Math.random() * images.length)]]

    console.log(imgArr);

    let img = document.createElement('img');
    img.classList.add('w-[8em]', 'h-[8em]', 'absolute');

    img.setAttribute('src', imgArr);

    img.style.left = randomX+'%'
    img.style.top = randomY+'%'
    img.style.rotate = roteteImg+'deg'
    
    document.body.appendChild(img)
}

btn.addEventListener('click', generateRandomImages);
console.log('Clicked');
