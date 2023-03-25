function addBtn() {
  document.getElementById('err').innerHTML = "";

  let text = document.getElementById("Task").value;

  if (text == '') {
    document.getElementById('err').innerHTML = "( Please enter something )"
  } else {

    let box = document.getElementById("myUL")
    let li = document.createElement("li");
    li.textContent = text;
    box.appendChild(li);

    document.getElementById("Task").value = "";

    let x = document.createElement("span");
    x.textContent = "x";
    li.appendChild(x);

  }

  let btn2 = document.querySelector('ul');
  btn2.addEventListener('click',function(e){
    let box = document.getElementById("myUL");
    let li = e.target.parentNode;
    box.removeChild(li);
  })


}