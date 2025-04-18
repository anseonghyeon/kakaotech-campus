
let i = 4;

while(i < 100) {
    if(i % 5 == 0) {
        console.log(i);
    }
    i++;
}

i = 0;

do {
    console.log(i);
    i++;
} while(i < 10);

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break
    }
    console.log(i);
}

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}