
    const imageData = [
        {
            name: '01.jpg',
            category: 'Hay Bales',
            caption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
        },
        {
            name: '02.jpg',
            category: 'Lake',
            caption: 'The lake was so calm today. We had a great view of the snow on the mountains from here.'
        },
        {
            name: '03.jpg',
            category: 'Canyon',
            caption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
        },
        {
            name: '04.jpg',
            category: 'Iceberg',
            caption: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today. '
        },
        {
            name: '05.jpg',
            category: 'Desert',
            caption: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
        },
        {
            name: '06.jpg',
            category: 'Fall',
            caption: 'Fall is coming, I love when the leaves on the trees start to change color.'
        },
        {
            name: '07.jpg',
            category: 'Plantation',
            caption: 'I drove past this plantation yesterday, everything is so green!'
        },
        {
            name: '08.jpg',
            category: 'Dunes',
            caption: 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
        },
        {
            name: '09.jpg',
            category: 'Countryside Lane',
            caption: 'We enjoyed a quiet stroll down this countryside lane. '
        },
        {
            name: '10.jpg',
            category: 'Sunset',
            caption: 'Sunset at the coast! The sky turned a lovely shade of orange.'
        },
        {
            name: '11.jpg',
            category: 'Cave',
            caption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
        },
        {
            name: '12.jpg',
            category: 'Bluebells',
            caption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
        }
    ];

const $searchBox = '<input class="searchInput" type="text"  placeholder="Search(16pt)">';
$('.searchBox').append($searchBox);

//insertImages(imageData) 

$('.searchInput').on('input',function(){
    var newImageList = [];
    const value = $('.searchInput').val();

    

    for(var i = 0; i < imageData.length; i++ ){
      
        if(imageData[i].caption.indexOf(value) !== -1 || imageData[i].caption.indexOf(value) !== -1){
            newImageList.push(imageData[i]);
            console.log(imageData[i].caption);
            
            insertImages(newImageList);
           
        }
    }
  });


function insertImages(images) {
    console.log(images);

    $('.imageGallery').text('');

    for(var i = 0; i < images.length; i++){
        if (images.length !== 0){
            $('.imageGallery').append(`<img src="photos/thumbnails/${images[i].name}" alt="${images[i].name}, ${images[i].category}"> <p>${images[i].category}</p><p>${images[i].caption}</p>`);
        }
       
    }
}

