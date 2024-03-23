const quotes = [
  {
    quote: "성공의 비결은 실패에서 실패로 걸어가는 능력에 있다.",
    author: "윈스턴 처칠",
  },
  {
    quote: "우리의 삶은 우리가 생각하는 것만큼만 깊다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "가장 어려운 것은 의문을 일으키는 것이 아니라 그것에 대한 답을 찾는 것이다.",
    author: "블레즈 파스칼",
  },
  {
    quote: "가장 큰 영광은 한 번도 넘어지지 않은 것이 아니라 넘어진 후에 다시 일어난 것이다.",
    author: "넬슨 만델라",
  },
  {
    quote: "우리가 마주하는 도전은 우리의 안에 있다.",
    author: "톰 키퍼",
  },
  {
    quote: "삶은 고난의 연속이다. 그러나 고난을 이겨내는 것이야말로 삶의 가치를 증명하는 것이다.",
    author: "헬렌 켈러",
  },
  {
    quote: "가장 확실한 방법으로 실패하는 것은 모든 사람이 당신에게 좋은 생각을 하라는 것이다.",
    author: "에이브러햄 링컨",
  },
  {
    quote: "일생 동안 한 번의 모험이 없는 삶은 소설 없는 책과 같다.",
    author: "포옹 페르소나",
  },
  {
    quote: "시작하기 위해 이상적인 시간이 없다. 당신의 꿈을 실현하려면 오늘을 이용하라.",
    author: "존 F. 케네디",
  },
  {
    quote: "우리가 가진 것이 얼마나 중요한지가 아니라, 우리가 무엇을 하는가가 중요하다.",
    author: "아리스토텔레스",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;