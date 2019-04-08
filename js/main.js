
    const imageData = [
        {
            name: '01.jpg',
            title: 'Hay Bales',
            caption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
        },
        {
            name: '02.jpg',
            title: 'Lake',
            caption: 'The lake was so calm today. We had a great view of the snow on the mountains from here.'
        },
        {
            name: '03.jpg',
            title: 'Canyon',
            caption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
        },
        {
            name: '04.jpg',
            title: 'Iceberg',
            caption: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today. '
        },
        {
            name: '05.jpg',
            title: 'Desert',
            caption: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
        },
        {
            name: '06.jpg',
            title: 'Fall',
            caption: 'Fall is coming, I love when the leaves on the trees start to change color.'
        },
        {
            name: '07.jpg',
            title: 'Plantation',
            caption: 'I drove past this plantation yesterday, everything is so green!'
        },
        {
            name: '08.jpg',
            title: 'Dunes',
            caption: 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
        },
        {
            name: '09.jpg',
            title: 'Countryside Lane',
            caption: 'We enjoyed a quiet stroll down this countryside lane. '
        },
        {
            name: '10.jpg',
            title: 'Sunset',
            caption: 'Sunset at the coast! The sky turned a lovely shade of orange.'
        },
        {
            name: '11.jpg',
            title: 'Cave',
            caption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
        },
        {
            name: '12.jpg',
            title: 'Bluebells',
            caption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
        }
    ];

const $searchBox = '<input class="searchInput" max="500"  id="search-gallery" type="text"  placeholder="Search(16pt)">';
$('.searchBox').append($searchBox);

insertImages(imageData);

$('.searchInput').on('input', function(){
    let newImageList = [];
    let value = $('.searchInput').val().toLowerCase();
    let caption;
    let title;

    for(var i = 0; i < imageData.length; i++ ){
     caption = imageData[i].caption.toLowerCase()
     title = imageData[i].title.toLowerCase()
      
        if(caption.indexOf(value) > -1 || title.indexOf(value) > -1){
            newImageList.push(imageData[i]);
           //git insertImages(newImageList);  
                  
        }
        
    }
    insertImages(newImageList); 
    console.log(`input value: ${value}`); 
  });


function insertImages(images) {
    $('.gallery').text('');
    for(var i = 0; i < images.length; i++){
        if (images.length !== 0){
             $('.gallery')
             .append(`<div class="slideShow"><a href="photos/${images[i].name}" data-lightbox="gallery"  data-name="${images[i].title}" data-title="${images[i].caption}"><img src="photos/thumbnails/${images[i].name}" alt="${images[i].title}"></a></div> `);
        }
    }
}
