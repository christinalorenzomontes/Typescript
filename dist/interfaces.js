"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ", \n                  date: " + picture.date + ",\n                  orientation: " + picture.orientation + "]");
}
var myPic = {
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
function generatePicture(config) {
    var pic = { title: 'Default', date: '2021-04' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2021-05' });
console.log('picture', picture);
