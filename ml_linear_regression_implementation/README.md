# ml_linear_regression_implementation

## what it is

two notebooks (2021, machine learning course) on linear regression. markdown and comments are in Indonesian.

| notebook | what it does | data |
| --- | --- | --- |
| `Linear_Regression_Implementation.ipynb` | 13 numbered tasks: scatter plot, fit with scikit-learn, intercept and slope, R2 computed three ways, prediction, then adds an outlier and shows what it does to R2 | `Covid19.csv` (tests vs positive cases) |
| `Linear_Regression_Advanced.ipynb` | linear regression by hand: model and cost function, a 3D cost surface over the two weights, the fitted line, R2 | `house_train.csv` (house prices, `SalePrice` against `1stFlrSF`) |

stack: Python 3, Jupyter, numpy, pandas, matplotlib, seaborn, scipy, scikit-learn.

## what you need

- Python 3.8 or newer (saved outputs come from Python 3.7 on Google Colab).
- the datasets, in https://github.com/ClasherGeek77/uni under `ml_csv_data_analysis/General/`: `Covid19.csv` and `house_train.csv`.

## quick start

```bash
git clone https://github.com/ClasherGeek77/uni.git
cd uni/ml_linear_regression_implementation
python3 -m venv .venv && . .venv/bin/activate
pip install jupyter numpy pandas matplotlib seaborn scipy scikit-learn
jupyter notebook
```

both notebooks read their CSV from `https://raw.githubusercontent.com/ClasherGeek77/ml-csv/main/...` or `https://github.com/ClasherGeek77/ml-csv/raw/main/...`, which now return 404 (checked). replace the URL with the local file:

```python
# Implementation notebook
data = pd.read_csv('../ml_csv_data_analysis/General/Covid19.csv')
# Advanced notebook
df_train = pd.read_csv('../ml_csv_data_analysis/General/house_train.csv')
```

you should see, in the saved outputs: Implementation notebook slope about 0.058, intercept about -20379, R2 0.8108, predicted 94965 positive cases for 2,000,000 tests; after the outlier the R2 drops to 0.0094 (the notebook's conclusion: remove outliers before fitting). Advanced notebook weights about `[1006.3, 151.7]` and R2 about 0.3475. not re-run here.

## how to read the code

- Implementation: read the markdown task list top to bottom, each task is one or two cells. the three R2 values (scikit-learn, method A, method B) agree to 15 digits, which shows R2 is just a formula.
- Advanced: `clf` is the model, `cost` the sum of squared errors, then the 3D plot of cost against the two weights. the minimum of that surface is the fit.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `HTTPError: 404` | old `ml-csv` repo URL | use the local paths above |
| `AttributeError ... gca() got an unexpected keyword argument 'projection'` | `fig.gca(projection='3d')` was removed in matplotlib 3.6 | change it to `fig.add_subplot(projection='3d')`, or `pip install "matplotlib<3.6"` |
| `FileNotFoundError` | notebook started from another folder | start Jupyter inside this folder so `../ml_csv_data_analysis` resolves |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni . next model type: `ml_decision_tree_implementation`.
