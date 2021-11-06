/*jshint esversion: 6 */


const cfa = {

};

// 0 HELPER FUNCTIONS

// 0.0001 Yield

cfa.yield = (a,b) => {
    return b/a - 1;
};

// 0.1 Average - average(array)

cfa.average = (array) =>{
    let sum = 0;
    array.forEach(element => {
        sum +=element;
    });
    return sum/array.length;
};


// 0.2 Array parse to float

cfa.float_array = array => {
    return array.map(element => {
        return parseFloat(element);
    });
};

// 0.3 Sum of array

cfa.sum = array => {
    const reducer = (accumulator, current) =>{
        return (accumulator + current);
    };

    return array.reduce(reducer, 0);
};

// 0.4 Sort array descending

cfa.sort_desc = (array) => {
    let array_copy = array.slice()
    return array_copy.sort((a,b) => {
        return b-a;
    });
};

// 0.5 Extent

cfa.extent = (array) => {
	let array_sorted = cfa.sort_desc(array);

	return {
        min: array_sorted[array_sorted.length-1], max: array_sorted[0]
    };
};

// 0.5.1 MAX

cfa.max = (array) => {
    return cfa.extent(array).max
}

// 0.5.2 MIN

cfa.min = (array) => {
    return cfa.extent(array).min
}

// 0.6 Range

cfa.range = (array) => {
	return cfa.extent(array).max - cfa.extent(array).min;
};

// 0.7 k days yield array

cfa.yield_array = (array, days) => {
	let yield_arr = new Array();

	for (let i=0; i<array.length-days; i++) {
		yield_arr[i] = array[i+days]/array[i]-1;
	}
	return yield_arr;
}

// 0.8 Rolling function with callback
cfa.rolling = (array, days, callback) =>{
	let output = new Array();

	for (let i=0; i<array.length-days; i++) {
		output[i] = callback(array[i], array[i+days]);
	}

	return output;
}



// 1. TIME VALUE OF MONEY FUNCTIONS

// 1.1 Future value

cfa.fv = (pv, r, n, m) => {
    if (r>1) 
    console.log('Are you sure that the r is sooo high?');
 return (pv*Math.pow((1+r/m), n*m));
};


// 1.2 Present value

cfa.pv = (fv,r,n,m) => {
    if (r>1) 
    console.log('Are you sure that the r is sooo high?');
    return (fv/Math.pow((1+r/m), n*m));
};

// 1.3 Continous compounding

cfa.fv_continous = (pv, r, n) => {
    if (r>1) console.log('Are you sure that the r is sooo high?')
    return (pv * Math.pow(Math.E, r*n));
}

// 1.4 Effective Annual Rate

cfa.ear = (r,m) => {
    if (r>1) console.log('Are you sure that the r is sooo high?')
    return Math.pow(1+(r/m), m)-1
}

// 1.5 Continous Effective Annual Rate

cfa.ear_continous = (r) => {
    if (r>1) console.log('Are you sure that the r is sooo high?')
    return Math.pow(Math.E, r)-1
}

// 1.6 Future Value of Ordinary Annuity
cfa.fv_annuity_ordinary = (a,r,n) => {
    if (r>1) console.log('Are you sure that the r is sooo high?')
    return a*(Math.pow(1+r, n)-1)/r
}

// 1.7 Present Value of Ordinary Annuity page 319

cfa.pv_annuity_ordinary = (a,r,n) => {
    if (r>1) console.log('Are you sure that the r is sooo high?')
    return a/r * (1-Math.pow(1+r, -n))
}



// 1.8 Future Value of Unequal Cash Flows

cfa.fv_unequal_cf = (array, r) => {
    for (let i=0; i<array.length; i++) {
        array[i] = array[i] * Math.pow(1+r, array.length-i-1)
    }
    return cfa.sum(array)
}

// 1.9 Present Value of Unequal Cash Flows

cfa.pv_unequal_cf = (array, r) => {
    for (let i=0; i<array.length; i++) {
        array[i] = array[i] * Math.pow(1+r, i*(-1)-1)
    }
    return cfa.sum(array)
}

// 1.10 Present Value of Perpetuity

cfa.pv_perpetuity = (a, r) => {
    return a/r
}

// 1.11 Net Present Value

cfa.npv = (array, r) => {
    for (let i=0; i<array.length; i++) {
        array[i] = array[i]/Math.pow(1+r, i)
    }
    return cfa.sum(array)
}

