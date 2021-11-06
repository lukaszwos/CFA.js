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

```javascript
cfa.yield_array(array, days)
```

__Rolling function with callback__

```javascript
cfa.rolling(array, days, callback)
```

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

<!-- Internal Rate of Return - doesn't work -->



<!-- // 1.13 XIRR doesn't work -->

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





