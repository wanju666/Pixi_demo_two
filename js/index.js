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
    height: 512,
    backgroundColor: 0x1099bb
});

document.body.appendChild(app.view);

// **************//
// 绘制形状初始化 //
// *************//

// 矩形 //
let rectangle = new PIXI.Graphics();
rectangle.beginFill(0x66ccff);
rectangle.lineStyle(4, 0x0000ff);
rectangle.drawRect(20, 20, 100, 100);
rectangle.endFill();
app.stage.addChild(rectangle);

// 圆形 //
let circle = new PIXI.Graphics();
// circle.beginFill(0x66ccff);
circle.lineStyle(4, 0x0000ff);
circle.drawCircle(200, 200, 32);
circle.endFill();
app.stage.addChild(circle);

// 椭圆 //
let ellipse = new PIXI.Graphics();
ellipse.beginFill(0x66ccff);
ellipse.lineStyle(4, 0x0000ff);
ellipse.drawEllipse(300, 300, 50, 20);
ellipse.endFill();
app.stage.addChild(ellipse);

// 圆角矩形//
let roundRect = new PIXI.Graphics();
roundRect.beginFill(0x66ccff);
roundRect.lineStyle(4, 0x0000ff);
roundRect.drawRoundedRect(380, 380, 100, 100, 10);
roundRect.endFill();
app.stage.addChild(roundRect); 

// 线段 //
let line = new PIXI.Graphics();
line.lineStyle(4, 0x66ccff);
line.moveTo(0, 10);
line.lineTo(512, 10);
// line.position.set(32, 32);
app.stage.addChild(line);

// 多边形 //
let triangle = new PIXI.Graphics();
triangle.beginFill(0x66ccff);
triangle.lineStyle(4, 0x0000ff);
triangle.drawPolygon([
    -32, 64,
    32, 64,
    0, 0,
    -32, 64
]);
triangle.endFill;
triangle.position.set(100, 300);
app.stage.addChild(triangle);


// *********//
// 显示文本 //
// *******//
let style = new PIXI.TextStyle({
    fontFamily: "宋体",
    fontSize: 36,
    fill: "red",
    stroke: "yellow",
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "blue",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
});

let message = new PIXI.Text("Hello Pixi!", style);

message.position.set(300, 100);

app.stage.addChild(message);

message.text = "Hello treedom!";

message.style = {
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'],
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 100,
    align: "center"
};










