let userInput = document.querySelector("#input")
let userOutput = document.querySelector("#output")


const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": "/",
}

const translate = (str) => {

    let charArr = []
    charArr = str.toLowerCase().split("")

    for (let i = 0; i < charArr.length; i++) {

        if (charArr[i] in morse) {
            charArr[i] = morse[charArr[i]]
        }
        else {
            charArr = ["Invalid Input"]
        }

    }
    charArr = charArr.join(" ")
    console.log(charArr)
    return (charArr)
}

const handleInput = (event) => {
    string = event.target.value


    userOutput.innerHTML = translate(string);

}

userInput.addEventListener("input", handleInput)



