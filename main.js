var n = [];
var scl = 20;
var res;
var g;
var source = 455;
var destination = 99;
var queue = [];
function setup() {
	queue.push(source);
	g = new Graph();

	// frameRate(20);
	console.log();
	createCanvas(600, 600);
	background(0);
	res = height / scl;
	for (var i = 0; i < res; i++) {
		for (var j = 0; j < res; j++) {
			stroke(0);
			strokeWeight(3);
			n.push(g.addNode(j * scl, i * scl, scl));
		}
	}
	g.nodes[source].source = true;
	g.nodes[destination].destination = true;
	// g.bfs(0, 10);
}

function draw() {
	dBfs(destination);
	for (var i = 0; i < n.length; i++) {
		n[i].show();
		n[i].check();
	}
}

function dBfs(destination) {
	g.nodes[source].visited = true;
	if (queue.length != 0) {
		var vertex = queue.shift();
		if (vertex == destination) {
			parent(destination);
		}
		var edges = g.nodes[vertex].neighbours;
		for (var i = 0; i < edges.length; i++) {
			if (!g.nodes[edges[i]].visited) {
				g.nodes[edges[i]].parent = vertex;
				g.nodes[edges[i]].visited = true;
				queue.push(edges[i]);
			}
		}
	}
}

function parent(destination) {
	console.log('Hello');
	// delayTime(0.1);

	while (destination != null) {
		console.log(destination);
		g.nodes[destination].destination = true;
		destination = g.nodes[destination].parent;
		// delayTime(0.1);
	}

	noLoop();
	return;
}
