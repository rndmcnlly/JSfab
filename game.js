
// All game object will include at least these properties.
let baseObject = {
    id: undefined,
    renderer: undefined
};

let spatialAttributes = {
    x: 0,
    y: 0,
    angle: 0,
    scale: 1,
};

let rectObject = {
    ...baseObject,
    ...spatialAttributes,
    renderer: 'render_rect',
    w: 10,
    h: 10,
    color: 'red',
};

let guyObject = {
    ...rectObject,
    renderer: 'render_guy',
    name: 'guy',
    health: 100
};


let elementalTemplate = {
    ...guyObject,
    color: 'pink',
    health: 0
};

let last_id = 0;
let iota = {
    get id() { return last_id++; }
}

let objects = [
    { ...rectObject, ...iota, color: 'blue' },
    { ...guyObject, ...iota, name: 'Adam', health: 14 },
    { ...elementalTemplate, ...iota, name: 'Argon' },
    { ...elementalTemplate, ...iota, name: 'Cobalt' },
    { ...baseObject, ...iota, renderer: 'render_custom', message: 'hello' }
];

objects.forEach((obj) => {
    console.log(`#${obj.id}`);
    if (obj.renderer) {
        console.log('dispatch', obj.renderer, JSON.stringify(obj, null, 2));
    }
    console.log("\n");
});