# Development of Moral Map using MERN

This document provides an overview of the MERN stack and details the steps taken to develop the **Moral Map Project**.

---

## **What is the MERN Tech Stack?**
M.E.R.N. is a combination of technologies used to build modern web applications. It comprises the following components:

1. **MongoDB**: A NoSQL database that stores data in a flexible, JSON-like format. It is used to manage data such as user information, ethical dilemmas, and responses in the Moral Map project.

2. **Express.js**: A Node.js framework for building server-side applications. It handles routes, middleware, and API endpoints.

3. **React.js**: A JavaScript library for building interactive user interfaces. It is used in the Moral Map project to present dilemmas to users and collect their responses.

4. **Node.js**: A runtime environment for executing JavaScript on the server. It powers the backend of the project and integrates all the stack components.

---

## **How Moral Map Was Developed**
The development process involved several steps to build the frontend, backend, and database components and host the application on Render.

### **1. Database Setup (MongoDB)**
- A MongoDB Atlas database was created to store data for:
  - **Users**: Demographic information as well as their responses to each dilemma.
  - **Dilemmas**: Ethical dilemmas and their response options.
- Collections were structured with schemas using Mongoose for consistency and validation.

### **2. Backend Development (Express.js + Node.js)**
- **Express.js** was used to create a RESTful API for managing data. Key routes include:
  - `/api/dilemmas/sample`: To fetch a randomized sample of 10 dilemmas.
  - `/api/users/:userId/responses/bulk`: To upload all of the user responses to MongoDB once they completed the survey.

### **3. Frontend Development (React.js)**
- **React.js** was used to build an interactive interface:
  - A **user form** collects demographic information.
  - A **dilemma screen** displays dilemmas one at a time and allows users to respond.
- State management was handled with React hooks like `useState` and `useEffect`.
- API calls were made using `fetch` to communicate with the backend.

### **4. Hosting the Application on Render**
- The React frontend was deployed as a static site, with a proxy setup to connect it to the backend API.

---

## **Next Steps**
Now that our application is deployed, we will be able to collect large amounts of data from our crowd. Our next step will be to build an aggregation pipeline to collect all of our data and
perform various quality control practices. The current functionality of said practices are located in this repository in src/, and will need to be integrated when enough data is collected. Since 
all of the answers are subjective, we will be filtering out only those who fail the attention check or have an abnormal trend in their answers (e.g. Unsure for everything). After our data is 
collected and we have performed quality control, we will then use various machine learning methods such as sentiment analysis or hierarchical clustering to derive insights from the responses to
our ethical dilemmas. 
