# [4/9] Let's chat: small talk integrations

Great, it's time for the fourth exercise!

In this exercise, you task will integrate Dialogflow, a complete NLP library to your chatbot. 

In the previous exercise, you've easily made your first basic NLP integration. Yes, your chatbot can say goodbyes and and greet your customers, but this might not be enough. Your chatbot should be able to do some small talk as well. That will impress your users, increase their interaction with your chatbot and they will share it with their friends too.

This exercise's task is to implement small talk in your chatbot, using Dialogflow.

## Tips

Here are a few tips that can help you to do this exercise:

- Make sure you configured Dialogflow and enabled Small Talk integration, as explained [here](../preparation/Dialogflow-setup.md).

- To get a response from Dialogflow, send POST request to https://api.api.ai/v1/ with following headers:

  ```json
  {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_CLIENT_TOKEN"
  }
  ```

  and following payload:

  ```json
  {
    "query": "MESSAGE_FROM_YOUR_USER",
    "lang": "en",
    "sessionId": "SESSION_ID"
  }
  ```

  where `SESSION_ID` can be for example sender ID that you can get from `message.sender`.

  Read more about Dialogflow API and SDKs here: https://dialogflow.com/docs/sdks#api_v1.

- You can use [minimal-request-promise](http://npmjs.com/package/minimal-request-promise) or [node-fetch](http://npmjs.com/package/node-fetch) to send POST request from your bot.

- Make sure you don't break Promise chain (always  `return` your promise) :) Breaking Promise chain will break your Claudia Bot Builder based bot

------

[![Next](../assets/next.png)](./exercise-05.md)

or [go back](../exercise-03.md).