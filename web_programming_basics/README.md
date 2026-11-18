# web_programming_basics

## what it is

the weekly exercises of a web programming course (September 2020): plain HTML, CSS and JavaScript pages, one folder per week. no build step, no server.

| folder | what is in it |
| --- | --- |
| `week1/week1.html` | HTML basics: a nav bar with in-page anchors and three headings with paragraphs |
| `week2/week2.html`, `week2/assets/style.css` | the same page styled: black nav bar from an external stylesheet, plus an inline `<style>` block |
| `week3/week3 .html` | an "Administrator" dashboard with Bootstrap 4: navbar, a form (invoice no, notes) and a sortable table (bootstrap-table). also `Web Tokopedia Clone/`, an early version of `ui_clone_tokopedia_homepage` |
| `week4/index.html`, `week4/index.js`, `week4/typewriter.htm` | JavaScript: `index.html` has a "Click me!" button and an item list with add/validate logic ("item cannot be empty", a length warning); `typewriter.htm` is an on-screen typewriter with a caps-lock toggle |
| `week5/index_1.html` | To Do List: add and remove list items with the DOM API |
| `week5/index_2.html` | mouse over / mouse down event demo on two boxes |
| `week5/index_3.html` | radio-button rating form |

## what you need

- a browser. week 3 loads Bootstrap, jQuery and bootstrap-table from CDNs, so it needs internet; the others work offline.

## quick start

```bash
cd web_programming_basics
open week1/week1.html          # macOS; on Linux use xdg-open
open "week3/week3 .html"       # note the space before .html in the file name
open week5/index_1.html
```

you should see: week 1 a page with three headings and a nav bar that jumps to each; week 5 `index_1` a text box with Add and Remove buttons that add a line to a list or remove the last one; `index_2` two red boxes that change text on mouse over and on click. not opened in a browser here; the contents were read from the files.

## how to read the code

- go in week order, each folder builds on the previous one: tags, then styling, then Bootstrap layout, then JavaScript logic, then DOM events.
- comments are partly in Indonesian.
- known bug worth finding as an exercise: in `week5/index_1.html` the `remove()` function ends with `ul.removeChild(li[li.length = 1])`, which assigns `length` instead of reading it, so the call tries to remove `li[1]` and throws a TypeError when there is no second item (it also runs after the successful removal just above it).

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| week 3 page has no styling | no internet for the CDN | connect, or download Bootstrap locally |
| `week3/week3 .html` not found | the file name contains a space | quote the path |
| `week4/index.html` buttons do nothing | `index.js` not found next to it | keep both files in `week4/` |

## next

the finished page built after these exercises: `ui_clone_tokopedia_homepage`. index of all course projects: https://github.com/ClasherGeek77/uni
