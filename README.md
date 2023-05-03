# Problem Statement

Website Deployed: https://nzym-technologies-assignment.vercel.app/

Build a table component as shown above.

- Use faker API to populate the table. (https://fakerapi.it/en). Use the Person resource
  from the same.
- Columns
  - Avatar: refers to a person’s image. A sample Avatar will look like this .
    It should show the person’s image. You may display the person’s credentials if
    the person's image is unavailable. i.e. first letters of the first name and last name.
  - Id: refers to person id
  - First Name: person first name
  - Last Name: person last name
  - Gender: person gender
  - Age: person age
  - Contact: person contact
- 🔼 Marked columns will be sortable alphabetically or numerically depending on the
  column type. The sort button should toggle between ascending and descending when
  clicked.
- The drop-down for the Number of rows, should have options -- 10, 15, 30, 50.
  On choosing the number, the number of table rows should update accordingly.
- Each row should be clickable. Clicking the row, should expand within the table and show
  the Person’s complete address.

# Tech Stack

- Next.js
- TypeScript
- Zustand - State management
- Axios - API Fetch
- zod - Object validator and parser

![image](https://user-images.githubusercontent.com/91727830/235979518-fb9cf23e-4b6c-437c-9445-1b252173cf72.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
