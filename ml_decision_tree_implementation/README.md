# ml_decision_tree_implementation

## what it is

one notebook (2021, machine learning course) that trains a decision tree classifier on the UCI Car Evaluation dataset (1728 cars, 6 features, 4 classes: `unacc`, `acc`, `good`, `vgood`) and checks it with accuracy, a confusion matrix and a classification report.

stack: Python 3, Jupyter, pandas, numpy, matplotlib, seaborn, scikit-learn, category_encoders, graphviz.

## what you need

- Python 3.8 or newer (the saved outputs come from Python 3.7 on Google Colab).
- the dataset: `car_evaluation.csv` is in https://github.com/ClasherGeek77/uni under `ml_csv_data_analysis/General/`.
- optional, only to draw the tree: the Graphviz program (`brew install graphviz` on macOS, `sudo apt install graphviz` on Linux) in addition to the Python package.

## quick start

```bash
git clone https://github.com/ClasherGeek77/uni.git
cd uni/ml_decision_tree_implementation
python3 -m venv .venv && . .venv/bin/activate
pip install jupyter pandas numpy matplotlib seaborn scikit-learn category_encoders graphviz
jupyter notebook Decision_Tree_Implementation.ipynb
```

the notebook loads its data from `https://raw.githubusercontent.com/ClasherGeek77/ml-csv/main/car_evaluation.csv`, which now returns 404 (checked). in the cell that calls `pd.read_csv(...)`, replace the URL with the local file:

```python
df = pd.read_csv('../ml_csv_data_analysis/General/car_evaluation.csv', header=None)
```

then `Run`, `Run All Cells`.

you should see, in the saved outputs and in your run: shape `(1157, 6)` for the training set and `(571, 6)` for the test set, test accuracy about 0.80 and training accuracy about 0.79 for the entropy tree with `max_depth=3`. the class `good` and `vgood` are never predicted, so their precision shows as 0.00 with an `UndefinedMetricWarning`; that is the real result of the shallow tree, not a bug. these numbers are from the saved notebook outputs; the notebook was not re-run here.

## how to read the code

- load data and name the columns (the CSV has no header row).
- encode the categorical columns with `category_encoders.OrdinalEncoder`.
- split 67% train, 33% test (`random_state=42`), fit `DecisionTreeClassifier(criterion='entropy', max_depth=3, random_state=0)`.
- evaluate, then draw the tree with `export_graphviz`.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `HTTPError: 404` on `read_csv` | the old `ml-csv` repo URL | use the local path above |
| `ModuleNotFoundError: category_encoders` | not installed | `pip install category_encoders` |
| `ExecutableNotFound: dot` | Graphviz program missing | install Graphviz, or skip the tree-drawing cell |
| `FutureWarning` from category_encoders | version difference | harmless |

## next

compare with other models on a different dataset: `ml_ensemble_learning_implementation` and `ml_svm_implementation` in https://github.com/ClasherGeek77/uni .
