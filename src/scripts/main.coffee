removeClass = (node, clazz) ->
  node.className = node.className.replace(clazz, '')

addClass = (node, clazz) ->
  node.className += ' ' + clazz

for link in document.querySelectorAll('.more')
  link.onclick = () ->

    entries = this.previousSibling.querySelectorAll('.hidden')

    # show next 3 hidden entries
    for entry, index in entries
      if (index < 3)
        removeClass(entry, 'hidden')

    # hide link if no more hidden entries
    if (entries.length <= 3)
      addClass(this, 'hidden')



