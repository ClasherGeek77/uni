# uni

## what it is

17 university projects, one folder each: coursework from Universitas Tarumanagara (2019 to 2021), two projects from the master's program at Universitas Budi Luhur (2024, 2025), and contest and online-course submissions. each folder keeps the full commit history of the repository it used to be. every folder has its own README with what it is, how to run it and what you should see.

these are student projects, kept as a record. for current testing work see https://github.com/ClasherGeek77 and start with https://github.com/ClasherGeek77/pytest_web_boilerplate .

## when to use it

- to read small, finished examples in Java, VB.NET, C++, Python, JavaScript and Jupyter.
- as practice data and notebooks for basic machine learning (`ml_*` folders; the datasets are in `ml_csv_data_analysis`).
- not as a template for new projects: use the boilerplates linked at the end.

## the projects

pick by topic. "run" is the shortest command; the folder README has the full steps.

| folder | what it is | stack | year | run |
| --- | --- | --- | --- | --- |
| https://github.com/ClasherGeek77/uni/tree/HEAD/competitive_programming_cpc_2020 | contest problem solutions (course exercises and a COMPFEST 12 problem) | C++, Java, Python | 2020 | `g++ file.cpp && ./a.out < input` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/decision_support_system_final | ranks three hospitals with the AHP method, generates a chart page | Python (numpy), HTML, Chart.js | 2024 | `python3 src/ahp_generator.py`, open `index.html` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/greenfoot_pizza_eating_game | arcade game: robot, pizzas, walls, two levels | Java, Greenfoot | 2019 | open the folder in Greenfoot, press Run |
| https://github.com/ClasherGeek77/uni/tree/HEAD/java_animation_alice_project | short 3D fight animation | Alice 3 | 2019 | open `Alice_Animation_Project.a3p` in Alice 3 |
| https://github.com/ClasherGeek77/uni/tree/HEAD/java_news_app_ui | news website with categories, search and login | Java 8, Spark, Velocity, MySQL, Maven | 2019 | load `sql/database_dump.sql`, `mvn compile exec:java -Dexec.mainClass=Application` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/mail_client_exam_project | mail app screens (login, create account, inbox); UI prototype, does not build as is | VB.NET Windows Forms | 2020 (upload date) | Windows only, open the `.sln` in Visual Studio |
| https://github.com/ClasherGeek77/uni/tree/HEAD/ml_csv_data_analysis | the datasets used by the ML notebooks, by topic; data only | CSV, Excel | 2021 | `pandas.read_csv(...)` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/ml_decision_tree_implementation | decision tree on car evaluation data | Python, scikit-learn, Jupyter | 2021 | `jupyter notebook` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/ml_electricity_forecasting_prophet | Streamlit app forecasting electricity sales with Prophet, VAR and BiLSTM | Python, Streamlit, Prophet, TensorFlow | 2025 | `pip install -r requirements.txt && streamlit run app.py` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/ml_ensemble_learning_implementation | random forest, boosting and bagging compared on two datasets | Python, scikit-learn, Jupyter | 2021 | `jupyter notebook` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/ml_linear_regression_implementation | linear regression with scikit-learn and by hand | Python, scikit-learn, Jupyter | 2021 | `jupyter notebook` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/ml_rock_paper_scissors | CNN classifying rock, paper, scissors photos | Python, TensorFlow, Colab | 2020 | upload the notebook to Google Colab |
| https://github.com/ClasherGeek77/uni/tree/HEAD/ml_svm_implementation | SVM kernels compared on diabetes data | Python, scikit-learn, Jupyter | 2021 | `jupyter notebook` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/movie_database_web_app | movie catalog with search, TMDB data | JavaScript, Webpack 4, Bootstrap | 2020 | `npm install && npm run build` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/node_express_ejs_googlebooks_api | book browser with search and detail pages, Google Books data | Node.js, Express, EJS | 2020 | `npm install && node index.js` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/ui_clone_tokopedia_homepage | static copy of a marketplace home page | HTML, Bootstrap 4 | 2020 | open `index.html` |
| https://github.com/ClasherGeek77/uni/tree/HEAD/web_programming_basics | weekly HTML, CSS and JavaScript exercises, weeks 1 to 5 | HTML, CSS, JavaScript | 2020 | open the HTML files in a browser |

## what you need

- only what each folder lists. most need nothing beyond a browser, Python 3 or Node.js.
- Windows is required for `mail_client_exam_project`; the rest run on macOS and Linux.

## known problems (checked 2026-11-18)

| folder | problem |
| --- | --- |
| the `ml_*` notebooks | they download data from `raw.githubusercontent.com/ClasherGeek77/ml-csv/...`, which now returns 404 (that repository was merged into `ml_csv_data_analysis`). point `read_csv` at the local file, each notebook README shows how |
| `ml_rock_paper_scissors` | the Dicoding dataset URL in the notebook also returns 404; get the dataset elsewhere |
| `ml_csv_data_analysis` | `General/mnist_train.csv` is a Git LFS pointer, not data |
| `node_express_ejs_googlebooks_api` | the app crashes when Google Books answers an anonymous request with an error such as `429 Quota exceeded` |
| `mail_client_exam_project` | the project file lists files that are not in the repo (compose form, `My Project`, the Bunifu UI DLL) |

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| a folder README says "not run here" | that part needs a GUI tool or database not available when the README was written | follow the steps, and treat the "you should see" lines as expected, not guaranteed |
| notebook fails on a missing module | the notebooks come from Google Colab (Python 3.7) | `pip install` the module named in the error |

## next

- testing work, start here: https://github.com/ClasherGeek77/pytest_web_boilerplate (browser tests in Python) or https://github.com/ClasherGeek77/katalon_web_boilerplate (Katalon).
- training exercises: https://github.com/ClasherGeek77/qa_training
- profile and all repositories: https://github.com/ClasherGeek77
