class Node {
	constructor(x, y, size, neighbour) {
		// this.i = int(y / size);
		// this.j = int(x / size);
		this.destination = false;
		this.x = x;
		this.y = y;
		this.wall = false;
		this.size = size;
		this.neighbours = neighbour;
		this.parent = null;
		this.visited = false;
		this.source = false;
	}
	show() {
		if (this.source) {
			fill(0);
		} else if (this.destination) {
			fill(255, 0, 0);
		} else if (this.visited) {
			fill(0, 255, 0);
		} else if (this.wall) {
			fill(0);
		} else {
			fill(255);
		}
		rect(this.x, this.y, this.size, this.size);
	}
	check() {
		// console.log(mouseX, mouseY, this.x, this.y);
		if (
			mouseX < this.x + this.size &&
			mouseY < this.y + this.size &&
			mouseX > this.x &&
			mouseY > this.y
		) {
			this.wall = true;
		} else {
			this.wall = false;
		}
	}
}
