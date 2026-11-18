# decision_support_system_final

## what it is

a decision support system course project (2024, Universitas Budi Luhur, as named in the page header) that ranks three hospitals (RSCM, RS Premier Bintaro, RS Pondok Indah) with the Analytic Hierarchy Process (AHP). four criteria: facilities, medical staff, accessibility, cost.

stack: Python 3 with numpy for the calculation, a generated static HTML page with Chart.js and Tailwind CSS (loaded from CDNs) for the charts.

| file | role |
| --- | --- |
| `src/ahp_generator.py` | holds the comparison matrices, computes weights, consistency ratio and final scores, then writes `index.html` |
| `index.html` | the generated report, already committed |

## what you need

- to only look at the result: a browser and an internet connection (the charts load Chart.js and Tailwind from CDNs).
- to regenerate it: Python 3 and numpy.

## quick start

look at the result:

```bash
cd decision_support_system_final
open index.html        # macOS; on Linux use xdg-open
```

regenerate it:

```bash
cd decision_support_system_final
python3 -m venv .venv && . .venv/bin/activate
pip install numpy
python3 src/ahp_generator.py
```

you should see `File index.html telah dibuat!` (Indonesian for "index.html has been created"), and `index.html` is rewritten in place. with the committed matrices the result is the same as before: RSCM about 0.442, RS Premier Bintaro about 0.328, RS Pondok Indah about 0.230, consistency ratio about 0.0097 (below 0.1, so the comparisons count as consistent). verified by running the script.

## how to read the code

- `AHPCalculator.__init__` holds the pairwise comparison matrices. change numbers there to test another opinion.
- `get_weights` normalises each column and averages the rows; `consistency_check` computes lambda max, CI and CR against the random index table `RI`.
- `generate_html` embeds the results as JSON in the page, so `index.html` needs no server.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `ModuleNotFoundError: numpy` | numpy not installed | `pip install numpy` in the active venv |
| page opens but charts are empty | CDN blocked or offline | open it with internet access |
| `index.html` changed in git after running | the script overwrites it | expected; discard with `git checkout index.html` if unwanted |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni
