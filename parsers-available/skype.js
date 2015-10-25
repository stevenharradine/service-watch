module.exports.name = "Skype"
module.exports.url = "http://heartbeat.skype.com/"

module.exports.parse = function (dom) {
  dom("#content").find(".post").each (function (i, el) {
    if (dom(this).find (".post-status").find(".issue-ongoing").length) {
      return "Some issues"
    }
  })

  return "Should be working"
}