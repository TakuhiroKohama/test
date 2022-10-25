const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション２ ',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHER２',
      'スーパーマリオブラザーズ３ ',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER２'

  }, {
    question: 'ファイナルファンタジーIVの主人公の名前は？',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'

  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length; 

//クイズの問題文、選択肢を定義
const setQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  //ポインタ
  let buttonIndex = 0;

  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }

}

setQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    setQuiz();

  } else {
    window.alert('終了！あなたの正解数は' + score + '問です！');

  }
}

//ボタンをクリックしたら正誤判定
let handlerIndex = 0 ;

while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  })
  handlerIndex++;
}

