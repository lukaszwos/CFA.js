# CFA.js
JS library for financial math





## HELPER FUNCTIONS

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

cfa.yield_array(array, days)

__Rolling function with callback__

cfa.rolling = (array, days, callback)


## TIME VALUE OF MONEY FUNCTIONS

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

// 1.4 Effective Annual Rate

cfa.ear(r,m) 

// 1.5 Continous Effective Annual Rate

cfa.ear_continous(r) 

// 1.6 Future Value of Ordinary Annuity

cfa.fv_annuity_ordinary(a,r,n)

// 1.7 Present Value of Ordinary Annuity page 319

cfa.pv_annuity_ordinary(a,r,n)


// 1.8 Future Value of Unequal Cash Flows

cfa.fv_unequal_cf(array, r) 

// 1.9 Present Value of Unequal Cash Flows

cfa.pv_unequal_cf(array, r)

// 1.10 Present Value of Perpetuity

cfa.pv_perpetuity(a, r)


// 1.11 Net Present Value

cfa.npv(array, r)

// 1.12 Internal Rate of Return - doesn't work



// 1.13 XIRR doesn't work

// 1.14 Median

cfa.median(array)

// 1.15 Mode - Single modality so far

cfa.mode(array)

// 1.16 Weighted Mean

cfa.weighted_mean(array)

// 1.17 Geometric Mean

cfa.geometric_mean(array)
	

// 1.18 Harmonic Mean

cfa.harmonic_mean(array)




// 2.1 Covariance

cfa.covariance(array_X, array_Y)

// 2.2 Sample variance

cfa.sample_variance(array)

// 2.2 Sample standard deviation

cfa.standard_deviation(array)

// 2.3 Sample correlation

cfa.sample_correlation(array_X, array_Y)

// 2.4 Significance of correlation coefficient

cfa.corr_significance(array_X, array_Y)


// 2.5 Linear regression 



// 2.6 Mean Absolute Deviation

cfa.mad(array) 

// 2.7 Semivariance

cfa.semivariance(array) 

// 2.8 Semideviation

cfa.semideviation(array) 

// 2.9 Target semivariance

cfa.target_semivariance(array, target)


// 2.10 Target Semideviation

cfa.target_semideviation(array, target) 

// 2.11 Coefficient of variation

cfa.cv(array) 

// 2.12 Sharpe Ratio

cfa.sharpe(array_portfolio, array_rf)

// 2.13 Sample Skewness

cfa.sample_skewness(array)

// 2.14 Sample Kurtosis

cfa.sample_kurtosis(array)

// 3 Probabililty

// 3.1 Covariance Matrix - takes array of arrays

cfa.covariance_matrix(array)

// 3.2 Correlation Matrix - takes array of arrays

cfa.correlation_matrix(array)





