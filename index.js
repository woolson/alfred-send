const param = process.argv[2];
const message = param === '-c' ? '剪贴板图片' : param;

postList([
  {
    title: '准备上传 • ' + message,
    subtitle: '按Enter确认上传，请不要上传私密图片❗️',
    arg: param
  }
]);

function sendWorkflowData(data) {
  console.log(JSON.stringify({
      alfredworkflow: data,
  }));
}

/**
 * 显示Alfred列表
 * @param list 列表数据
 */
function postList(list) {
  console.log(JSON.stringify({ items: list }));
};