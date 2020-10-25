import * as React from "react";
import "./styles.css";

interface Test{
  arr: number[],
  answer: number
}

export default function App() {
  // слід реалізувати метод
  const mafia= (arr: number[]): number => {
    const arrSum = arr.reduce((acc, el) => acc + el, 0)
    const maxItem = Math.max(...arr)

    return Math.ceil(arrSum / (arr.length - 1))
  }
  
  // вхідні данні для перевірки
  const tests: Test[]  = [
    {arr: [3,2,2],answer: 4}, 
    {arr: [2,2,2,2],answer: 3}, 
    {arr: [9, 7, 7, 8, 8, 7, 8],answer: 9},
    {arr: [13, 12, 10, 13, 13, 14, 10, 10, 12, 12], answer: 14}
  ]

  // функція перевірки
  const isCorrect=(t: Test) => mafia(t.arr)===t.answer

  return (
    <div className="App">
      <div>
      <p>Как-то раз собрались n друзей, чтобы сыграть в «Мафию».</p>
      <p>В каждом раунде игры «Мафия» должен быть назначен ведущий (кто-то один из ребят), остальные [n - 1] человек принимают участие в игре. </p>
      <p>Для каждого человека известно, в каком количестве раундов он хочет принять участие как игрок, а не как ведущий: i-ый человек хочет сыграть [a] раундов. </p>
      <p>Какое минимальное количество раундов игры «Мафия» нужно сыграть, чтобы каждый человек сыграл как минимум столько раундов, сколько хочет?</p>
      <p>arr - i-ое число в списке обозначает количество раундов, которое хочет сыграть i-ый человек</p>
___________________________
      <p>Зібралися n друзів, щоб зіграти в «Мафію».</p>
      <p>У кожному раунді гри «Мафія» повинен бути призначений ведучий (хтось один), решта [n - 1] беруть участь в грі.</p>
      <p>Для кожної людини відомо, в якій кількості раундів він хоче взяти участь як гравець, а не як ведучий: i-ий чоловік хоче зіграти певну кількість раундів.</p>
      <p>Яку мінімальну кількість раундів гри «Мафія» потрібно зіграти, щоб кожний із гравців зіграв як мінімум стільки раундів, скільки він хоче?</p>
      <p>arr - i-е число у масиві позначає кількість раундів, яке хоче зіграти i-ний гравець</p></div>
___________________________     
      <h1>Out:</h1> 
      {tests.map((t, i)=> 
         <div>
           <h3>Case {++i}: {t.arr.join(',')}</h3>
           <div style={{
             color: isCorrect(t) ? 'green' : 'red' 
           }}>
          <div> User answer: {mafia(t.arr)}  </div>
          <div> Correct answer: {t.answer}  </div>
          </div>
      </div>)} 
    </div>
  );
}