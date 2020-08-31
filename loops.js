var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`HOla, ${estudiante}`);
}
// 1 for
for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//2 for..of
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

/*  Practica en la consola
var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

*/

