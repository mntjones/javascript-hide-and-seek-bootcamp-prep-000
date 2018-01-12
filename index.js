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
<<<<<<< HEAD
  const rank =  document.querySelectorAll("#grand-node div")
  var count = 0
  var child = rank[count]
 
  
  while (child) {
    child = rank[count]
    count += 1
  }
  return rank[count-2]
=======
  const rank =  document.getElementById("grand-node").querySelector("div div div div")
  
  return rank
>>>>>>> ba449d653174b5d3b68af7f1d79d10fa1006d1fe
}
