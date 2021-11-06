# CFA.js
JS library for financial math

[Time value of money functions](## 1. TIME VALUE OF MONEY FUNCTIONS)
[Statistics](## 2. Statistics)
3. [Linear Regression](## 3. Linear regression)
4. [Probability](## 4. Probabililty)
5. [Helper Functions](## 5. HELPER FUNCTIONS)


## 1. TIME VALUE OF MONEY FUNCTIONS

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

## 2. Statistics

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

## 3. Linear regression



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

## 4. Probabililty

__Covariance Matrix__ - takes array of arrays

```javascript
cfa.covariance_matrix(array)
```

__Correlation Matrix__ - takes array of arrays

```javascript
cfa.correlation_matrix(array)
```


## 5. HELPER FUNCTIONS

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

