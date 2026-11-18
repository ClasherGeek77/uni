# java_animation_alice_project

## what it is

a short 3D animation of a fight scene (2019), built in Alice, the block-based programming tool that teaches object-oriented concepts. the whole project is one file, `Alice_Animation_Project.a3p`, with a sound effect and a background music track embedded.

stack: Alice 3 (the file was saved by Alice 3.4.0.0, build 123).

## what you need

- Alice 3, free, from https://www.alice.org/ (Windows, macOS, Linux).
- it is a binary project file, so there is nothing to read on GitHub; you must open it in Alice.

## quick start

1. install and open Alice 3.
2. `File`, `Open`, choose `Alice_Animation_Project.a3p`.
3. press `Run`.

you should see the animated scene play with the battle music and the embedded sound effect. not run here (needs the Alice GUI); the version and the embedded audio files were read from the project archive.

## how it is built

- an `.a3p` file is a zip archive: `programType.xml` is the program, `resources/` holds the audio (`suararkh1.wav`, `RPG Battle Music.mp3`), `thumbnail.png` is the preview.
- to see the code as Alice shows it, open the project and read the methods in Alice's code editor.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| Alice refuses to open the file | wrong Alice major version (this file is an Alice 3 project) | install Alice 3 |
| no music | the audio resource is large (about 3 MB) and slow to load | wait, or check system audio |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni . for a Java project with real source files, see `java_news_app_ui` in the same repo.
