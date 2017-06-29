# Deployment
* master
* staging

# Proxy
server.js


```js
app.get('/github/*' proxyGithub);
````

1. install heroku -cli tools
  * npm i -g heroku-cli or brew install heroku
2. create dir and git init
3. heroku create (check: git remote -u)
4. ACP (push: git push heroku master)
5. heroku apps:rename new_app_name
6. provision DB ( Resources tab - add-ons: heroku postgres)
7. add environment variable to our server file.
8. added our github token as a config var in heroku
9. git push heroku master

Dashboard > Resources > Add-Ons > Postgres > Provision = creates env variable
Settings > Config Vars > C&P DATABASE_URL

Set in server.js:
process.env.DATABASE_URL

Now set GITHUB_TOKEN



***
# From Brian:

*1* - Install Heroku CLI tools: `npm i -g heroku-cli` *or* `brew install heroku` (if on a mac)
*2* - `cd` into project and run `git init` for git tracking
*3* - run `heroku create` - this will create heroku tracking for your app
*4* - ACP as normal with the exception of the push - you will be pushing to heroku `git push heroku master`
*5* - if you want to rename your app (or if you *did not* do that initially) - `heroku apps:rename newAppName`
*6* - provision the database in heroku - *resources* tab, then type “postgres” in the Add-Ons field - select and provision the free one
*7* - add the `DATABASE_URL` env variable to your app - `process.env.DATABASE_URL`
*8* - add your github token as a config var in Heroku - *settings* tab, then add `GITHUB_TOKEN` and the value
*9* - `git push heroku master` - your app is live!
