var i=0;

function inc() {
  console.log(i);
      i++;
          inc();
}
console.log(inc());
