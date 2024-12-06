---
description: Snip is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored.
---

import DocVideo from '@site/src/components/DocVideo/DocVideo';

# Features

## The Snip Philosophy

Note-Taking is a relatively simple process. Most of the time, you just want to write down some thoughts or a todo or take a note of something you know will be useful in the future. Notes are often ephemeral: you need them in a particular moment and discard them soon thereafter.

Snip focuses on keeping this simple process simple, while providing useful features. It provides a super-slick, completely decluttered user interface with only a handful of controls, giving you a distraction free experience when working with notes. It does not require you to have an account. Instead, it is backend agnostic and lets you decide where you want your notes to be backed up.

## Regarding Markdown

Snip is not a markdown-based note taking app, but it does have markdown-related
functionality:

- you can use markdown syntax while writing rich text notes
- you can import markdown
- you can export to markdown

We do not deem the use of markdown for taking notes
necessary. With a good rich text editor, notes are equally easy (if not easier)
to edit and read, and export to markdown removes the possibility of
vendor lock-in: your data will be future-proof as in any other markdown based
note taking app.

Not using markdown also comes with the advantage that documents can contain more
complex elements and formatting than a regular markdown document would. Once you
want to introduce additional concepts (for
example, a reminder feature as it is implemented in Snip), you'll have to introduce
your own, custom syntax, ultimately breaking the original idea of using a
common standard. Even worse, if such custom standards are introduced through
a community driven platform, you end up with notes that contain structures that
are only valid within the respective note taking app and with additional plugins
installed.

## Origins

Origins allow you to specificy how your data shall be persisted. Currently,
there's two origins available:

- the _file_ origin lets you store your data on your local disk
- the _github_ origin lets you store your data in a github repo

The advantage of the github origin is that you'll be able to sync your data
across multiple devices without any costs. Apart from that, the functionality of the application remains the same.

## Editing Rich Text

### Using Markdown-like syntax

Using the toolbar can feel cumbersome at times, since it forces you to switch
between your mouse and keyboard often. You can use [markdown](https://en.wikipedia.org/wiki/Markdown)
syntax to avoid this.

- Use `# `&nbsp; for headings
- Use `**text**`&nbsp; for bold formatting
- Use `*text*`&nbsp; for italic formatting
- Use `* `&nbsp; for bullet lists
- Use `1. `&nbsp; for ordered lists
- Use `+ `&nbsp; for todo lists

<DocVideo name="markdown-formatting" />

### Jumping in and out of inline formattings

The editor gives an indication whether you are inside an inline formatting
(such as bold formatting) by rendering a dashed line underneath the formatting.
You can jump in and out of the formatting boundaries by using the left and right
arrow keys. This allows you to, for example, escape a bold-formatted text and
continue writing unformatted.

<DocVideo name="formatting-jump" />

### Destroying formattings with backspace

You can destroy inline formatting (such as bold formatting) using backspace.
Jump out of the formatting with your arrow-right key, then use backspace to
destroy the formatting.

<DocVideo name="destroying-inline-formatting" />

Similarly, you can destroy block formattings, such as headings and code blocks,
by placing the cursor at the beginning of the formatting and using backspace.

<DocVideo name="destroying-nodes" />

### Interaction with links

The editor will detect urls such as `https://example.com` and give an indication
once the cursor is close to such a pattern. Pressing Enter will put
focus on the label input field. Once focus is inside the label input field,
pressing Escape will put focus back on the editor. Pressing Cmd+Enter
will turn the pattern into a highlighted, interactable link.

Once an interactable link is created, interacting with it is the same: use Enter
to focus the url input field, use Escape to give focus back to the editor.

<DocVideo name="interacting-with-links" />

### Drag and Drop

Parts of text can be dragged around. This is useful, for example, when you want
to reorder items in a list, or put a paragraph before another one.

You can drag text by selecting some text inside the paragraph or list item
you want to drag. This will create a drag handle, which you can drag-and-drop
to whichever part in the document you want.

<DocVideo name="drag-n-drop-via-text-selection" />

Another option is to hit Escape when the editor is focused. This will create a
node selection around the paragraph where the cursor is placed. The node selection
becomes draggable and can be dragged accordingly.

<DocVideo name="drag-n-drop-via-node-selection" />

## Snippet References

As the name suggests, snippet references enable you to reference snippets from
one another. There's multiple ways how to set up snippet references:

- using the toolbar: there's a toolbar entry called "Create Snippet References",
  which allows you to search for the snippet you'd like to reference
- using autocomplete: type `/` inside a note and start typing some text. You'll
  be presented with an autocomplete. If the text you type matches an already
  existing snippet, it will be presented as an option. In addition, you'll have
  the option to create a new snippet and auto-reference it into the snippet you're
  editing.

<DocVideo name="snippet-references" />

## Search and Quick Access

Snip comes with an effective search-all feature, which you can use to search
your snippets. It presents results in a compact, easy-to-read manner. You can use
[regular expressions](https://en.wikipedia.org/wiki/Regular_expression) if you
like.

It also allows you to search for and jump to tags. Additionally, it shows you
snippets and tags you've visited recently.

The Quick Access feature allows you to quickly copy links and code blocks from
your notes to the clipboard.
