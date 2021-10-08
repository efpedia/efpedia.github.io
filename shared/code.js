  function language(userAgent) {
  }
  let start = "Mozilla/5.0 (X11; ; U; Linux armv7l; "
  let end = ") AppleWebKit/534.26+ (KHTML, like Gecko) Version/5.0 Safari/534.26+"
  let agent = navigator.userAgent
  if (location.href.endsWith("?debug")) {
    language("es")
  } else if (agent.startsWith(start) && agent.endsWith(end) && agent.length == (start.length + end.length + 5)) {
    language(agent.substring(start.length, start.length + 2))
  } else {
    //location.href = "https://en.wikipedia.org/wiki/Abiogenesis"
  }
