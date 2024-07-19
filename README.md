# Fake User Data Generator

This web application allows users to generate fake (random) user data with customizable parameters. It provides a simple interface to select a region, specify the number of errors per record, and define a seed value for randomization. The generated data is displayed in a table with support for infinite scrolling.

## [Live Demo](https://fake-users-generator.netlify.app/)

Please click on the link above to see the deployed app.

## Features

- Region Selection: Choose from at least three regions (e.g., Poland, USA, Georgia). The application will generate names, addresses, and phone numbers relevant to the selected region.

- Error Specification: Use a slider (0 to 10) and a bound number field (max value 1000) to specify the number of errors per record. Errors are simulated data entry errors that are randomly distributed in the generated records.

- Seed Value: Define a seed value or use the [Random] button to generate a random seed. The seed value influences the randomness of the generated data.

- Automatic Updates: The table below the controls automatically updates to show new records (20 at a time) whenever a parameter changes.

- Infinite Scrolling: The table supports infinite scrolling. As users scroll down, additional records (10 at a time) are dynamically loaded and appended to the table.

## Table columns

1. Index: A sequential number (1, 2, 3, ...) with no errors.
2. Random Identifier: A unique identifier with no errors.
3. Name: Includes first name, middle name, and last name formatted according to the selected region.
4. Address: Various formats such as city+street+building+apartment or county+city+street+house.
5. Phone: Multiple formats including international and local versions.

## Error definition

An error is an emulation of data entry mistakes. The number of errors per record is determined by the user through the slider and number field. The error settings are as follows:

- 0 errors: No errors in the data.
- 0.5 errors: Errors occur with a probability of 0.5 per record.
- 10 errors: Each record contains 10 errors.

## Installing

1. Clone the repository
2. Install dependencies. Run the next command in the root folder of this app.

```
npm install
```

3. Run the app. In the same path where you installed the dependencies run the next command to run the app in dev mode.

```
npm run dev
```

## [Video](https://drive.google.com/file/d/1JD7Ufd0yApTYj6Z0Qq54Xm4YVb6MTYL1/view?usp=sharing)

Click on the link above to see a video on how the app works.
