function buscaredad (edad) {
    let msg = ''
    if (edad >= '18') {msg='eres mayor de edad'}
    else msg = "no eres mayor de edad"
    return msg
}
console.log(buscaredad)
