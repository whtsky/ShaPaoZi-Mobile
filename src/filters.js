export function timeago (time) {
  time = new Date(time * 1000)
  var delta = parseInt((new Date() - time) / 1000, 10)

  var minutes = delta / 60
  if (minutes < 2) return '一分钟前'

  var hours = minutes / 60
  if (hours < 1) return parseInt(minutes, 10) + ' 分钟前'
  if (hours < 1.5) return '一小时前'

  var days = hours / 24
  if (days < 1) return Math.round(hours) + ' 小时前'
  if (days < 7) return parseInt(days, 10) + ' 天前'

  var month = time.getMonth() + 1
  if (month < 10) month = '0' + month
  var date = time.getDate()
  if (date < 10) date = '0' + date
  return [time.getFullYear(), month, date].join('-')
}

export function bytesToSize (bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) {
    return '0 Byte'
  }
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
}
