import emitter from '@/methods/emitter';

export default function (response) {
  // 依據成功與否，推送不同的訊息內容
  // 假設更新成功時
  if (response.data.success) {
    // 觸發emitter(跨元件溝通工具)
    // 觸發push-message事件，傳送相關資料過去
    emitter.emit('push-message',{
      // 相關資料
      style: 'success',
      title: `恭喜您!更新產品成功!`
    });
  }
    // 假設更新失敗時
  else {
    // 有些訊息是字串，有些則是陣列，在此統一格式
    const message = typeof response.data.message === 'string'
      ? [response.data.message] : response.data.message;
    emitter.emit('push-message',{
      style: 'danger',
      title: `Oh No!更新產品失敗!`,
      // 後端傳送過來失敗的訊息內容，透過join的方式把陣列內容一一取出，並且在中間補上逗號的形式
      // 將所有訊息補到content中
      content: message.join('、')
    });
  }
};