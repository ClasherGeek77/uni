# ml_svm_implementation

## what it is

one notebook (2021, machine learning course) that trains support vector machines (SVM) on the Pima diabetes dataset (768 rows, 8 numeric features, label `Outcome`) and compares kernels and the `C` hyperparameter. markdown and comments are in Indonesian.

stack: Python 3, Jupyter, pandas, numpy, scikit-learn.

## what you need

- Python 3.8 or newer (saved outputs come from Python 3.7 on Google Colab).
- the dataset: `diabetes.csv` is in https://github.com/ClasherGeek77/uni under `ml_csv_data_analysis/Healthcare/`.

## quick start

```bash
git clone https://github.com/ClasherGeek77/uni.git
cd uni/ml_svm_implementation
python3 -m venv .venv && . .venv/bin/activate
pip install jupyter pandas numpy scikit-learn
jupyter notebook SVM_Implementation_Analysis.ipynb
```

the notebook reads `https://raw.githubusercontent.com/ClasherGeek77/ml-csv/main/diabetes.csv`, which now returns 404 (checked). replace the URL in the second cell:

```python
diabetes = pd.read_csv("../ml_csv_data_analysis/Healthcare/diabetes.csv")
```

then `Run All Cells`.

you should see, in the saved outputs (70/30 split, `random_state=42`): accuracy 0.7359 for the default `SVC()`, 0.7186 for the RBF kernel with `C=100`, 0.7446 for the linear kernel with `C=1`, followed by a classification report and confusion matrix for the linear model (class 0 recall 0.87, class 1 recall 0.49, so it misses about half of the diabetic cases). not re-run here.

## how to read the code

- the features are not scaled. SVMs are sensitive to scale, so scaling the columns with `StandardScaler` is a good next experiment.
- all three printouts use the same text "default hyperparameters", although only the first one is the default; read the comment line above each cell to know which model it is.
- accuracy alone hides the weak recall on class 1, which is why the notebook ends with the report.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `HTTPError: 404` | old `ml-csv` repo URL | use the local path above |
| `FileNotFoundError` | Jupyter started from another folder | start Jupyter inside this folder |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni . the same diabetes data is used for tree ensembles in `ml_ensemble_learning_implementation`.
