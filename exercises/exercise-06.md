# [6/9] How do I get back to the menu? Adding quick replies

It's time for the 6th exercise. You've progressed a lot!

When you've implemented the menus from the previous exercise, you've probably noticed that when going deeper into the submenus and so forth, you can't restart the process in case you made a mistake. 

It might not look to bad when you have a single level menu tree, but when having additional submenus such as the Photos from NASA's Mars rovers, things get ugly pretty fast.
Your chatbot should be able to lead your users back to your menus during the whole conversation.

Luckily, Facebook has a feature called "Quick Replies". Quick replies help you to show buttons in-conversation that can lead to other content or information within your chatbot.

*Your task* is to enable Quick Replies and lead your users back to the main menus or parent menus any time in the conversation.

## Tips

Here are a few tips that can help you to do this exercise:

- Read more about Facebook Messenger's Quick Replies here: https://developers.facebook.com/docs/messenger-platform/reference/send-api/quick-replies.
- Use Claudia Bot Builder's Message builder for adding quick reply, as described [here](https://github.com/claudiajs/claudia-bot-builder/blob/master/docs/FB_TEMPLATE_MESSAGE_BUILDER.md#example).
- Quick replies are returning postback, not text, so make sure you are showing the full menu when you receive postback from quick reply button. 

------

[![Next](../assets/next.png)](./exercise-07.md)

or [go back](../exercise-05.md).