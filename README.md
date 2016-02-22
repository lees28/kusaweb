KUSA
====

This is the website for Duke KUSA (Korean Undergraduate Student Association): www.dukekusa.com

It is written in Python/Django and deployed with heroku.


Setup for running the app locally
-----
First, make sure you have the <a href="https://devcenter.heroku.com/articles/getting-started-with-python#set-up">heroku toolbelt</a> installed for your OS. Then, create a heroku account and/or use your existing heroku account to login:

```
$ heroku login
```

Next, clone this repo and cd into it:
```
$ git clone https://github.com/alexsong93/KUSA.git
$ cd KUSA
```

The <code>requirements.txt</code> file lists the app dependencies and their versions for this app. To install these dependencies, first, install Virtualenv, if you don't have it:
```
$ pip install virtualenv
```

Next, create a virtualenv for the app in the root directory:
```
$ virtualenv venv
```

Then, activate the virtualenv:

```
For Windows  : $ venv\Scripts\activate.bat
For Mac/Linux: $ source venv/bin/activate
```

You will now be inside your virtualenv. Run the following command to install the dependencies:
```
$ pip install -r requirements.txt
```

The app is now ready to be run locally. Start the application by running <code>heroku local web</code>:
```
$ heroku local web
forego | starting web.1 on port 5000
```

Open <a href="http://localhost:5000">http://localhost:5000</a> in your browser to see the app running locally!


Pushing local changes
-----
If your changes add any additional dependencies, add them (and their versions) to the requirements.txt file, and install them using the following command:
```
pip install -r requirements.txt
```

After making changes and testing your code, commit your code as usual (using <code>git add</code> and <code>git commit</code>). Then push the modified code to this git repo using <code>git push</code>. 

To push to the heroku server, make sure you are authorized (i.e. you are a collaborator for this heroku app.) Then, issue the following command
```
$ git push heroku master
```

To see your changes that you've made, head over to www.dukekusa.com!

