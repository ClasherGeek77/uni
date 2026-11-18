# ml_electricity_forecasting_prophet

## what it is

a Streamlit web app (2025, master's research at Universitas Budi Luhur) that forecasts monthly electricity sales. you upload an Excel file, the app trains three models on it, blends them into one ensemble and plots a 12-month forecast.

the three models and how they are combined (read from `app.py`):

- Prophet (Meta's forecasting library) with two lagged regressors (net generation and exports, shifted 12 months), tried on 10 training-window sizes, best one kept by MAPE.
- VAR (vector autoregression, statsmodels) on sales and exports, also tried on 10 window sizes.
- a bidirectional LSTM (Keras, 64 units, 100 epochs).
- the ensemble weights (a grid of 66 combinations summing to 1) are picked on the last 12 months by lowest MAPE. RMSE, MAE and MAPE are reported.

stack: Python, Streamlit, pandas, prophet, statsmodels, TensorFlow / Keras, scikit-learn, matplotlib.

## what you need

- Python 3.9 to 3.12 (`requirements.txt` pins TensorFlow 2.19.0 and numpy 2.0.2, which need that range).
- a machine that can host TensorFlow and Prophet, and patience: the LSTM alone runs 100 epochs on every upload, expect minutes, not seconds (not timed).
- an input workbook. `ml_csv_data_analysis/Energy/electricity_dataset.xlsx` in https://github.com/ClasherGeek77/uni has the required columns (checked in the file's header strings); the other `electricity_*.xlsx` files in that folder have them too.

the required columns, exactly as the app states them: `Month` (for example `2020-01`), `Electricity Sales to Ultimate Customers`, `Electricity Net Generation, Electric Power Sector`, `Electricity Exports`. extra columns are ignored.

## quick start

```bash
git clone https://github.com/ClasherGeek77/uni.git
cd uni/ml_electricity_forecasting_prophet
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
streamlit run app.py
```

`requirements.txt` is a UTF-16 `pip freeze` of the author's environment (it also lists PySide6, which the app does not use). if `pip` cannot read it, re-save it as UTF-8 first. if the pinned set does not install on your platform, install the direct dependencies only: `pip install streamlit pandas numpy matplotlib openpyxl prophet statsmodels tensorflow scikit-learn`.

`.streamlit/config.toml` sets headless mode and port 8501, so the browser does not open by itself. open http://localhost:8501 , click the upload box and choose `../ml_csv_data_analysis/Energy/electricity_dataset.xlsx`.

you should see a spinner, then an "Actual vs Forecasted (Evaluation Period)" plot with the black actual line against Prophet, VAR, BiLSTM and the red ensemble line, then a "Future Forecast (Next 12 Months)" plot and a table of the forecast per month. not run here (TensorFlow and Prophet are heavy installs); the behaviour above is read from `app.py`.

## how to read the code

`app.py` is one script with no functions except `evaluate`:

1. read the Excel, set `Month` as index, forward/back-fill gaps, build the 12-month lags.
2. hold out the last 12 months as the evaluation set.
3. Prophet loop, VAR loop, BiLSTM, ensemble weight search.
4. refit each model on all data and forecast the next 12 months.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `ValueError: min() arg is an empty sequence` | every training window failed or the series is too short (windows under 24 rows are skipped) | upload a longer series, at least a few years of monthly data |
| `KeyError` naming a column | the workbook lacks one of the four required columns | rename or add the column |
| `ImportError: openpyxl` | needed by `read_excel` | `pip install openpyxl` |
| `FutureWarning` about `fillna(method=...)` | pandas 2.2 deprecation | harmless here; replace with `.ffill()` / `.bfill()` before moving to pandas 3 |
| prophet or tensorflow fails to install | unsupported Python version or CPU architecture | use Python 3.9 to 3.12, or run it on Google Colab (https://colab.research.google.com/) |
| page stays on the spinner | the BiLSTM trains 100 epochs per upload | wait, or lower `epochs=100` in `app.py` |

## next

the sample data and the other course notebooks: https://github.com/ClasherGeek77/uni
