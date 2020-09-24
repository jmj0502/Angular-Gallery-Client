# Angular-Gallery-Client
The clien-side of the photo-gallery API.

## Abstract
A pretty straightforward client-side app I built, in order to learn how to serve images from the Back to the Front-End. This app was build using Angular since I wanted to develop a full-stack TypeScript project. If you want to run this app, you can either clone or download the repo, and follow the instructions avaible on the **Angular Boiler Plate Info** section. **NOTE**: You should run this app alongside [its corresponding API](https://github.com/jmj0502/Angular-Gallery-Server), in order to experiment its full life cycle.

## Project Structure
The bussiness logic of the whole application is contained on the **app** folder inside the **src** directory. The app is structured as follows:
* /Services: In the services folder you'll find the main service of the application and its respective test file. The PhotoServiceService (quite a weird name, I know) takes advantage of Angular's HttpClient, in order to establish a communication process with the Back-End of the application each time a relevant state update takes place in any component.
* /Interfaces: In the interfaces folder you'll find the main interface for the Photo "post", that is implemented within the main service of the app.
* /Components: In the components folder you'll find the different components of the app. The **Navigation component** doesn't carry "that much logic" on, as it's mainly composed of a client-side router, html and css. The **PhotoForm component** implements PhotoServiceService to handle the post creation process and the data submission to the Back-end; its UI is just a form composed of multiple text inputs, and a file input. The **PhotoList component** implements PhotoServiceService to get the data of every photo stored on the db, in order to display such data as a list of "post"; its UI resambles a list of cards that contains information related with a specific post. And finally, the **PhotoPreview component** implements PhotoServiceService to retrieve, update and delete the data related with a specific post based on its id; its UI is composed by different containers that allow you to read and even modify the data of the "post", and two buttons that allow you to update or delete the current post.

# Angular Boilerplate Info

## Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
