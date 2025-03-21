const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
]

// The graph
const adjacencyList = new Map()

// Add node 
function addNode(airport) {
    adjacencyList.set(airport, [])
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

// Create the Graph
airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)





// GRAPH SEARCH or TRAVERSAL
// for both time complexity is expressed as O(V + E) / O(Nodes + Edges) or in other words time performance of the algo will scale linear O(N) 

////////////////////////////////
// 1. BFS
////////////////////////////////


// takes a starting node as an argument
function bfs(start) {
    // set is an arr where all the values are unique
    const visited = new Set()

    const queue = [start]

    while (queue.length > 0){
        // grab the first item in the array
        const airport = queue.shift() // mutates the original array
        // grab all the edges(destinations) for airport node in the graph
        const destinations = adjacencyList.get(airport)

        for (const destination of destinations) {

            if (destination === 'BKK') {
                console.log(destination, 'found it!')
            }

            if (!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }
        }
    }
}

// bfs('PHX') // BFS good for finding all the possible routes






////////////////////////////////
// 1. DFS
////////////////////////////////

function dfs(start, visited = new Set(), steps = 0) {
    console.log(start)

    visited.add(start)
    steps += 1
    const destinations = adjacencyList.get(start)

    for (const destination of destinations) {

        if (destination === 'BKK') {
            console.log(`DFS found BKK in ${steps} steps`)
            return
        }

        if (!visited.has(destination)) {
            dfs(destination, visited, steps)
        }
    }
}

dfs('PHX')