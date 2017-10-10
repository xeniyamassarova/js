console.log("first task");

var abc = "#";

while (abc.length <= 7) {
	console.log(abc);
	abc = abc + "#";
}

for (var qwe = "#"; qwe.length <= 7; qwe = qwe + "#")
	console.log(qwe);

console.log("second task");

var abc = 1;
while (abc <= 100) {
	if (abc % 3 == 0 && abc % 5 == 0)
		console.log("FizzBuzz");
	else if (abc % 3 ==0) 
		console.log("Fizz");
	else if (abc % 5 == 0)
		console.log("Buzz");
	else {
		console.log(abc);
	}

	abc = abc + 1;
}

console.log("third task");

var abc = "";
var qwe = 8;
for(var x = 0; x < qwe; x = x + 1){
	for(var y = 0; y < qwe; y = y + 1){
		if (x % 2 == 0) {
			if (y % 2 == 0){
				abc = abc + "#";

			} else {
				abc = abc + " ";
			}
		}else{
			if (y % 2 == 0){
				abc = abc + " ";

			} else {
				abc = abc + "#";
			}
		}
		
	}
	abc = abc + "\n";
}
		
console.log(abc);

