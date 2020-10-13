Demo: [See here](https://eager-hugle-373cdd.netlify.app/)

### Changes to be made for mobile devices

- Instead of a full blown preview, the preview will limit to a set of 8-12 words and will keep updating once those words have been typed
- The text input container will no more be useful since it will take away a lot of real estate. What this will do is it will only show the preview text being updated as typed and will keep updating. One drawback of this is that it may/may not have a good experience since the whole preview won't be visible but it will be efficient in a lot of devices
  - Once the test is complete, the whole preview can be displayed with wrong and right indications giving a view of what went wrong and right.
- This way the logic to convert string to a span element with appropriate colors will be optimal and won't be heavy on the devices
- The TestInput component will no more be relevant since the preview will directly update as the user types with the on-device keyboard
- The relevant components in this case would be
  - StatsView
  - TestContainer
    - The `getParsedText()` function will start using a sliding window algorithm to show what is needed and this can be memoized for less processing
  - PreviewText
