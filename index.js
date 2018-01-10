function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n) {
  const rankNum = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  
  for (let i=0; i < rankNum.length; i++) {
    rankNum[i].innerHTML = parseInt(rankNum[i].innerHTML) + n
  }
}

function deepestChild(){
  const rank =  document.querySelectorAll("#grand-node div")
  return rank[3]
}
