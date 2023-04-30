# Share Stuff API

**The aim of the project was to learn how to write an API for a database**

## Description

This application is an API to ShareStuff database based on MSSQL Server database. The database is set up on a free server https://somee.com.
The application has been deployed on https://render.com

## Documentation

Based URL: https://sharestuff.onrender.com

| **type** | **path**               | **description**                                 | **returned value**         | **addictional descrition**                          |
| -------- | ---------------------- | ----------------------------------------------- | -------------------------- | --------------------------------------------------- |
| get      | /api/stuff             | Select all stuff                                | id, name, description, img |                                                     |
| get      | /api/stuff/:id         | Select stuff details for specific stuff id      | id, name, description, img |                                                     |
| get      | /api/reservations/:id" | Select stuff reservations for specific stuff id | date, reservations         | reservations=0 => free, reservations=1 => booked up |
| post     | /api/stuff             | insert new stuff                                |                            |required object parameters: name, description                                                     |
|post          | /api/reservation        | insert new reservation                                                |                            |  required object parameters: stuffId, startDate, endDate                                                   |
|          |                        |                                                 |                            |                                                     |
|          |                        |                                                 |                            |                                                     |
|          |                        |                                                 |                            |                                                     |
|          |                        |                                                 |                            |                                                     |

## Technologies

- JS Express
- JS axios async/await function
- mssql

## Available Scripts

In the project directory, you can run:

### `npm start`

This command runs in the root directory of your app and is responsible for starting its processes. It is typically used to start a webserver for your app. It can access environment variables defined by you in Render.

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm install`

This command runs in the root directory of your repository when a new version of your code is pushed, or when you deploy manually. It is typically a script that installs libraries, runs migrations, or compiles resources needed by your app.
Builds the app for production to the `build` folder .\
