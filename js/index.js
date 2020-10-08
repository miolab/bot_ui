"use strict";

const botUi = new BotUI("my-botui-app");

botUi.message
  .add({
    content: "Hello, this is 'IM Bot' !",
    delay: 150,
  })
  .then(() => {
    botUi.message.add({
      content: "はじめまして！",
      delay: 600,
    });
  })
  .then(() => {
    botUi.message.add({
      content: "あなたのことは、どのようにお呼びいたしましょう？",
      delay: 1400,
      cssClass: "js-add-space",
    });
  })
  .then(() => {
    return botUi.action.text({
      action: {
        placeholder: "名前を入力してください..."
      },
      delay: 2000,
    });
  })
  .then((name) => {
    botUi.message.add({
      content: name.value + "様ですね？",
      delay: 1000,
    });
  })
  .then(() => {
    botUi.action.button({
      action: [{
        icon: "check",
        text: "はい",
        value: true
      }, {
        icon: "close",
        text: "いいえ",
        value: false
      }, ],
      delay: 1600,
    });
  });