// 1.12 Internal Rate of Return - slabo dziala

cfa.irr = (array) => {
    
    let rArray =[];
    let bottom = 0.01
    let step = 0.000001;

    for (let j = 0; j < 100000; j++) {
        let sum = 0;
        let r = bottom + step *j;
        for (let i = 0; i < array.length; i++) {
            
            sum = sum + array[i] / (1 + r)**i;
            
        }; 
        rArray.push({value: sum, rate: r});


    };

    let plusArray = rArray.filter( (element)=> {
        return element.value > 0 
    } )

    

    return plusArray[plusArray.length-1];

    
    


    
}

// 1.13 XIRR

// 1.14 Median

cfa.median = (array) => {
    if (array.length%2 != 0) {
        return cfa.sort_desc(array)[Math.floor(array.length/2)]
    }
    return (cfa.sort_desc(array)[Math.floor(array.length/2)]+ cfa.sort_desc(array)[Math.floor(array.length/2)-1])/2
}

// 1.15 Mode - Single modality so far

cfa.mode = (array) => {
    const element_list = new Set(array);

    const mode_list = {};

    element_list.forEach(e => {
        mode_list[e] = 0;
        
    });

    array.forEach(e => {
        mode_list[e] +=1
    });

    

    let max = 0;
    let max_key;
    for (i in mode_list) {
        if (mode_list[i] > max) {
            max = mode_list[i];
            max_key = i;
        }
    }
    let object ={};
    object[max_key] = max;

    return object;
 
}

// 1.16 Weighted Mean

cfa.weighted_mean = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += parseFloat(Object.keys(element))*parseFloat(Object.values(element))
    });
	return sum;
}

// 1.17 Geometric Mean

cfa.geometric_mean = (array) => {
	let product = array.reduce((a,b) => {
		return a*b
	});

	return Math.pow(product, 1/array.length);
}

// 1.18 Harmonic Mean

cfa.harmonic_mean = (array) => {
	let denominator = cfa.sum(array.map(e => {
		return 1/e
	}));

	return array.length/denominator;
}





// 2. CFA FUNCTIONS 


// 2.1 Covariance

cfa.covariance = (array_X, array_Y) => {
    if (array_X.length != array_Y.length) {
        throw 'Arrays have to be the same length';
    }
    
    let upper = 0;
    for (let i=0; i < array_X.length; i++) {
        upper += (array_X[i] - cfa.average(array_X)) * (array_Y[i] - cfa.average(array_Y));
        
    }
    return(upper/(array_X.length-1));
    
};


// 2.2 Sample variance

cfa.sample_variance = array => {
    
    
    let upper = 0;
    array.forEach(element => {
        upper += Math.pow(parseFloat(element) - cfa.average(array), 2);
    });

    return (upper/(array.length-1));
};


// 2.2 Sample standard deviation

cfa.standard_deviation = array => {
    return Math.sqrt(cfa.sample_variance(array));
};


// 2.3 Sample correlation

cfa.sample_correlation = (array_X, array_Y) => {
    if (array_X.length != array_Y.length) {
        throw 'Arrays have to be the same length';
    }
    return cfa.covariance(array_X, array_Y)/(cfa.standard_deviation(array_X) * cfa.standard_deviation(array_Y));
};


// 2.4 Significance of correlation coefficient

cfa.corr_significance = (array_X, array_Y) => {
    if (array_X.length != array_Y.length) {
        throw 'Arrays have to be the same length';
    }
    return (cfa.sample_correlation(array_X, array_Y) * Math.sqrt(array_X.length - 2)/Math.sqrt(1 - Math.pow(cfa.sample_correlation(array_X, array_Y),2)));
};


// 2.5 Linear regression - Level II page 276



// 2.6 Mean Absolute Deviation

cfa.mad = (array) => {
	let average = cfa.average(array);
let sum = 0;
	for (let i=0; i<array.length; i++) {
		sum = sum + Math.abs(array[i] - average);
	}
	return sum/array.length;
};

// 2.7 Semivariance

cfa.semivariance = (array) => {
	let average = cfa.average(array);
    let non_negative = array.filter(e => e<0);

    let sum = 0;
    
    for (let i=0; i<non_negative.length; i++) {
        sum += Math.pow((non_negative[i] - average), 2);
    }

    return sum/(array.length-1);

};

// 2.8 Semideviation

cfa.semideviation = (array) => {
    return Math.pow(cfa.semivariance(array), 0.5);
};


