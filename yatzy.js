let values = []
let throwCount = 0;

function getValues() {
    return values;
}

function setValues(intArray) {
    values = array
}

function getThrowCounter() {
    return throwCount
}

function resetThrowCount() {
    throwCount = 0;
}

function throwDice(booleanArray) {
    for (let i = 0; i < array.length; i++) {
        if (booleanArray[i] == false) {
            values[i] = Math.floor(Math.random * 6 + 1)
        }
    }
    throwCount++;
}

function getResults() {
    let results = []
    for (let i = 0; i <= 5; i++) {
        results[i] = sameValuePoints(i+1);   
    }
    results[6] = onePairPoints();
	results[7] = twoPairPoints();
	results[8] = threeSamePoints();
	results[9] = fourSamePoints();
	results[10] = fullHousePoints();
	results[11] = smallStraightPoints();
	results[12] = largeStraightPoints();
	results[13] = chancePoints();
	results[14] = yatzyPoints();

	return results;
}

function frequency() {
    let frequencies = []
    for (let i = 0; i < values.length; i++) {
        let kast = values[i];
        frequencies[kast] = frequencies[kast] + 1;
    }
    return frequencies;
}

function sameValuePoints(value) {
    let frequencies = frequency();
    return value * frequencies[value];
}

function onePairPoints() {
    let frequencies = frequency();
    let point = 0;
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] >= 2) {
            point = i * 2;
        }
    }
    return point;
}

function twoPairPoints() {
    let frequencies = frequency();
    let point = 0;
    let pairs = 0;
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] >= 2) {
            point += i * 2;
            pairs++;
        }
    }
    if (pairs == 1) {
        point = 0;
    }
    return point;
}

function threeSamePoints() {
    let frequencies = frequency();
    let point = 0;
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] >= 3) {
            point = i * 3;
        }
    }
    return point;
}

function fourSamePoints() {
    let frequencies = frequency();
    let point = 0;
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] >= 4) {
            point = i * 4;
        }
    }
    return point;
}

function fullHousePoints() {
    let frequencies = frequency();
    let point = 0;
    let booleanTwoEquals = false;
    let booleanThreeEquals = false;
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] == 3) {
            point = i * 3;
            booleanThreeEquals = true;
        }
        else if (frequencies[i] == 2) {
            point += i * 2;
            booleanTwoEquals = true;
        }
    }
    if (!booleanTwoEquals || !booleanThreeEquals){
        point = 0;
    }
    return point;
}

function smallStraightPoints() {
		let frequencies = frequency();
		let point = 15;
		for (let i = 1; i < frequencies.length-1; i++) {
			if (frequencies[i] != 1){
				point = 0;
			}
		}
		return point;
}

function largeStraightPoints() {
    let frequencies = frequency();
    let point = 20;
    for (let i = 2; i < frequencies.length; i++) {
        if (frequencies[i]!=1){
            point=0;
        }
    }
    return point;
}

function chancePoints() {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}

function yatzyPoints() {
    let frequencies = frequency();
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        if (frequencies[i]==5) {
            sum = 50;
        }
    }
    return sum;
}