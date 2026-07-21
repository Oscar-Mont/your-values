# App name: Your Values

This application consists of a simple test to help the users find their most important values. It allows anyone to take the test and gives the test results in the end. These can be saved to a pdf file in the user’s computer. 

# Justification

Knowing what is most important to you can help you have a sense of meaning, feel more motivated, rise against unjust circumstances and feel like your life has a direction. 

Values provide a good framework to find what is most important to you!

This app is aimed to be a quick and fun way to get anyone started in exploring their own selves and finding out what is most important to them.

# Requirements

- The app offers a simple test that allows users to find their most important values.
- The test follows the “test workflow” specified in the section by the same name below.
- When taking the test, the test’s results are shown at the end and kept temporarily in the browser’s local storage in case users without an account unexpectedly close their browsers or want to recheck things.
- Users can download a pdf version of their test results when shown the test results page, just after taking the test, independently of the sign in status.
- The UI must inspire calm and concentration, being simple and nice to look at.
- The UI must be responsive.

# Test Workflow

The test has a library of values stored in JSON and passed as an array. The array of values has objects (values)with an  `id` and a `name` properties, for example: `{id: 1, name: courage}` . The array will be of 30 values, being:

```json
{
	//to be defined
}
```

1. When the user starts their test, they are presented with 10 values in a container in the center of the screen and are required to pick which 5 of those they find more important than the others.
2. Once the user selects 5 values, the “not so important” values are then discarded and the “selected values” stored. The next round presents the user with other 10 values and follows the same logic.
3. The logic repeats with multiple rounds, until the user is left with only five values.
4. At this moment, the app lets the user know they have successfully finished the test and presents them with a page with their top values listed. This page should be able to support “print to pdf” functionality in modern browsers to allow users save their results.

# Tech Specs.

To be updated once the app is finished.

# Design

The images for the general design of the application are found in the UI folder in the docs. Currently not there, will be added later.