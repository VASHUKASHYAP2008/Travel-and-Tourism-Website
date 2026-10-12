# Wanderlore - Travel and Tourism Website

A responsive travel and tourism website for popular destinations in India, built with plain HTML, CSS and basic JavaScript. It has no frameworks or libraries, so it runs by opening one file in a browser.

## Features

- **Navigation bar:** sticky menu with links to every section, and a toggle menu on mobile screens.
- **Hero section:** travel-themed background (sunset sky, sun and mountains drawn with CSS) and a dropdown to search a destination.
- **Popular destinations:** six destination cards (Ladakh, Goa, Jaipur, Kerala, Andaman Islands, Manali) with a short description and best time to visit.
- **Category filter:** show All, Mountains, Beaches, Heritage or Nature destinations.
- **Travel packages:** three packages with a travellers input that updates each package total.
- **Book Now buttons:** choose the matching destination in the enquiry form and scroll to it.
- **Top attractions:** a list of must-see places.
- **Travel information:** best time to visit, visa, packing and transport tips.
- **Enquiry form:** validates the name and email, then shows a thank-you message.
- **Responsive design:** one breakpoint at 800px switches the cards to one column and turns the menu into a toggle.

## Project Structure

```
basic/
├── index.html    # Page structure and content
├── style.css     # Styling, background and responsive layout
├── script.js     # Interactivity (menu, filter, search, totals, form)
└── README.md     # This file
```

## How to Run

1. Download all files into one folder.
2. Open `index.html` in any web browser (Chrome, Edge, Firefox or Safari).

No installation or internet connection is needed.

## JavaScript Overview

| Function | What it does |
| --- | --- |
| `menuBtn.onclick` | Opens and closes the mobile menu |
| `filterCards(type)` | Shows only destination cards of the chosen category |
| `searchDestination()` | Shows only the destination picked in the hero dropdown |
| `updateTotals()` | Multiplies each package price by the number of travellers |
| `bookNow(place)` | Selects the destination in the form and scrolls to it |
| `checkForm()` | Checks name and email and shows an error or success message |

## Customisation

- **Add a destination:** copy a `<div class="card" ...>` block in `index.html`, change its text, and set `data-type` (mountain, beach, heritage or nature) and `data-name`. Add a matching `<option>` in the hero dropdown and the form dropdown.
- **Change prices:** edit the number inside `<span class="price">` in `index.html`.
- **Use a real photo as the hero background:** save a photo as `photo.jpg` in the same folder, then replace the `.hero` background in `style.css` with:

  ```css
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url("photo.jpg") center / cover;
  ```

- **Change colours:** the main colours are teal `#0f5f6b` and yellow `#ffc107` in `style.css`.

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, media queries)
- JavaScript (DOM manipulation, events, form validation)

## Notes

The enquiry form does not send data anywhere. It only validates the input and shows a confirmation message in the browser. To receive real enquiries, connect it to a backend or a form service.
