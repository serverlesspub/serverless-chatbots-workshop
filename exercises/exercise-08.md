# [8/9] Make it more human-like: add typing

So in the previous exercise you've made your chatbot work and provide space photos and give launch information when asked by your customers. Woot!!

But as you've probably noticed, APOD description is very large, and if you just show it, user don't know what just happened. 

Wouldn't it be great if your chatbot could show the "Typing" Facebook indicator, like you would do, so that you and your users would get part of the text each few seconds?

These "Typing" indicators called Sender Actions.

**Your task is** to add this "Typing" Sender Action to your chatbot whenever it's getting it's photos or any kind of third party content. 

## Tips

Here are a few tips that can help you to do this exercise:

- You can add typing indicator by using Claudia Bot Builder's Message builder, as described [here](https://github.com/claudiajs/claudia-bot-builder/blob/master/docs/FB_TEMPLATE_MESSAGE_BUILDER.md#pause-template).
- Make sure you don't take too long break between the messages, ie. 1-2 seconds is more than enough.
- Make sure you increase your Lambda function timeout (default is 3 seconds), by using `--timeout` option with your `claudia update` command.
- To read more about Sender actions, visit [the docs](https://developers.facebook.com/docs/messenger-platform/send-messages/sender-actions).

------

[![Next](../assets/next.png)](./exercise-09.md)

or [go back](../exercise-07.md).