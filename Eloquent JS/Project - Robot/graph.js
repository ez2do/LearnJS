"use strict";

const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Post Office",
    "Daria's House-Ernie's House",
    "Ernie's House-Grete's House",
    "Grete's House-Shop",
    "Marketplace-Post Office",
    "Marketplace-Town Hall",
    "Alice's House-Cabin",
    "Bob's House-Town Hall",
    "Daria's House-Town Hall",
    "Grete's House-Farm",
    "Marketplace-Farm",
    "Marketplace-Shop",
    "Shop-Town Hall"
];

function buildGraph(edges){
    let graph = Object.create(null);
    function addEgde(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        }
        else{
            graph[from].push(to);
        }
    }

    for(let [from, to] of edges.map(r => r.split("-"))){
        addEgde(from,to);
        addEgde(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillegeState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }
        else{
            let parcels = this.parcels.map(p => {
                if(p.place != this.place)   return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillegeState(destination, parcels);
        }
    }
}

let first = new VillegeState("Alice's House", [{place: "Alice's House", address: "Town Hall"}]);
console.log(first.place);
console.log(first.parcels);
let next = first.move("Bob's House");
console.log(next.place);
console.log(next.parcels);