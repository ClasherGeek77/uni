# ml_ensemble_learning_implementation

## what it is

two notebooks (2021, machine learning course) comparing ensemble classifiers in scikit-learn. each one trains several models on a tabular dataset and compares their test accuracy. the notebooks' own conclusion in both: Random Forest scores highest. markdown and comments are in Indonesian.

| notebook | data | models compared |
| --- | --- | --- |
| `Ensemble_Learning_Part_1.ipynb` | diabetes (768 rows, 8 features, `Outcome`) | Random Forest, single Decision Tree, Extra Trees, AdaBoost, Gradient Boosting, Bagging with KNN |
| `Ensemble_Learning_Part_2.ipynb` | adult income (32561 rows, `income` class) | Random Forest, Extra Trees, AdaBoost, with 5-fold cross-validation |

stack: Python 3, Jupyter, pandas, scikit-learn, category_encoders (Part 2 only).

## what you need

- Python 3.8 or newer (saved outputs come from Python 3.7 on Google Colab).
- the datasets, in https://github.com/ClasherGeek77/uni under `ml_csv_data_analysis/`: `Healthcare/diabetes.csv` and `Finance/income_evaluation.csv`.

## quick start

```bash
git clone https://github.com/ClasherGeek77/uni.git
cd uni/ml_ensemble_learning_implementation
python3 -m venv .venv && . .venv/bin/activate
pip install jupyter pandas scikit-learn category_encoders
jupyter notebook
```

both notebooks read `https://raw.githubusercontent.com/ClasherGeek77/ml-csv/main/<file>.csv`, which now returns 404 (checked). in the `pd.read_csv(...)` cell replace the URL:

```python
# Part 1
df = pd.read_csv("../ml_csv_data_analysis/Healthcare/diabetes.csv", header=None)
# Part 2
df = pd.read_csv("../ml_csv_data_analysis/Finance/income_evaluation.csv", header=None)
```

keep `header=None` and the `df.iloc[1:, :]` line that follows: the notebooks drop the header row themselves.

you should see, in the saved outputs: Part 1 accuracy Random Forest 0.8139, Decision Tree 0.6926, Extra Trees 0.7273, AdaBoost 0.7965, Gradient Boosting 0.7922, Bagging-KNN 0.7662; Part 2 Random Forest 0.8338, Extra Trees 0.8253, AdaBoost 0.8193. your numbers will differ by a few points because Random Forest and AdaBoost are not seeded there. not re-run here.

## how to read the code

- load, name the columns, split 70% train / 30% test (`random_state=1`).
- Part 2 also ordinal-encodes the text columns with `category_encoders` and uses `cross_val_score` with `cv=5` next to the test score.
- a training score near 1.0 next to a lower test score (Extra Trees in Part 2) is overfitting, worth discussing.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `HTTPError: 404` | old `ml-csv` repo URL | use the local paths above |
| `ModuleNotFoundError: category_encoders` | not installed | `pip install category_encoders` |
| accuracy differs from the saved output | unseeded models | expected |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni . for a single-model comparison, `ml_svm_implementation` uses the same diabetes data.
