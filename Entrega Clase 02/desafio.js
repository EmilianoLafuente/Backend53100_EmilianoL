let personas = [{

    id: 1,
    name: "Diego",
    mayorEdad: true,
},
{
    id: 2,
    name: "Laura",
    mayorEdad: true,
},
{
    id: 3,
    name: "Ruben",
    mayorEdad: true,
}
]
//Object.entries
let entries = personas.map(persona => Object.entries(persona))
//console.log(entries);

//Object.keys
let keys = personas.map(persona => Object.keys(persona))
console.log(keys);

//Object.values
let values = personas.map(persona => Object.values(persona))
console.log(values);