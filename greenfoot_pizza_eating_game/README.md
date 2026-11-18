# greenfoot_pizza_eating_game

## what it is

a small arcade game (2019, first-year Java course). you steer a robot with the arrow keys from the top-left corner to a house in the bottom-right corner, eating pizzas on the way and avoiding walls and a spinning block.

stack: Java with the Greenfoot framework (project file version 3.0.0).

rules, taken from the code (`RobotWorld.java`, `Robot.java`):

- 3 lives. touching a wall or the block costs a life and sends the robot back to the start. losing all lives is game over.
- a timer counts down from 1000; each pizza adds 200. running out of time costs a life.
- reaching the house raises the level. the game is won after level 2 ("YOU WIN!").

## what you need

- Greenfoot 3.x, free, from https://www.greenfoot.org/download (it bundles the JDK it needs on most platforms).

## quick start

1. install and open Greenfoot.
2. `Scenario` menu, `Open...`, choose this folder (`greenfoot_pizza_eating_game`, the one that contains `project.greenfoot`).
3. press `Compile All` if it asks, then `Run`.
4. use the arrow keys.

you should see an 800x600 world with the robot at the top-left, pizzas, brick walls, one rotating block, a house at the bottom-right and `Lives`, `Score`, `Time Left` text at the bottom-left.

not run here (needs the Greenfoot GUI); the rules above are read from the source.

## how to read the code

| file | what it does |
| --- | --- |
| `RobotWorld.java` | the world: places the actors, builds level 2, shows "YOU WIN!" |
| `Robot.java` | the player: movement, collisions, pizza eating, lives, timer |
| `Block.java`, `Wall.java`, `Pizza.java`, `Home.java`, `ScorePanel.java` | the other actors |
| `images/`, `sounds/` | sprites and sound effects loaded by name from the code |

comments in the code are partly in Indonesian.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| Greenfoot says the scenario cannot be opened | you picked the parent folder | open the folder that holds `project.greenfoot` |
| no sound | audio device or Greenfoot sound setting | check system audio; sound effects are `.wav` files in `sounds/` |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni
