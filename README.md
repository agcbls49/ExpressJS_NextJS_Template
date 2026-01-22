# NextJS + ExpressJS Template
This template is for using NextJS in the frontend and ExpressJS in the backend. 

**NOTE: NextJS code and ExpressJS are both in TypeScript. Package installs are listed sequentially for personal tracking but can be simplified using one line installs.**

## Use this Template
Click `Use this template` button and select `Create a new repository` then modify needed details. Install GitHub Desktop and create a folder to put this cloned project. In GitHub make sure that `C:\Users\YourUsername\Documents\YourFolder\` is selected as a directory and copy the url of this project. Once cloned, the folder will now have the following inside:
```
frontend
backend
README.md
```

Install dependencies:
```
cd frontend/
npm install
cd ..
```

Inside backend, if the `package.json` is missing then do `npm init -y` and install dependencies:

```
cd backend/
npm install
cd ..
```

or in one line do `npm init -y && npm i express cors @prisma/client && npm i -D nodemon typescript tsx @types/express @types/cors @types/node prisma && npx prisma init && npx tsc --init`.

## (If not using the template) Setup
These steps are what was done to create the template.

```
cd backend/
npm init -y
touch api.ts
cd backend/
npm init -y
touch api.ts
npm i express cors @prisma/client
npm i -D typescript nodemon tsx prisma @types/node @types/express @types/cors
npx prisma init
npx prisma generate
npx tsx api.ts
```

Inside `backend/package.json` rename `"main": "index.js"` to `"main": "api.ts"` and inside `"scripts":{` add 
```
"start": "node api.ts",
"dev": "nodemon --exec npx tsx api.ts" 
```

```
cd ..
cd frontend/
npx create-next-app@latest .
```

Choose `Yes, use recommended defaults` using the `Enter` key. The default configurations include TailwindCSS, ReactJS and TypeScript.

## Setup CORS (Cross-Origin Resource Sharing) Regardless
Since frontend runs on port 3000 and backend runs on port 4000.

```
cd ..
cd backend/
npm install cors
```

Inside `frontend/next.config.ts` below `/* config options here */` add 
```
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:4000/api',
      },
    ];
  },
```

For code, go to the following files and copy paste in desired project:
```
backend/api.ts
frontend/app/page.tsx
frontend/app/components/UserList.tsx
```

## Run the Template
Open two terminals. Do this for the frontend:
```
cd frontend/
npm run dev
```

Do this for the backend:
```
cd backend/
npm run dev
```

**NOTE: Make sure both the two localhost are opened by doing the commands above.**

Check API json object by pasting this in the browser tab: `http://localhost:4000/api`
