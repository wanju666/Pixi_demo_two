// test //
let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

PIXI.utils.sayHello(type)


// 使用别名 //
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

// PIXI实例 //
let app = new Application({
    width: 512,
    height: 512
});

document.body.appendChild(app.view);

loader
    .add("images/animals.json")
    .load(setup);

let id;

function setup() {
    // 定义id使用于多个函数 //
    id = resources["images/animals.json"].textures;

    //The cat
    let cat = new Sprite(id["cat.png"]);
    cat.position.set(16, 16);

    //The hedgehog
    let hedgehog = new Sprite(id["hedgehog.png"]);
    hedgehog.position.set(32, 32);

    //The tiger
    let tiger = new Sprite(id["tiger.png"]);
    tiger.position.set(64, 64);

    let animals = new Container();

    animals.addChild(cat);
    animals.addChild(hedgehog);
    animals.addChild(tiger);

    app.stage.addChild(animals);
}













