function problem1() {
    var output = []
    var inputArray = prompt("Enter your input").split(',')
    for (var i = 0; i < inputArray.length; i++) {
        var a, b, temp = 0;
        no = Number(inputArray[i])
        b = no;
        while (no > 0) {
            a = no % 10;
            no = parseInt(no / 10);
            temp = temp * 10 + a;
        }
        if (temp == b) {
            output.push(b)

        } else {
            function permut(string) {
                if (string.length < 2) return string;

                var permutations = [];
                for (var i = 0; i < string.length; i++) {
                    var char = string[i];

                    if (string.indexOf(char) != i)
                        continue;

                    var remainingString = string.slice(0, i) + string.slice(i + 1, string
                        .length);
                    for (var subPermutation of permut(remainingString))
                        permutations.push(char + subPermutation)
                }
                return permutations;
            }

            var allArray = permut(inputArray[i])
            var flag = 0;
            for (var j = 0; j < allArray.length; j++) {
                var a, b, temp = 0;
                no = Number(allArray[j])
                b = no;
                while (no > 0) {
                    a = no % 10;
                    no = parseInt(no / 10);
                    temp = temp * 10 + a;
                }
                if (temp == b) {
                    flag = 1;
                }
            }
            if (flag) {
                output.push(inputArray[i])
            }
        }

    }

    var finalOut = output.length > 0 ? output : "[]"
    console.log(finalOut)
}