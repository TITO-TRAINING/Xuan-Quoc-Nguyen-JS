let string = "";
let count = 1;
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 4; j++) {
    if (count % 2 != 0) {
      string = " # # # #";
    } else if (count % 2 == 0) {
      string = "# # # #";
    }
  }
  count++;
  console.log(string + "\n");
  string = "";
}
