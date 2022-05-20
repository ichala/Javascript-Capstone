![](https://img.shields.io/badge/Microverse-blueviolet) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)


# My Restaurant Application

> The restaurant application majorly displays different categories of meals. The homepage shows a list of meals you can like. The popup window shows more data on the selected meal and the user can comment on it too.

<p align="center">
    This project is part of the Microverse curriculum in Javascript course!
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Screen Shots](#application-screen-shots)
- [Video presentation](#video-presentation)
- [About the Project](#about-the-project)
- [Live Version](#live-version)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Development](#development)
- [Testing](#testing)
- [Built With](#built-with)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

<hr />

## Application Screen Shots

#### Homepage

![homepage screenshot](./src/assets/homepage.png)

#### PopupWindow

![popup-window](./src/assets/popup.png)

<hr />

## Video presentation

[View with Zoom](https://drive.google.com/file/d/1gdzn9vXAoL6oqAK1gyBKHHbU7T90774y/view?usp=sharing)

## Live version

[Website Live Preview](https://chala.dev/)

<hr />

## About The Project

The project has two user interfaces;

    - Homepage : The interface displays the following;
        - A set of meal categories all derived from [Meals DB Api](https://www.themealdb.com/api.php)
        - Likes interaction that displays number of likes for the meal. The user interface is derived from the[Involvement Api](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270)

    - Popup Window : The interface displays;
        - Images of the selected meal.The interface is derived from [Meal by category Api](https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) (An example from seafood category)
        - Comment Section. The users comment are displayed on the page courtesy of the [Involvement Api](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270)

<!-- ABOUT THE PROJECT -->


## Application Instructions

    - Home page
        - When the page loads, the webapp retrieves data from:
            - The selected API and shows the list of items on screen.
            - The Involvement API to show the item likes.
            - The page should make only 2 requests:
                - One to the base API.
                - And one to the Involvement API.
        - When the user clicks on the Like button of an item, the interaction is recorded in the Involvement API and the screen is updated.
        - When the user clicks on the "Comments" button, the Comments popup appears.

    - Comments popup
        - When the popup loads, the webapp retrieves data from:
            -The selected API and shows details about the selected item.
            -The Involvement API to show the item comments.
        - When the user clicks on the "Comment" button, the data is recorded in the Involvement API and the screen is updated.
        - When the popup loads, the webapp retrieves data from:
            - The selected API and shows details about the selected item.
            - The Involvement API to show the item reservations.
        - When the user clicks on the "Reserve" button, the data is recorded in the Involvement API and the screen is updated.
    - Counters: The counters in all the interfaces should show:
        - The number of items (home).
        - The number of comments (comments popup).

## Dependencies

- Webpack
- Jest

## Configuration

- first, clone the project
  Run

```
  git clone https://github.com/ichala/Javascript-Capstone.git
```

- Install the necessary dependancies
  Run

```
  npm install
```

<hr/>

## Development

- Clone the project

```
  https://github.com/ichala/Javascript-Capstone.git
```

<hr/>

## Testing

- Tests have been performed using jest.
- To run test on the project,
  Run

```
  npm run test
```

- Location /src/modules/functions.test.js

## Built With

This project was built using these technologies.

- Javascript
- APIs
- WebPack
- Jest

<hr/>

<!-- CONTACT -->

## contributors

👤 **Ali Jendoubi**

- GitHub: [@iChala](https://github.com/ichala/)
- LinkedIn: [@alijendoubi](https://www.linkedin.com/in/alijendoubi/)

👤 **Joy Kwamboka**

- Github: [@kwambiee](https://github.com/kwambiee)
- Twitter: [@kwambiee](https://twitter.com/kwambiee)
- Linkedin: [Joy Kwamboka](https://www.linkedin.com/in/joy-kwamboka)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ichala/Javascript-Capstone/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgements

- [Microverse](https://www.microverse.org/)
- [Jest](https://jestjs.io/docs/getting-started)
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
