Note:
1. depending on where you are deploying your application, and you need to set env variables for the provider

2. you need to set it up accordingly.

3. netlify, vercel and heroku will have different configuration files for each

Netlify

* Instantly build and deploy your sites to our global network from Git. Custom domains, HTTPS, deploy previews, rollbacks, and much more.



Deploying a React App to Netlify

After making our apps look amazing we want to show it off to the world!

Lets host our React App using Netlify.

Account creation:

1. First go to https://www.netlify.com/ and create an account using Github.

installation of netlify cli

2. Install the netlify CLI(command line interface) using npm install netlify-cli -g.

package.json update:

3. In your package.json add a field name with value

"homepage":"."

Why? Read more here https://create-react-app.dev/docs/deployment/#serving-the-same-build-from-different-paths

create a build:

4. Next go to your React App folder in the command line and run the command npm run build. This will do all the work necessary to have your app ready for deployment. (If you are not able to get routes working, sometimes its due to BrowserRouter, you can use HashRouter, this works fine when deploying to netlify)

If you have react-router-dom installed, then you need to do an additional step of setting redirects on netlify

In your build folder, create _redirects file.
Add the following to the _redirects file
/* /index.html 200

deploy command:

5. Now type netlify deploy and visit the link it provides to verify your account.

6. Once you are done verifying, it should give you some options, select + Create & configure a new site .

7. Select a team, this would usually be the same as your Netlify-ID.

8. Then give your website some unique name.

9. In the deploy folder option type build.

10. Your draft should be live on the Live Draft URL:. Visit the link and make sure your application is working correctly.

deploy prod

11. If you application is working, type netlify deploy --prod to deploy the application. The deploy path should be build.

success!

12. Visit the live URL to see your website live on the Internet for anyone to visit. You will have to run the deploy process everytime to see changes to your website. For more information about automating deployments, do read up about CI/CD integration. Read more


Deploying a React app with Vercel or Now.sh
NOTE: now.sh is now vercel

installation

1. install now globlaly npm i -g vercel.

2. move inside your react app folder (make sure you are on the entry folder package.json etc is located.

3. run the command vercel from terminal.

4. If not logged in, or if no account created you might be asked to. once login and authentication is setup, the terminal will ask you a few questions to setup and deploy.

5. Once that is over, it will show its ready and gives you a production link.

6. If you want to deploy it to a production build, then do vercel --prod.


Heroku

You can host frontend and backend applications on heroku:

they provide a free service
but if it is inactive for more than 2 hours, the server gets shut down, and needs to start again (causing a coldstart)
deploy react with heroku with zero configuration
npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open