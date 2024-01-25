function theme() {
    console.log("asdf")
    const selectedColor = document.getElementById("theme").value;

    let buttons = document.getElementsByTagName("button");
    console.log(buttons);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = selectedColor;
    }
}
