# java_news_app_ui

## what it is

a news website (2019, web programming course): home page with news per category (Hot, Sport, Politic, Travel, Crimes), a category page, a read page, keyword search, and login / register / account status pages.

stack: Java 8, Spark (micro web framework) 2.8.0, Velocity templates, sql2o, MySQL or MariaDB, Lombok, Maven.

## what you need

- JDK 8 (JDK 11 should also work; JDK 16 and newer is not expected to work because Lombok 1.18.10 in `pom.xml` is too old for it, not verified).
- Maven 3 (https://maven.apache.org/download.cgi).
- MySQL or MariaDB running on `localhost:3306` with user `root` and an empty password. these are hard-coded in `src/main/java/app/BaseDao.java`; edit that file if your database differs.

## quick start

create the database and load the data (the dump has the tables `dbnews` with 25 articles and `login` with 2 demo accounts):

```bash
mysql -u root -e "CREATE DATABASE news"
mysql -u root news < sql/database_dump.sql
```

start the server (the `exec` plugin is downloaded on demand, it is not listed in `pom.xml`):

```bash
mvn compile exec:java -Dexec.mainClass=Application
```

then open http://localhost:4567/news/ (Spark's default port; the app does not set another).

you should see the news home page with the five category sections filled with the dump's articles. not run here (needs MySQL and Maven); routes and defaults were read from `Application.java`, `Path.java` and `BaseDao.java`.

## how to read the code

| file | what it does |
| --- | --- |
| `src/main/java/Application.java` | the route table: which URL goes to which controller method |
| `src/main/java/app/Path.java` | URL and template path constants |
| `src/main/java/controllers/NewsController.java` | one `Route` per page |
| `src/main/java/dao/NewsDao.java`, `app/BaseDao.java` | SQL queries and the database connection |
| `src/main/resources/velocity/` | Velocity page templates, `layout.vm` is the shared frame |
| `src/main/resources/assets/` | images and styles, served as static files |
| `sql/database_dump.sql` | schema and sample data |

the demo accounts in the dump use plain-text passwords. that is fine for a course project and not something to copy.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `Communications link failure` or `Access denied` on startup or first page | database not running, wrong credentials | start MySQL, or edit `BaseDao.java` |
| `Unknown database 'news'` | the database was not created | run the two `mysql` commands above |
| `package lombok... does not exist` / annotation errors on a new JDK | Lombok 1.18.10 does not support newer JDKs | use JDK 8 or 11 |
| browser shows 404 at `/` | the app only serves paths under `/news/` | open http://localhost:4567/news/ |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni . a smaller server-rendered web app is `node_express_ejs_googlebooks_api` in the same repo.
