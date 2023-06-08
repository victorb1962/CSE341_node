# Lesson 7 Class Solution

This is the completed collection of code for the lesson 7 class activity

## Video

[Video walkthrough](https://youtu.be/52gurOGtaJM)

### .env

If you need help getting your env file set up, you can see how in the video.

### How to incorporate OAuth

- Do a google search for 'nodejs rest oauth' to see whats all available

### Auth0

- go to auth0.com / documentation / backend/api / node (express) api / login and download sample
- login with google / anzac62@gmail.com /
- goto menu / Applications / Applications / Create Application
  o Name: cse341-08
  o Select Regular Web Apps
  o Click Create

- What technology are you using: Node.js
- Choose your path: I want to integrate with my app
  o Note: local url: http://localhost:3000/callback (http)
  render url: https://yourAppName.render.com/callback (https)
- Click: Save Settings And Continue

- Copy sample code provided to server.js

- Get Auth0 / Application / Setting / paste into .env file for: ISSUER_BASE_URL, CLIENT_ID, BASE_URL, SECRET
  o Note: SECRET can be anything longer that 32 char

- Edit server.js to accomodate .env file

- Click: Auth0.com / Applications / Applications / Next:Test Your Login - to find test details for local testing

VS Code / Terminal:
npm init -y
npm i --save express express-openid-connect dotenv
npm start

Browser test: localhost:3000

- 'Logged out'

Browser test: localhost:3000/login

- get a login page
  o Login with Google profile: aaaaa99@gmail.com
  o Reply to 2FA prompt
- 'Logged in'

Browser test: localhost:3000/profile

- shows google user details with a link to my thumbnail: https://lh3.googleusercontent.com/a/AAcHTtfTUSbr38yhnUI2zJTPfwTkc9mtFZGaMjX_kpNW=s96-c

Browser test: localhost:3000/logout

- 'Logged out'

### Final Notes

Go to browser / inspect / Application / Storage / Local Storage - to find session variables
- tokens being stored
  - result is when you refreash browser, you remain logged-in

Using OAuth, you are not liable since you are not storing sensitive data.
- your simply accessing other verdor login for authentication i.e Google, Facebook, etc.

### To Do for Production UPLOAD

- edit env file for production (https)
