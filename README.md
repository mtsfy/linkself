<h1 align="center">LinkSelf</h1>

## :page_facing_up: Description

LinkSelf is a platform where users can manage multiple links with one link.

## :gear: Tech Stack

- Frontend
  - [Next.js 13](https://nextjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Next Cloudinary](https://next.cloudinary.com/)
- Backend
  - [Express.js](https://expressjs.com/)
  - [Mongoose](https://mongoosejs.com/)
  - [JSON Web Tokens](https://jwt.io/)
  - [MongoDB](https://www.mongodb.com/)

## :rocket: Features

- User authentication with JWT.
- User can manage multiple links for their profile.
- Theme customization for the profile page.
- Unique link for each user profile.
- View analytics for the profile.

## :hammer: Local Installation

### Clone the repository

```sh
$ git clone git@github.com:mtsfy/linkself.git
```

### Backend

```sh
$ cd linkself
$ cd backend
$ npm install
```

Setup environment variables for the backend:

- [MongoDB](https://www.mongodb.com/docs/atlas/getting-started/)

```sh
JWT_SECRET_KEY= # YOUR_SECRET_KEY
PORT=8000
ORIGIN=http://localhost:3000
MONGODB_CONNECTION_URL= # YOUR_MONGODB_CONNECTION_URL from MongoDB Atlas
```

Start the backend server:

```sh
$ npm run dev
```

The backend server will start running on `http://localhost:8000`

### Frontend

```sh
$ cd linkself
$ cd frontend
$ npm install
```

Setup environment variables for the frontend:

- [Next Cloudinary](https://next.cloudinary.dev/installation)

```sh
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000/api
NEXT_PUBLIC_FRONT_URL=http://localhost:3000
NEXT_PUBLIC_JWT_SECRET_KEY= # YOUR_SECRET_KEY (same as backend)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME= # YOUR_CLOUDINARY_CLOUD_NAME from Next Cloudinary
```

Start the frontend server:

```sh
$ npm run dev
```

The frontend will start running on `http://localhost:3000`
