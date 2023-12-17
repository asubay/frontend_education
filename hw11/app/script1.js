function greeting(name, place, profession) {
    const message = `Hello, my name is ${name} and I am ${profession} in ${place}.
    And what is your name?`;
    console.log(message);
}

let a = 0;

for (let i = 1; i < 100; i++) {
    if(i%3==0) {  
        ++a;     
        console.log(`${a} x 3 = ${i}`);
    }    
  }

