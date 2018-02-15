# [3/9] Simple, built-in FB NLP integration

The third. Seems quick. Well, now the fun starts.

In this exercise, your chatbot will start talking and replying to basic greetings. Like a baby! But a polite one.

Your chatbot should be always prepared to answer to basic greetings, "bye" and "thank you" messages.

**This exercise's task is** to make your chatbot reply to these messages. For example, when user says "thank you", your chatbot should reply with "You are welcome".

To do so, you will need to enable Natural Language Processing. This does seem difficult, especially if you've never done it before.

Luckily, Facebook has a developed a lightweight NLP tool to ease and help out with your chatbot development. This tool is actually built-in within Facebook Messenger and you can use it already. Read about it in the Facebook Messenger documentation and enable it for your chatbot!

## Tips

Here are a few tips that can help you to do this exercise:

- You can read more about Facebook Messenger's built-in NLP integration [here](https://developers.facebook.com/docs/messenger-platform/built-in-nlp)
- Make sure you enabled built-in NLP integration as explained in [FB setup section](../preparation/FB-setup.md).
- You can access full Facebook Messenger reply in Bot Builder callback via `message.originalRequest`.
- NLP entities are in `message.originalRequest.message.nlp`.
- Each of the recognised entities is provided as an array in `entities` object, for example: `message.originalRequest.message.nlp.entities['thanks'].length`.
- Each entity has a confidence, which is NLP's level of confidence (between 0 and 1) that user said exactly that, you should look for confidence with more than 80%. For example, use `message.originalRequest.message.nlp.entities['thanks'][0].confidence` to check confidence level for "thanks" entity.

------

[![Next](../assets/next.png)](./exercise-04.md)

or [go back](../exercise-02.md).