# competitive_programming_cpc_2020

## what it is

solutions to programming-contest style problems from a competitive programming course (2020) and one problem from the COMPFEST 12 programming contest. each file is one problem solution that reads from standard input and prints to standard output. the problem statements are not in this repo, only the solutions.

stack: C++, Java and Python 3, one file per problem.

| folder | what is in it | language |
| --- | --- | --- |
| `Pemrograman Dasar` (basic programming) | input/output, branching, loops exercises | C++ (one in Python) |
| `Pemrograman Kompetitif Dasar` (basic competitive programming) | math problems `Math_A` to `Math_D` | Java |
| `Game Theory` | combinatorial game theory, Nim | Python |
| `String Processing` | hashing | Python |
| `Struktur Data Lanjutan` (advanced data structures) | disjoint set, segment tree | Python |
| `COMPFEST 12` | `Angka_Cantik.cpp` | C++ |

## what you need

- a C++ compiler (`g++` or `clang++`), a JDK 8 or newer (`javac`), Python 3.
- nothing to install beyond that, no dependencies.

## quick start

```bash
cd competitive_programming_cpc_2020

# C++
cd "Pemrograman Dasar"
g++ -o /tmp/a "A. Masukkan dan Keluaran A.cpp"
echo "3 4" | /tmp/a
cd ..

# Java
mkdir -p /tmp/cpc
javac -d /tmp/cpc "Pemrograman Kompetitif Dasar/src/Math_A.java"
echo "10 2 3" | java -cp /tmp/cpc Math_A

# Python
echo "2
1 2" | python3 "Game Theory/B. Nim Game A.py"
```

you should see `7` from the C++ program, `7` from the Java program and `YA` from the Python program. these three were run and checked.

## how to read the code

- every program reads its input first (`cin`, `Scanner`, `input()`), so an empty run waits for input instead of printing. type the input or pipe it in.
- `Pemrograman Kompetitif Dasar/src/Math_A.java` counts the numbers up to N divisible by A or B (inclusion-exclusion with gcd), a good first read.
- `Game Theory/B. Nim Game A.py` has the reasoning in comments: XOR of the pile sizes decides the winner.
- comments are partly in Indonesian.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| program prints nothing and hangs | it is waiting for stdin | pipe input with `echo ... \|` or type it and press Ctrl-D |
| `class Math_A not found` | wrong classpath | compile with `-d /tmp/cpc` and run with `-cp /tmp/cpc` |
| `javac` not found | no JDK installed | install a JDK (https://adoptium.net/) |

## next

other small algorithm work: https://github.com/ClasherGeek77/uni (index of all folders). for testing work, start at https://github.com/ClasherGeek77/pytest_web_boilerplate .
