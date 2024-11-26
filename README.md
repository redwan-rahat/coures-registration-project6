**Add at least 3 Project features**


1. Credit Limit Management:
   1. Users can take 20 hours to each user account upon registration 

   2. Implement checks during course selection to ensure that users cannot enroll in additional courses if limit exceeds 

2. Course Selection Workflow:

   1. Design a user interface that guides users through a single-course selection process. 

   2. Users cannot select a course twice.

3. Credit Balance Tracking:
   1. Display the total balance to ensure a proper calculation for the user.

   2. Implemented dynamic updates to reflect changes in credit balance immediately after users add or remove courses, ensuring accurate and up-to-date information at all times.


   **Discuss how you managed the state in your assignment project.**

   => 
   In my assignment project, state management was primarily handled within React components using the useState hook. 
   I fetched user data from a JSON file using the fetch API and stored it in component state to facilitate dynamic rendering of user information. 
   As users interacted with the application, such as selecting courses or updating personal details, state was updated accordingly to reflect these changes in real-time. 
   I ensured proper data flow by passing state and callback functions as props between parent and child components, maintaining a single source of truth for the application's state.
    Additionally, I employed conditional rendering to control the display of components based on the fetched user data.