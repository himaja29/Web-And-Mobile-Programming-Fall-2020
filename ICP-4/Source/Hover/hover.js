function upDate(previewPic) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image

    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').src= "url('"+previewPic.src+"')";

     */
    console.log(previewPic);
    $('#image').css('background-image', 'url(' + previewPic.src + ')');
    $('#image').html(previewPic.alt);
}

function unDo() {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */
   /* document.getElementById('image').style.backgroundImage = "";
    // var element = document.getElementById("fillImage");
    // element.parentNode.removeChild(element);
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
*/
    $('#image').css('background-image','none');
    $('#image').html("Hover over an image below to display here.");
}


