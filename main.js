//canvasタグのidを取得
let canvas = document.getElementById("canvas");
//二次元グラフィックのコンテキストを取得
let context = canvas.getContext("2d");

//テトリスのフィールドサイズ(横サイズ)
const FIELD_W = 10;
//テトリスのフィールドサイズ(縦サイズ)
const FIELD_H = 20;

//ブロックのサイズ（ピクセル）
const BLOCK_SIZE = 30;

//キャンパスサイズ(横300 * 縦600)
const SCREEN_W = BLOCK_SIZE * FIELD_W;
const SCREEN_H = BLOCK_SIZE * FIELD_H;

canvas.width = SCREEN_W;
canvas.height = SCREEN_H;
canvas.style.border = "4px solid #555"

//テトロミノのサイズ
const TETRO_SIZE = 4;

//テトロミノの本体、多次元配列の定義
let tetro = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

//テトロミノの座標
let tetro_x = 0;
let tetro_y = 0;


//フィールド本体
let filed = [];

//初期化の関数
function init() {

  //フィールドのクリア
  for (let y = 0; y < FIELD_H; y++) {
    filed[y] = [];
    for (let x = 0; x < FIELD_W; x++) {
      filed[y][x] = 0;
    }
  }  
}

init();
drawFiled();
drawTetro();

//ブロックを表示する
function drawBlock(x, y) {
  let px = x * BLOCK_SIZE;
  let py = y * BLOCK_SIZE;
  context.fillStyle = "red";
  context.fillRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
  context.strokeStyle = "black";
  context.strokeRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
}

//フィールドを表示する
function drawFiled() {

  context.clearRect(0, 0, SCREEN_W, SCREEN_H);

  //繰り返して、多次元配列の値が1に該当すれば条件分岐に入る
  for (let y = 0; y < FIELD_H; y++) {
    for (let x = 0; x < FIELD_W; x++) {
      if (filed[y][x]) {
        drawBlock(x, y);
      }
    }
  }
}

//テトロミノを表示する
function drawTetro() {

  //繰り返して、多次元配列の値が1に該当すれば条件分岐に入る
  for (let y = 0; y < TETRO_SIZE; y++) {
    for (let x = 0; x < TETRO_SIZE; x++) {
      if (tetro[y][x]) {
        drawBlock(tetro_x + x, tetro_y + y);
      }
    }
  }
}

//キーボードでテトロミノが移動する
document.onkeydown = event => {
  switch (event.code) {
    //左キー
    case "ArrowLeft":
      tetro_x--;
      break;
    //上キー
    case "ArrowUp":
      tetro_y--;
      break;
    //右キー
    case "ArrowRight":
      tetro_x++;
      break;
    //下キー
    case "ArrowDown":
      tetro_y++;
      break;
    //スペース
    case "Space":
      break;
  }
  drawFiled();
  drawTetro();
}