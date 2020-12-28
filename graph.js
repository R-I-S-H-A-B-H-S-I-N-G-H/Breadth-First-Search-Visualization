class Graph {
	constructor() {
		this.nodes = [];
	}
	addNode(x, y, size) {
		var i = int(y / size);
		var j = int(x / size);
		var res = width / size;
		var neighbour = [];
		if (
			i == 0 ||
			j == 0 ||
			i == (height - size) / size ||
			j == (width - size) / size
		) {
			//left corner up
			if (i == 0 && j == 0) {
				neighbour.push(this.right(i, j, res));
				neighbour.push(this.down(i, j, res));
			}
			//right corner up
			else if (i == 0 && j == (width - size) / size) {
				neighbour.push(this.left(i, j, res));
				neighbour.push(this.down(i, j, res));
			}
			//left corner down
			else if (i == (height - size) / size && j == 0) {
				neighbour.push(this.up(i, j, res));
				neighbour.push(this.right(i, j, res));
			}
			//right corner down
			else if (
				i == int(height - size) / size &&
				j == int(width - size) / size
			) {
				neighbour.push(this.up(i, j, res));
				neighbour.push(this.left(i, j, res));
			}
			//btwn left and right corner up
			else if (i == 0) {
				neighbour.push(this.left(i, j, res));
				neighbour.push(this.right(i, j, res));
				neighbour.push(this.down(i, j, res));
			}
			//btwn left and right corner down
			else if (i == int(height - size) / size) {
				neighbour.push(this.left(i, j, res));
				neighbour.push(this.right(i, j, res));
				neighbour.push(this.up(i, j, res));
			}
		} else {
			neighbour.push(this.left(i, j, res));
			neighbour.push(this.right(i, j, res));
			neighbour.push(this.up(i, j, res));
			neighbour.push(this.down(i, j, res));
		}

		var n = new Node(x, y, size, neighbour);
		this.nodes.push(n);
		return n;
	}

	up(i, j, res) {
		return (i - 1) * res + j;
	}
	down(i, j, res) {
		return (i + 1) * res + j;
	}
	left(i, j, res) {
		return i * res + (j - 1);
	}
	right(i, j, res) {
		return i * res + (j + 1);
	}

	//applying bfs

	bfs(source, destination) {
		this.nodes[source].source = true;
		this.nodes[destination].destination = true;

		var queue = [];
		queue.push(source);
		this.nodes[source].visited = true;
		while (queue.length != 0) {
			var vertex = queue.shift();
			if (vertex == destination) {
				break;
			}
			var edges = this.nodes[vertex].neighbours;
			for (var i = 0; i < edges.length; i++) {
				if (!this.nodes[edges[i]].visited) {
					this.nodes[edges[i]].visited = true;
					queue.push(edges[i]);
				}
			}
		}
	}
}
