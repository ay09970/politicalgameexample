budgetValues = [];

function preload() {
  table = loadTable("debt.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 600);
  numberOfRows = table.getRowCount();
  numberOfColumns = table.getColumnCount();
}

function draw() {
  background(201,19,27);
  fill(255);
  text('National US Debt',250,20);
  text('2000-2015',275,50);
  text('KEY',0,500);
  text('Values in trillions',0,520);

  for (var i = 0; i < numberOfRows; i++) {
    //place years
    text(table.getString(i, 0), i * 30 + 60, 420);
    //pull numbers
    budgetValues[i] = table.getString(i, 1);
    
       // hit = collidePointRect(mouseX, mouseY, i * 30 + 60, 420 - budgetValues[i]/20, 20, budgetValues[i]/20);
//	if (hit) {
		//fill(0,255,0);
//	} else {
	//	fill (0);
//	}

    //draw graph
    rect(i * 30 + 60, 400 - budgetValues[i]*11.5, 25, budgetValues[i]*11.5)
  }
   //determine highest value
   maxValue=max(budgetValues);
  for (var k=0;k<maxValue;k=k+1){
    text(k,10,420-k*15);
  }

}