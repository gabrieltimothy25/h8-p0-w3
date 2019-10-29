function balikString(string) {
    let reversed = ''
    for (var i = (string.length-1); i>=0; i--) {
        reversed += string[i];
    }
    return reversed;
}

//input "hello world!"
//output" !dlrow olleh"
// console.log(balikString('hello world!'))