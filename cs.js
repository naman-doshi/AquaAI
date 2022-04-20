function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

sleep(3000).then(() => {
  var counter = { var: 0 };
  var tal = document.getElementById("cx1");

  TweenMax.to(counter, 1, {
    var: 1600000,
    onUpdate: function () {
      tal.innerHTML = numberWithCommas(Math.ceil(counter.var));
    },
    ease: Circ.easeOut,
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});