// 2.9 Target semivariance

cfa.target_semivariance = (array, target) => {

    
    let below_target = array.filter(e => e<target);

    let sum = 0;
    
    for (let i=0; i<below_target.length; i++) {
        sum += Math.pow((below_target[i] - target), 2)
    }

    return sum/(array.length-1);

    
};


// 2.10 Target Semideviation

cfa.target_semideviation = (array, target) => {
    return Math.pow(cfa.target_semivariance(array, target), 0.5);
};

// 2.11 Coefficient of variation

cfa.cv = (array) => {
	return cfa.standard_deviation(array)/cfa.average(array);
};

// 2.12 Sharpe Ratio

cfa.sharpe = (array_portfolio, array_rf) => {
	return (cfa.average(array_portfolio) - cfa.average(array_rf))/cfa.standard_deviation(array_portfolio);

};

// 2.13 Sample Skewness

cfa.sample_skewness = (array) => {
	return array.length/((array.length-1)*(array.length-2))*cfa.sum(array.map(e => {return Math.pow(e - cfa.average(array), 3)})) / Math.pow(cfa.standard_deviation(array), 3);
}

// 2.14 Sample Kurtosis

cfa.sample_kurtosis = (array) => {
	return array.length*(array.length+1)/(array.length-1)/(array.length-2)/(array.length-3)*cfa.sum(array.map(e => {return Math.pow(e-cfa.average(array), 4)}))/Math.pow(cfa.standard_deviation(array), 4) - 3*Math.pow(array.length-1, 2)/(array.length-2)/(array.length-3)
};


// 3 Probabililty

// 3.1 Covariance Matrix - takes array of arrays

cfa.covariance_matrix = (array) => {
	let matrix = new Array();
	for (let g=0; g<array.length; g++) {
		matrix.push([])
	}

	

	for (let i=0; i<array.length; i ++) {
		for (let j=0; j<array.length; j++) {
			matrix[i][j] = cfa.covariance(array[i], array[j])
		}
	}

	return matrix
}

// 3.2 Correlation Matrix - takes array of arrays

cfa.correlation_matrix = (array) => {
	let matrix = new Array();
	for (let g=0; g<array.length; g++) {
		matrix.push([])
	}

	

	for (let i=0; i<array.length; i ++) {
		for (let j=0; j<array.length; j++) {
			matrix[i][j] = cfa.sample_correlation(array[i], array[j])
		}
	}

	return matrix
}


// 4. 

// 4.1 SRRI

    // 1. Filter fridays
    // 2. rolling yield
    // 3. standard dev for last 260 observations, for last 17 week-ends
    // 4. konwersja odchylenia std na wartość liczbową:

        // 1    < 0,0050
        // 2    >= 0,0050 AND < 0,0200
        // 3    >= 0,0200 AND < 0,0500
        // 4    >= 0,0500 AND < 0,1000
        // 5    >= 0,1000 AND < 0,1500
        // 6    >= 0,1500 AND < 0,2500
        // 7    >= 0,25
    

cfa.srri = (array) => {

    // 1. Filter fridays
    let fridays = array.filter(el => {
        let day = new Date(el.date);
        return day.getDay() == 4;
    });
    
    let fridayPrices = [];
    
    fridays.forEach(el => fridayPrices.push(el.value));
    
     // 2. rolling yield
    fridayYields = cfa.rolling(fridayPrices, 1, cfa.yield);
    
    
    // 3. standard dev for last 260 observations, for last 17 week-ends
    if (fridayYields.length < 277) {
        throw 'Time series is too short. You need 277 weekly observations.';
    }
    else {
        stdDevArr = [];
        for (let i =0; i < 17; i++) {
            let stdDev = cfa.standard_deviation(fridayYields.slice(fridayYields.length - 277 +i));
            stdDevArr.push(stdDev)
        };
        stdDevArr = stdDevArr.map( (el) => {
            if (el < 0.005) {
                return 1;
            }
            else if (el < 0.02) {
                return 2;
            }
            else if (el < 0.05) {
                return 3;
            }
            else if (el < 0.1) {
                return 4;
            }
            else if (el < 0.15) {
                return 5;
            }
            else if (el < 0.25) {
                return 6;
            }
            else {
                return 7;
            };

        } );

        return stdDevArr;
    }
    
    
    

};

// 4.2 Drawdown (max?)


module.exports = cfa;

