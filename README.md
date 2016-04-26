# news.cascadiafest.org

The news and information website for CascadiaFEST 2016 and onwards.

## The Site

This site is built with Jekyll, run through TravisCI, and hosted with Surge.sh.

## How to write a post

Posts are written using markdown. To start a post, create a new file in `_posts/{year}/` named something like `{yyyy-mm-dd}-my-new-post.md`. You can change this later.

Your post should start out like this:

```
---
title:  "Welcome to Jekyll!"
date:   2016-03-31 16:10:00 -0700
layout: 2016/post
categories: '2016'
---
```

This is called "frontmatter" and is metadata about your post.

The `title` and `date` fields are used across all posts. The date is when the post is to be published on. If you commit and push your post to `master` before this date, your post will not show up.

The `layout` value can be one of `page`, `post`, or `default`. For each conference year, there are also variants of the layouts to style posts according to the conference design that year. For example, `2016/post`.

There is also a special layout `empty` which has no special layout attached to it.

The `categories` field can be anything, but special consideration is given to posts for each year of the conference. Because of Jekyll and yml parsing, enclose conference years in strings, example: `'2016'`.

After that header, you can put any content you want into your post. It is generated with markdown so you don't have to write raw html.

In addition, if you want to highlight code, use this format:

```
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
```

## Pull Requests

You don't have to (and probably shouldn't) commit posts directly to master. When you make changes in a pull request, they are automatically build and deployed to surge as well. The format is `http://pr-{num}.news.cascadiafest.surge.sh/`. For pull request #1 it would go to `http://pr-1.news.cascadiafest.surge.sh/`