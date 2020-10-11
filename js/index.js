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
    return botUi.action.button({
      delay: 1600,
      action: [{
        icon: "check",
        text: "はい",
        value: true
      }, {
        icon: "close",
        text: "いいえ",
        value: false
      }],
    });
  })
  .then((res) => {
    res.value ?
      botUi.message.add({
        content: "ようこそ！",
        delay: 800,
      }) :
      botUi.message.add({
        content: "あれ？",
        delay: 800,
      });
  })
  .then(() => {
    const jsVisibility = document.getElementById('reload-button');
    jsVisibility.classList.remove("js-visibility");
  });
