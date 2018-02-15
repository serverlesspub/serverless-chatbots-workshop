# [2/9] Reading your chatbot logs?

Second exercise! Good job!

In this exercise you should create and read logs from your chatbot. Knowing how to log is useful, in case you make some mistakes long the way.

In your chatbot, set `console.log` as your `log` function. Then on the beginning of your chatbot, invoke it and pass some log message, such as "Logging from Starman bot!".

Then open your browser and go to AWS web console. There open up your AWS CloudWatch service and find your chatbot Lambda logs.

## Tips

Here are a few tips that can help you to do this exercise:

- You can use CloudWatch from [AWS Web Console](https://console.aws.amazon.com/).
- You can also access CloudWatch logs using AWS CLI, using `aws logs get-log-events` and `aws logs filter-log-events` commands.
- Add `help` option to the AWS CLI command to see command usage. For example, `aws logs get-log-events help` will show you the info about `get-log-events` command.

You can see our solution in a [code section](../code/exercise-02) of this repository.

---

[![Next](../assets/next.png)](./exercise-03.md)

or [go back](./exercise-01.md).

