# Hello world from Starman chatbot

Hello! Welcome to your first exercise and your first step towards a Starman chatbot!
In this exercise you will write a simple Hello World chatbot. 

But before doing anything, make sure you have fulfilled the workshop prerequisites.

First, go to your terminal and create your chatbot's project folder. You can name it any way you like.
While there, initalize your Node project by running `npm init` and filling up the project details.

Next, install Claudia Bot Builder as your project dependency by running `npm install claudia-bot-builder -S`.

Now, in your project folder, create a `bot.js` file that will be the starting point for your chatbot.

Your first task is to write a chat bot that will always reply with `Hello from Starman bot`. To see how to dot it with Claudia Bot Builder, take a look at [Claudia Bot Builder API docs](https://github.com/claudiajs/claudia-bot-builder).

After you've written it, be sure to create your AWS Lambda function and deploy your chatbot by running `claudia create --region eu-central --api-module bot.js`.