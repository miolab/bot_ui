"use strict";

const botUi = new BotUI("my-botui-app");

botUi.message
  .add({
    content: "Hello, im.",
  })
  .then(() => {
    botUi.message.add({
      content: "はじめまして！",
      delay: 500,
    });
  });
