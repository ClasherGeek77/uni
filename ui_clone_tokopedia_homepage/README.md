# ui_clone_tokopedia_homepage

## what it is

a static copy of the Tokopedia (Indonesian online marketplace) home page layout (2020, web programming assignment): top navigation, banner, "Kategori Pilihan" (featured categories), "Top Up & Tagihan" (top-ups and bills), "Terlaris Untukmu" (best sellers), "Official Store", "Bayar di Tempat" (cash on delivery), a mask section and a footer. one HTML file, no build step.

stack: HTML, CSS, Bootstrap 4.5.2, jQuery, Popper, bootstrap-table and Feather icons, all loaded from public CDNs. images are in `assets/`.

## what you need

- a browser and an internet connection (the CSS and JS libraries load from CDNs; offline the page loses its styling).

## quick start

```bash
cd ui_clone_tokopedia_homepage
open index.html        # macOS; on Linux use xdg-open
```

or serve it:

```bash
python3 -m http.server 8000
```

and open http://localhost:8000/ .

you should see the Tokopedia-style home page with a banner and the sections above, using the images from `assets/`. not opened in a browser here; the libraries and assets were checked in the file.

## how to read the code

- everything is in `index.html`: `<head>` pulls Bootstrap and the libraries, the page uses Bootstrap's grid, the last `<script>` activates the Feather icons.
- the same page is copied into `web_programming_basics/week3/Web Tokopedia Clone/` in this repo (the two versions differ slightly).

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| unstyled page, plain text | CDN unreachable or offline | connect to the internet |
| images missing | `assets/` moved | keep `index.html` next to the `assets/` folder |
| icons missing | the Feather CDN script blocked | allow `unpkg.com` |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni . the weekly exercises that led up to this page are in `web_programming_basics`.
