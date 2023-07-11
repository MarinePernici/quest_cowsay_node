const userInfo = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hi, I'm ${userInfo.name} from ${userInfo.campus}!`,
    e: "Oo",
    T: "U ",
  })
);
