let table;

function preload() {
  table = loadTable('billionaires_edited.csv', 'csv', 'header')
}


function setup() {
 // put setup code here
  createCanvas(800, 800);

  numberOfRows = table.getRowCount();
  numberOfColumns = table.getColumnCount();

  //print(table.getRowCount() + ' total row in the table');
  //print(table.getColumnCount() + ' total columns in the table');

  //noLoop();
}

function draw() {
  background(220);
  fill(0);

  //x and y axis
  line(150, 730, 730, 730);
  line(150, 100, 150, 730);    

  //lables
  textAlign(CENTER);
  textSize(25);
  text('Inherited type vs Total Worth', 400, 50);
  textSize(15);
  text('Inherited Type', 400, 780);

  push();
  let axisy = radians(270);
  translate(20, 180);
  rotate(axisy);
  textSize(15);
  text("Inherited Type", -250, 0);
  textSize(12);
  pop();

  noStroke();
  var x_label = 4;
  for (var n = 0; n < x_label + 1; n += 0.5) {
    text(n, 150 + n*120, 755);
    if (n = 0) {
      stroke(color(0));
      line(150 + n*120, 750, 150 + n*120, 100);
    } else {
      stroke(color(190, 190, 190));
      line(150 + n*120, 750, 150 + n*120, 100);
    }
  }

  let worthValues = [];
  for (var i = 0; i < numberOfRows; i++) {
    //place type
    textSize(12);
    text(table.getString(i, 0), i * 100 + 150, 725);
    //pull numbers
    worthValues[i] = table.getString(i, 1);
    //draw graph
    rect(i * 100 + 125, 700, 50, worthValues[i]*(-115))
  }
  
  //labels on y-axis with tick marks 
  var num_ticks = 10;
  var start = 5.0;

  for(var i = 0; i < num_ticks + 1; i++) {
    line(95, 100 + (60 * i), 105, 100 + (60 * i));
    text(start - (0.5 * i), 80, 100 + (60 * i) + 5);


  }

}