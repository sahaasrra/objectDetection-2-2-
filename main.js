video = "";
function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
}
function draw()
{
    image(video,0,0,480,380);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = 'status : Detecting objects';
    input = document.getElementById("input").value; 
    
}
function modelLoaded()
{
    console.log(modelLoaded);
    status = true;
}