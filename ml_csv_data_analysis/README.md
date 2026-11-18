# ml_csv_data_analysis

## what it is

the datasets used by the machine learning notebooks in this repo (2021 and later), sorted by topic. there is no code here, only data files. several sheets also hold course-specific samples (for example `ContohPerhitungan.csv`, "example calculation").

| folder | files |
| --- | --- |
| `Academic` | student and university tables (`Data S3*.xlsx`, `output2122`, `output2223`, `outputnc`, tuition / SAT / completion-rate columns) |
| `Energy` | electricity datasets as `.xlsx`: net generation, sales, exports, price. `electricity_dataset.xlsx` and `electricity_and_price_dataset*.xlsx` |
| `Finance` | `income_evaluation.csv` (census income), `Income.xls`, `Ecommerce Customers` (CSV without extension) |
| `Healthcare` | `diabetes.csv`, `bodyfat*.csv/.xlsx`, `insurance_claims.csv`, `Restaurant_Reviews.tsv` |
| `General` | `titanic_*.csv`, `titanicFull.csv`, `car_evaluation.csv`, `house_train.csv`, `Covid19.csv`, `spam.csv`, `movie_metadata.csv`, `mnist_test.csv`, `event_data.csv`, college train/test files |

## when to use it

- as practice data for the notebooks in https://github.com/ClasherGeek77/uni (decision tree, ensemble, linear regression, SVM, electricity forecasting): each of those folders says which file it needs.
- the Energy sheets are the sample input for the Streamlit app in `ml_electricity_forecasting_prophet`.

## what you need

- Python with pandas to open the CSV files, and `openpyxl` for the `.xlsx` ones. any current Python 3 works.

## quick start

```bash
cd ml_csv_data_analysis
python3 -m venv .venv && . .venv/bin/activate
pip install pandas openpyxl
python3 -c "import pandas as pd; df = pd.read_csv('General/titanic_train.csv'); print(df.shape); print(df.head(3))"
```

you should see a table with 12 columns (`PassengerId` to `Embarked`) and the first rows starting with `Braund, Mr. Owen Harris`. the command was not run with pandas here; the header and first rows of the file were checked directly.

## known problem: one file is not real data

`General/mnist_train.csv` is a 133-byte Git LFS pointer (`version https://git-lfs.github.com/spec/v1`, size 76775041), not the data. `General/mnist_test.csv` (about 51 MB) is real. to get the training file, download the MNIST CSV from a public source such as https://www.kaggle.com/datasets/oddrationale/mnist-in-csv and save it under that name. `.gitattributes` still routes `*.csv` through Git LFS, so do not rely on `git lfs pull` to fix it.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `ParserError` reading `mnist_train.csv` | the file is the LFS pointer | see "known problem" |
| `Ecommerce Customers` not found as a CSV | the file has no extension | `pd.read_csv('Finance/Ecommerce Customers')` |
| `ImportError: openpyxl` | needed for `.xlsx` | `pip install openpyxl` |
| `income_evaluation.csv` columns have leading spaces | raw census format | `skipinitialspace=True` |

## next

the notebooks that use these files, in https://github.com/ClasherGeek77/uni : `ml_decision_tree_implementation`, `ml_ensemble_learning_implementation`, `ml_linear_regression_implementation`, `ml_svm_implementation`, `ml_electricity_forecasting_prophet`.
