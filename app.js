// Write - Your - Code - Here
class SocialNewsProgram {
  constructor() {
    this.links = [];
  }
  add(link) {
    this.links.push(link);
  }
  remove(index) {
    this.links.splice(index - 1, 1);
  }
  show() {
    let s = "";
    for (let i = 0; i < this.links.length; i++) {
      s += i + 1 + ": " + this.links[i] + "\n";
    }
    alert(s);
  }
}
const program = new SocialNewsProgram();
let input = Number(
  prompt(
    "Choose an option: \n0 - Quits\n1 - Show existing links\n2 - Add a link\n3 - Remove a link"
  )
);
while (input != 0) {
  switch (input) {
    case 0:
      break;
    case 1:
      program.show();
      break;
    case 2:
      let link = prompt("Enter the link (title, URL and author)");
      program.add(link);
      break;
    case 3:
      if (program.links.length == 0) {
        alert("No links to be removed yet");
      } else if (program.links.length == 1) {
        program.remove(0);
      } else {
        let index = prompt(
          `Enter the index of the link to be removed (between 1 and ${program.links.length}])`
        );
        program.remove(index - 1);
      }
      break;
    default:
      alert("Invalid input");
  }
  input = Number(
    prompt(
      "Choose an option: \n0 - Quits\n1 - Show existing links\n2 - Add a link\n3 - Remove a link"
    )
  );
}
