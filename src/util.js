/**
 * 显示菜单
 */
export function showMenu () {
  var prompt = require('@system.prompt')
  var router = require('@system.router')
  var appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['首页','保存桌面', '关于', '取消'],
    success: function (ret) {
      switch (ret.index) {
      case 0:
      // 首页
        router.replace({
          uri: '/Web',
          params: { name: appInfo.name, icon: appInfo.icon }
        })
      break
      case 1:
        // 保存桌面
        createShortcut()
        break
      case 2:
        // 关于
        router.push({
          uri: '/About',
          params: { name: appInfo.name, icon: appInfo.icon }
        })
        break
      case 3:
        // 取消
        break
      default:
        prompt.showToast({ message: 'error' })
      }
    }
  })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
export function createShortcut () {
  var prompt = require('@system.prompt')
  var shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({ message: '已创建桌面图标' })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({ message: '成功创建桌面图标' })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg })
          }
        })
      }
    }
  })
}

/** 七牛图片缩略、剪裁 */
export function qiniuImageView2 (url, mode, w, h, q = 90) {
  return `${url}?imageView2/${mode}` + (w ? `/w/${w}` : '') + (h ? `/h/${h}` : '') + `/q/${q}/interlace/1`
}

/**
 * 获取缩略图url
 * @param {string} url
 * @param {number} width
 * @param {number} height
 */
export function getThumbUrl (url, width, height) {
  const plugins = {
    qiniu: {
      hosts: [
        'sl.wangpan.7niu.n0808.com'
      ],
      handler: () => {
        return qiniuImageView2(url, 0, width, height)
      }
    },
    dnion: {
      hosts: [
        'static-xl9-ssl.xunlei.com'
      ],
      handler: () => {
        return `${url}?w=${width}&h=${height}`
      }
    }
  }

  for (let i in plugins) {
    let { hosts, handler } = plugins[i]
    if (hosts.some(host => url.match(host))) {
      return handler()
    }
  }

  // 如果没有匹配，就返回原url
  return url
}
