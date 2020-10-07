"use strict";

const botUi = new BotUI("my-botui-app");

botUi.message
  .add({
    content: "Hello, this is 'IM Bot' !",
  })
  .then(() => {
    botUi.message.add({
      content: "はじめまして！",
      delay: 800,
    });
  })
  .then(() => {
    botUi.message.add({
      content: "あなたのことは、どのようにお呼びすれば良いでしょう？",
      delay: 1600,
      cssClass: "js-add-space",
    });
  })
  .then(() => {
    return botUi.action.text({
      action: { placeholder: "名前を入力してください..." },
      delay: 2000,
    });
  });
