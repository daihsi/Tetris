//canvasタグのidを取得
let canvas = document.getElementById("canvas");
//二次元グラフィックのコンテキストを取得
let context = canvas.getContext("2d");

//ブロックのサイズ（ピクセル）
const BLOCK_SIZE = 30;
//テトロミノのサイズ
const TETRO_SIZE = 4;

//多次元配列の定義
let tetro = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

//繰り返して、多次元配列の値が1に該当すれば条件分岐に入る
for (let y = 0; y < TETRO_SIZE; y++) {
  for (let x = 0; x < TETRO_SIZE; x++) {
    if (tetro[y][x] == 1) {
      let px = x * BLOCK_SIZE;
      let py = y * BLOCK_SIZE;
      context.fillStyle = "red";
      context.fillRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
      context.strokeStyle = "black";
      context.strokeRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
    }
  }
}