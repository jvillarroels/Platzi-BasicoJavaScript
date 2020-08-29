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



