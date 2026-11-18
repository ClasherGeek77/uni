# mail_client_exam_project

## what it is

the screens of a desktop mail application (2019 or 2020, exam project): login, create account, a main window with receive / sent tabs and a compose button. it is a UI prototype: the buttons switch between forms, but login, account creation and message loading are still comments in the code (`'cari id user sesuai dengan data yang diinput` = "look up the user id matching the input").

stack: VB.NET Windows Forms on .NET Framework 4.5.2, Visual Studio solution, a local SQL Server database file (`Email Local.mdf`, tables `user` and `email`), the Bunifu UI component library for the flat look.

## when to use it

read it as an example of a small Windows Forms project and its form-per-file layout. do not expect a runnable app: see "if it breaks".

## what you need

- Windows with Visual Studio (the Community edition is free, https://visualstudio.microsoft.com/vs/) and the ".NET desktop development" workload. this project is Windows-only.
- SQL Server Express LocalDB for the `.mdf` file, which Visual Studio installs with the workload above.
- the Bunifu UI v1.5.3 DLL. it is a commercial component, it is not in this repo, and `Modern Flat UI - Mail Application.vbproj` points to an absolute path on the original author's machine.

## quick start

1. open `Modern Flat UI - Mail Application.sln` in Visual Studio.
2. fix the Bunifu reference: in Solution Explorer, `References`, remove the broken `Bunifu_UI_v1.5.3` entry and add your own copy of the DLL (or replace those controls).
3. restore the missing project files (next section), then press `Start`.

not run here (no Windows available). the missing files below were checked against the `.vbproj` and the folder.

## what is missing

the `.vbproj` lists files that are not in this repo, so a clean build fails:

| missing | needed by |
| --- | --- |
| `compose.vb`, `compose.Designer.vb` (the compose form, called from `main.vb`) | `main.vb` line `compose.Show()` |
| `My Project\` (`AssemblyInfo.vb`, `Application.Designer.vb`, `Resources.Designer.vb`, `Settings.Designer.vb`) | the project file |
| `ApplicationEvents.vb` | the project file |
| the Bunifu UI DLL | every custom control |

to get a build: add an empty form named `compose` and let Visual Studio regenerate `My Project`, or delete those entries from the `.vbproj`.

## how to read the code

| file | what it does |
| --- | --- |
| `Login.vb` | login form: show/hide password on hover, `Log In` opens the main form, "create account" opens `Create` |
| `Create.vb` | sign-up form, goes back to `Login` |
| `main.vb` | main window: receive / sent buttons move the highlight bar, close / minimise / maximise handlers |
| `*.Designer.vb`, `*.resx` | generated layout of each form, edited through the Visual Studio designer |
| `Email_LocalDataSet.xsd`, `Email Local.mdf` | typed dataset and database file; `Dummy.vb` is a scratch form that fills them |
| `Resources/` | icons and images |

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| build error on `compose` | form not in the repo | see "what is missing" |
| `Bunifu` reference warning / controls missing | DLL not in repo | add your own copy |
| cannot attach `Email Local.mdf` | LocalDB not installed or file path | install the SQL Server Express LocalDB component |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni
