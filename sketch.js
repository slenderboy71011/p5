var x = 480;
var y = 707.5;
var h = 85;
var w = 85;
var a = 10;
var x2 = 1440;
var y2 = 707.5;
var h2 = 85;
var w2 = 85;
var a2 = 10;
var s1 = 0;
var s2 = 0;
var coinX;
var coinY;
var timer = 60;
var timer2;
var bonus = 1;
var start = 0;
var speed = 15;
var gravity = 2.5;
var jumpforce = 35;
var countdown = 3;
var point1 = 0;
var point2 = 0;

function setup() {
  createCanvas(1920, 937);
  const c = color(255);
  stroke(c);
  fill(c);
  strokeWeight(3);
  coinX = random(50, 1865);
  coinY = random(475, 700);
  randomcolor = random(1, 3);
}

function draw() {
  textAlign(CENTER);
  if (start == 1) {
    if (countdown >= 0) {
      background(0);

      rect(0, 750, 1920, 187);

      ellipse(x, y, w, h);
      ellipse(x2, y2, w2, h2);

      rect(width/2 - 25, 400, 50, 275);

      rect(width/2 - 175, 250, 350, 10);

      rect(width/4 - 175, 525, 350, 20);
      rect(width/4*3 - 175, 525, 350, 20);

      //TAGS

      push();
      textSize(40);
      fill(0, 0, 255);
      text('P1', x, y - 75);
      fill(255, 0, 0);
      text('P2', x2, y2 - 75);
      pop();

      //SCORE

      push();
      textSize(50);
      stroke(0, 0, 255);
      strokeWeight(5);
      text('SCORE P1', 1920/3 - 200, 80);
      stroke(255, 0, 0);
      text('SCORE P2', 1920/3*2 + 200, 80);
      pop();

      push();
      textSize(45);
      text(s1, 1920/3 - 200, 180);
      text(s2, 1920/3*2 + 200, 180);
      pop();

      //TIMER

      push();
      textSize(70);
      text(timer, width/2, 120);
      pop();

      if (frameCount % 60 == 0 && countdown >= 0) {
        countdown--;
      }

      if (countdown > 0) {
        push();
        textSize(300);
        stroke(0);
        text(countdown, width/2, height/2);
        pop();
      }
    }

    if (timer > 0 && countdown <= 0) {

      background(0);

      rect(0, 750, 1920, 187);

      ellipse(x, y, w, h);
      ellipse(x2, y2, w2, h2);

      rect(width/2 - 25, 400, 50, 275);

      rect(width/2 - 175, 250, 350, 10);

      rect(width/4 - 175, 525, 350, 20);
      rect(width/4*3 - 175, 525, 350, 20);

      //TAGS

      push();
      textSize(40);
      fill(0, 0, 255);
      text('P1', x, y - 75);
      fill(255, 0, 0);
      text('P2', x2, y2 - 75);
      pop();

      //SCORE

      push();
      textSize(50);
      stroke(0, 0, 255);
      strokeWeight(5);
      text('SCORE P1', 1920/3 - 200, 80);
      stroke(255, 0, 0);
      text('SCORE P2', 1920/3*2 + 200, 80);
      pop();

      push();
      textSize(45);
      text(s1, 1920/3 - 200, 180);
      text(s2, 1920/3*2 + 200, 180);
      pop();

      //TIMER

      push();
      textSize(70);
      text(timer, width/2, 120);
      pop();

      // P1

      y = y + a;

      a = a + gravity;

      if (y >= 707.5) {
        a = 0;
        y = 707.5;
      }

      if (y <= 42.5) {
        y = 42.5;
        a = 1;
      }

      if (x > 1877.5) {
        x = 1877.5;
      }

      if (x < 42.5) {
        x = 42.5;
      }

      if (keyIsDown(UP_ARROW)) {
        if (y > 700) {
          if (y <= 707.5) {
            a = -jumpforce;
          }
        }
      }

      if (keyIsDown(DOWN_ARROW)) {
        if (y > 700) {
          if (y <= 707.5) {
            h = 50;
            w = 110;
            y = 723;

            if (keyIsDown(UP_ARROW)) {
              a = 0;
            }
          }
        }
      } else {
        h = 85;
        w = 85;
      }

      if (keyIsDown(LEFT_ARROW)) {
        if (x <= width/2 + 70 && x >= width/2 - 69 && y <= 722 && y >= 400) {
            x = width/2 + 70;
        } else {
          x = x - speed;
        }
      }

      if (keyIsDown(RIGHT_ARROW)) {
        if (x >= width/2 - 70 && x <= width/2 + 69 && y <= 722 && y >= 400) {
          x = width/2 - 70;
        } else {
          x = x + speed;
        }
      }

      //P2

      y2 = y2 + a2;

      a2 = a2 + gravity;

      if (y2 >= 707.5) {
        a2 = 0;
        y2 = 707.5;
      }

      if (y2 <= 42.5) {
        y2 = 42.5;
        a2 = 1;
      }

      if (x2 > 1877.5) {
        x2 = 1877.5;
      }

      if (x2 < 42.5) {
        x2 = 42.5;
      }

      if (keyIsDown(87)) {
        if (y2 > 700) {
          if (y2 <= 707.5) {
            a2 = -jumpforce;
          }
        }
      }

      if (keyIsDown(83)) {
        if (y2 > 700) {
          if (y2 <= 707.5) {
            h2 = 50;
            w2 = 110;
            y2 = 723;

            if (keyIsDown(87)) {
              a2 = 0;
            }
          }
        }
      } else {
        h2 = 85;
        w2 = 85;
      }

      if (keyIsDown(65)) {
        if (x2 <= width/2 + 70 && x2 >= width/2 - 69 && y2 <= 722 && y2 >= 400) {
          x2 = width/2 + 70;
        } else {
          x2 = x2 - speed;
        }
      }

      if (keyIsDown(68)) {
        if (x2 >= width/2 - 70 && x2 <= width/2 + 69 && y2 <= 722 && y2 >= 400) {
          x2 = width/2 - 70;
        } else {
          x2 = x2 + speed;
        }
      }

      //COIN

      if (bonus < 5 || bonus > 6) {
        push();
        fill(255, 255, 0);
        stroke(0);
        strokeWeight(1);
        rect(coinX, coinY, 20, 20);
        pop();

      } else {
        push();
        fill(255, 0, 0);
        stroke(0);
        strokeWeight(1);
        rect(coinX, coinY, 50, 50);
        pop();
      }

      if (x > coinX - 35 && x < coinX + 55 && y > coinY - 35 && y < coinY + 55 && (bonus < 5 || bonus > 6)) {
        s1++
        coinX = random(50, 1865);
        coinY = random(260, 700);
        bonus = random(1, 10);
        point1 = 1;
      }

      if (x2 > coinX - 35 && x2 < coinX + 55 && y2 > coinY - 35 && y2 < coinY + 55 && (bonus < 5 || bonus > 6)) {
        s2++
        coinX = random(50, 1865);
        coinY = random(260, 700);
        bonus = random(1, 10);
        point2 = 1;
      }

      if (x > coinX - 35 && x < coinX + 85 && y > coinY - 35 && y < coinY + 85) {
        if (bonus >= 5 && bonus <= 6) {
          s1 += 5
          coinX = random(50, 1865);
          coinY = random(260, 700);
          bonus = random(1, 10);
          point1 = 5;
        }
      }

      if (x2 > coinX - 35 && x2 < coinX + 85 && y2 > coinY - 35 && y2 < coinY + 85) {
        if (bonus >= 5 && bonus <= 6) {
          s2 += 5
          coinX = random(50, 1865);
          coinY = random(260, 700);
          bonus = random(1, 10);
          point2 = 5;
        }
      }

      while (coinX > width/2 - 60 && coinX < width/2 + 35 && coinY > 320 && coinY < 685) {
        coinX = random(50, 1865);
        coinY = random(260, 700);
      }

      //TIMER
      if (frameCount % 60 == 0 && timer > 0) {
        timer--;
      }

      //OBSTACLES
      //barrier
      if (x >= width/2 - 69 && x <= width/2 + 69 && y >= 700) {
        h = 50;
        w = 110;
        y = 723;
      }

      if (x2 >= width/2 - 69 && x2 <= width/2 + 69 && y2 >= 700) {
        h2 = 50;
        w2 = 110;
        y2 = 723;
      }

      if (x >= width/2 - 55 && x <= width/2 + 55 && y >= 337.5 && y <= 375) {
        a = 0;
        y = 357.5;
        if (keyIsDown(UP_ARROW)) {
          a = -jumpforce;
        }
        if (keyIsDown(DOWN_ARROW)) {
          h = 50;
          w = 110;
          y = 375;
        }
      }

      if (x2 >= width/2 - 55 && x2 <= width/2 + 55 && y2 >= 337.5 && y2 <= 372.5) {
        a2 = 0;
        y2 = 357.5;
        if (keyIsDown(87)) {
          a2 = -jumpforce;
        }
      }

      //vine
      if (x >= width/2 - 175 && x <= width/2 + 175 && y >= 250 && y <= 300) {
        a = 0;
        y = 295;
        if (keyIsDown(DOWN_ARROW)) {
          a = 6;
        }
      }

      if (x2 >= width/2 - 175 && x2 <= width/2 + 175 && y2 >= 250 && y2 <= 300) {
        a2 = 0;
        y2 = 295;
        if (keyIsDown(83)) {
          a2 = 6;
        }
      }

      //flying platforms
      if (x >= width/4 - 200 && x <= width/4 + 200 && y >= 457.5 && y <= 482.5) {
        a = 0;
        y = 482.5;
        if (keyIsDown(UP_ARROW)) {
          a = -jumpforce;
        }
        if (keyIsDown(DOWN_ARROW)) {
          a = 5;
        }
      }

      if (x >= width/4*3 - 200 && x <= width/4*3 + 200 && y >= 457.5 && y <= 482.5) {
        a = 0;
        y = 482.5;
        if (keyIsDown(UP_ARROW)) {
          a = -jumpforce;
        }
        if (keyIsDown(DOWN_ARROW)) {
          a = 5;
        }
      }

      if (x2 >= width/4 - 200 && x2 <= width/4 + 200 && y2 >= 457.5 && y2 <= 482.5) {
        a2 = 0;
        y2 = 482.5;
        if (keyIsDown(87)) {
          a2 = -jumpforce;
        }
        if (keyIsDown(83)) {
          a2 = 5;
        }
      }

      if (x2 >= width/4*3 - 200 && x2 <= width/4*3 + 200 && y2 >= 457.5 && y2 <= 482.5) {
        a2 = 0;
        y2 = 482.5;
        if (keyIsDown(87)) {
          a2 = -jumpforce;
        }
        if (keyIsDown(83)) {
          a2 = 5;
        }
      }

      //point1S
      if (point1 > 0 && point1 <= 1) {
        push();
        textSize(45);
        fill(0, 0, 255);
        stroke(255);
        text("+1", width/3 - 125, 180);
        pop();
        if (frameCount % 60 == 0 && point1 >= 0 && point1 <= 1) {
          point1--;
        }
      }

      if (point2 > 0 && point2 <= 1) {
        push();
        textSize(45);
        fill(255, 0, 0);
        stroke(255);
        text("+1", width/3*2 + 275, 180);
        pop();
        if (frameCount % 60 == 0 && point2 >= 0 && point2 <= 1) {
          point2--;
        }
      }

      if (point1 > 1 && point1 <= 5) {
        push();
        textSize(45);
        fill(0, 0, 255);
        stroke(255);
        text("+5", width/3 - 125, 180);
        pop();
        if (frameCount % 60 == 0 && point1 >= 0 && point1 <= 5) {
          point1 -= 5;
        }
      }

      if (point2 > 1 && point2 <= 5) {
        push();
        textSize(45);
        fill(255, 0, 0);
        stroke(255);
        text("+5", width/3*2 + 275, 180);
        pop();
        if (frameCount % 60 == 0 && point1 >= 0 && point1 <= 5) {
          point2 -= 5;
        }
      }
    }

    if (timer == 0) {
      textSize(50);
      push();
      fill(0);
      text("GAME OVER", width/3, 840);
      pop();

      //WINNER
      if (s1 > s2) {
        text("WINNER", width/3 - 200, 300);
        text("LOSER", width/3*2 + 200, 300);
      } else if (s1 < s2) {
        text("LOSER", width/3 - 200, 300);
        text("WINNER", width/3*2 + 200, 300);
      } else {
        text("DRAW", width/2, 200);
      }

      //RESTART
      push();
      fill(0);
      text("RESTART", width/3*2, 840);
      pop();

      //MENU
      push();
      fill(0);
      text("MENU", width/2, 880);
      pop();
    }

  } else {

    //MENU
    background(0);

    textSize(200);
    text("START", width/2, height/2);

    textSize(75);
    text("TIMER", width/2, height/4*3);
    text("< " + timer + " >", width/2, height/4*3 + 100);

    textSize(50);
    text("SPEED", width/4 - 50, height/3*2 - 50);
    text("< " + speed + " >", width/4 - 50, height/3*2 + 30);
  }

  if (countdown == 0) {
    push();
    textSize(300);
    stroke(0);
    text("GO!", width/2, height/2);
    pop();
  }
}

