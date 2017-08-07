function init(){

  //estrelas
  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
  
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  //取整包括min,不包括max
  }

  var estrela = "";
  // var qtdeEstrelas = 500;
  var noite = document.querySelector(".constelacao");
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i < 500; i++) {  //i代表星星的数量,随机添加class和style，利用box-shadow动画使星星闪烁
    estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
    + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
    + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
  }

  noite.innerHTML = estrela;

  //meteoros

  var numeroAleatorio = 5000;  //初始化流星第一次出现时间

  setTimeout(function(){  // 启动流星出现
    carregarMeteoro();
  }, numeroAleatorio);

  function carregarMeteoro(){
    setTimeout(carregarMeteoro, numeroAleatorio);  //循环执行流行插入的函数，使流星不间断出现
    numeroAleatorio = getRandomArbitrary(5000, 10000); //修改下次流星划过的时间
    var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";  //随机添加class 生成行动路径
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;

    setTimeout(function(){
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);  //每个流星只执行一次动画，然后清除
  }

}

window.onload = init;

