const { execSync } = require('child_process');
const path = process.argv[2];
const SEND_PATH = '/Users/17080006/.nvm/versions/node/v12.16.2/bin/send-gl';

const uploadRes = execSync(`${SEND_PATH} ${path}`).toString();
const isSuccess = !uploadRes.includes('Upload failed!');

try {
  sendWorkflowData({variables: {
    message: isSuccess
      ? '上传成功'
      : '上传失败！' + uploadRes.split('Upload failed!')[1],
    subTitle: isSuccess ? '使用 CMD+V 粘贴链接！' : '检查文件位置或剪贴板是否有图片❗️',
    result: uploadRes.match(/https:\/\/(\d|\w|\/|\.|\-|\_)+/g)[0]
  }});
} catch (err) {
  sendWorkflowData({variables: {
    message: '上传失败！' + err.message,
    subTitle: '检查文件位置或剪贴板是否有图片❗️',
  }});
}

function sendWorkflowData(data) {
  console.log(JSON.stringify({
      alfredworkflow: data,
  }));
}
