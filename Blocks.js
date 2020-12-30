class Blocks{
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            density: 1,
            friction: 1,
            isStatic: false
          }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.color = color(random(0, 225), random(0, 225), random(0, 225))

        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        push();
        fill(this.color);
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    }
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    rope.fly();
}