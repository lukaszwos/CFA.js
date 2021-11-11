


# cfa.js

still in beta - ironing some bugs...
readme is due to changes

## Installation

via npm:
```console
npm i cfs.js
```

or frontside:
```javascript

<script src="cfa.js></script>
```


## Contetnts


1. [Time value of money functions](#time-value-of-money-functions)
2. [Statistics](#statistics)
3. [Linear Regression](#linear-regression)
4. [Probability](#probabililty)
5. [Derivatives](#derivatives)
6. [Helper Functions](#helper-functions)



## Examples

Calculate rolling return in an array
> rolling return day by day (you can input any number of days - lower than array length of course)

```javascript

let array = [1, 1.02, 1.03, 1, 1.03, 1.05]
cfa.yield_array(array2, 1)

```

returns:

```javascript
[
  0.020000000000000018,
  0.009803921568627416,
  -0.029126213592232997,
  0.030000000000000027,
  0.01941747572815533
]
```

Calculate irr of a project
> irr functions takes as an input an array where `array[0]` (first element of the array) is the initial outlay.


```javascript
const array = [-50, 20, 10, 5, 30, 50]

cfa.irr(array)

```

returns:

```javascript
{ rate: 27.860000000001556, NPV: 0.007680729691662336 }
```

> calculated irr must be from <0, 100> extent. 
> irr function uses 0.001 step 


Calculate value of a call option using Black Scholes formula:

```javascript

let vol = 0.2 // standard deviation = 20%
let price = 42 
let strike = 40
let time = 0.5 // in years
let rate = 0.1 // yearly = 10%
let dividend = 0.03 // dividend yield = 3%

cfa.callOption(vol, price, strike, time, rate, dividend)

// {
//   d1: 0.6631966109280495,
//   d2: 0.5217752546907399,
//   Nd1: 0.7463978073568774,
//   Nd2: 0.6990866809248882,
//   callValue: 4.2823136053820505
// }

```


## TIME VALUE OF MONEY FUNCTIONS

__CAGR - compounded annual growth rate__

```javascript
cfa.cagr(ending, start, years)

cfa.cagr(125,100,2)

// 0.1180339887498949
```


__Future value__

```javascript
cfa.fv(pv, r, n, m) 
```

__Present value__

```javascript
cfa.pv(fv,r,n,m) 
```

__Continous compounding__

```javascript
cfa.fv_continous(pv, r, n) 
```

__Effective Annual Rate__

```javascript
cfa.ear(r,m) 
```

__Continous Effective Annual Rate__

```javascript
cfa.ear_continous(r) 
```

__Future Value of Ordinary Annuity__

```javascript
cfa.fv_annuity_ordinary(a,r,n)
```

__Present Value of Ordinary Annuity__

```javascript
cfa.pv_annuity_ordinary(a,r,n)
```


__Future Value of Unequal Cash Flows__

```javascript
cfa.fv_unequal_cf(array, r) 
```

__Present Value of Unequal Cash Flows__

```javascript
cfa.pv_unequal_cf(array, r)
```

__Present Value of Perpetuity__

```javascript
cfa.pv_perpetuity(a, r)
```


__Net Present Value__

```javascript
cfa.npv(array, r)
```

__Internal Rate of Return__

```javascript
cfa.irr(array)
```

returns object: 
```javascript
{rate, NPV}
```

for instance:

```javascript

let array = [-50, 20, 10, 5, 30, 50]

cfa.irr(array)
```

returns:
```javascript
{ rate: 27.860000000001556, NPV: 0.007680729691662336 }
```



<!-- // 1.13 XIRR doesn't work -->

## Statistics

__Cumulative Distribution Function__ - normal distribution

> using Hastings approximation

```javascript
cfa.cfa.normalCdf(0)

//0.49999985009951 - close enough
```

__Binomial Coefficient__ - nCk, n Chooses k

```javascript
cfa.nCk(9,3)

// 84

```

__Binomial__

```javascript
cfa.binomial(trials, success, probability)

// returns object {pdf, CDF, mean, variance}

cfa.binomial(5,2,0.3)

// {
//   pdf: 0.3086999999999999,
//   CDF: 0.8369199999999997,
//   mean: 1.5,
//   variance: 1.0499999999999998
// }


```


__Median__

```javascript
cfa.median(array)
```

__Mode - Single modality so far__

```javascript
cfa.mode(array)
```

__Weighted Mean__

```javascript
cfa.weighted_mean(array)
```

__Geometric Mean__

```javascript
cfa.geometric_mean(array)
```

__Harmonic Mean__

```javascript
cfa.harmonic_mean(array)
```



__Covariance__

```javascript
cfa.covariance(array_X, array_Y)
```

__Sample variance__

```javascript
cfa.sample_variance(array)
```

__Sample standard deviation__

```javascript
cfa.standard_deviation(array)
```

__Sample correlation__

```javascript
cfa.sample_correlation(array_X, array_Y)
```

__Significance of correlation coefficient__

```javascript
cfa.corr_significance(array_X, array_Y)
```

## Linear regression



__Mean Absolute Deviation__

```javascript
cfa.mad(array) 
```

__Semivariance__

```javascript
cfa.semivariance(array) 
```

__Semideviation__

```javascript
cfa.semideviation(array) 
```

__Target semivariance__

```javascript
cfa.target_semivariance(array, target)
```


__Target Semideviation__

```javascript
cfa.target_semideviation(array, target) 
```

__Coefficient of variation__

```javascript
cfa.cv(array) 
```

__Sharpe Ratio__

```javascript
cfa.sharpe(array_portfolio, array_rf)
```

__Sample Skewness__

```javascript
cfa.sample_skewness(array)
```

__Sample Kurtosis__

```javascript
cfa.sample_kurtosis(array)
```

## Probabililty

__Covariance Matrix__ - takes array of arrays

```javascript
cfa.covariance_matrix(array)
```

__Correlation Matrix__ - takes array of arrays

```javascript
cfa.correlation_matrix(array)
```

## Derivatives

__Call option__ - valuation of a call option using Black Scholes formula

```javascript
cfa.callOption(vol, price, strike, time, rate, dividend)

// returns
// {d1, d2, Nd1, Nd2, callValue }

```



## HELPER FUNCTIONS


__Factorial__

```javascript
cfa.factorial(num)

cfa.factorial(3)

// 6

cfa.factorial(5)

// 120

__Yield__

```javascript
cfa.yield(a,b)
```

__Average__

```javascript
cfa.average(array)
```

__Array parse to float__

```javascript
cfa.float_array(array)
```

__Sum of array__

```javascript
cfa.sum(array)
```


__Array - sort descending__

```javascript
cfa.sort_desc(array)
```

__Array - Extent__

```javascript
cfa.extent(array)
```

__MAX__

```javascript
cfa.max(array)
```


__MIN__

```javascript
cfa.min(array)
```


__Range__

```javascript
cfa.range(array)
```

__k days yield array__

```javascript
cfa.yield_array(array, days)
```

__Rolling function with callback__

```javascript
cfa.rolling(array, days, callback)
```

---
