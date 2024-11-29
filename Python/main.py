from yattag import Doc

doc, tag, text = Doc().tagtext()
a="'qqqqq'"
with tag('html'):
    with tag('head2'):
        with tag('title'):
            text('Sample HTML')
    with tag('body'):
        with tag('h1'):
            text('Hello, World!')
        with tag('p'):
            text('This is a sample HTML block created using Python.')
        with tag('button id="button" onclick="console.log('+a+')"'):
            text('button')
        
        with tag('script type="module" src="script.js"'):
            text('a')
            

# Save the HTML to a file
with open('example.html', 'w') as file:
    file.write(doc.getvalue())