function mousePressed() {
  if (timer == 0) {
    if (mouseX > 1167 && mouseY > 800 && mouseX < 1400 && mouseY < 840) {
      s1 = 0;
      s2 = 0;
      timer = timer2;
      x = width/4;
      y = 707.5;
      a = 0;
      x2 = width/4*3;
      y2 = 707.5;
      a2 = 0;
      coinX = random(50, 1865);
      coinY = random(260, 700);
      bonus = random(1, 10);
      countdown = 3;
    }

    if (mouseX > 890 && mouseY > 840 && mouseX < 1030 && mouseY < 880) {
      start = 0;
      s1 = 0;
      s2 = 0;
      timer = timer2;
      x = width/4;
      y = 707.5;
      a = 0;
      x2 = width/4*3;
      y2 = 707.5;
      a2 = 0;
      coinX = random(50, 1865);
      coinY = random(260, 700);
      bonus = random(1, 10);
      countdown = 3;
    }
  }

  if (start == 0) {
    if (mouseX > 650 && mouseY > 320 && mouseX < 1300 && mouseY < 480) {
      start = 1;
      timer2 = timer;
    }

    if (mouseX > 850 && mouseY > 750 && mouseX < 900 && mouseY < 800) {
      timer--;
      if (timer == 0) {
        timer++;
      }
    } else if (mouseX > 1020 && mouseY > 750 && mouseX < 1070 && mouseY < 800) {
      timer++;
    }

    if (mouseX > 360 && mouseY > 620 && mouseX < 390 && mouseY < 650) {
      speed--;
      if (speed == 0) {
        speed--;
      }
    } else if (mouseX > 470 && mouseY > 620 && mouseX < 500 && mouseY < 650) {
      speed++;
      if (speed == 0) {
        speed++;
      }
    }
  }
}
