function preload()
{

} 

function setup()
{
    canva = createCanvas(600,480);
    canva.position(120,300);
    video = createCapture(VIDEO);
    video.hide()
    color = "";
    label = "";
    greet = "";

}

function draw()
{
    image(video,0,80,400,480);
    fill("green")
    stroke("green")
    rect(30, 70, 370, 55);
    rect(345, 123, 55, 355);
    rect(0, 70, 55, 410);
    rect(0, 430, 370, 400);
    tint(color);
    
}

function take_image()
{
    label = document.getElementById("name").value;
 save(label);
 document.getElementById("show").innerHTML = "Happy Birthday " + label;
 document.getElementById("show").style.display = "block";
}

function change_fillter()
{
    color = document.getElementById("color").value;
}