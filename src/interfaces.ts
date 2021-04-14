// Función para mostrar una Fotografía
export {}

enum PhotoOrientation  {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
                  date: ${picture.date},
                  orientation: ${picture.orientation}]`);

}

let myPic = {
    title: 'Test Title',
    date: '2021-04',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2021-04',
    orientation: PhotoOrientation.Portrait,
    //extra: 'test' // Error
});