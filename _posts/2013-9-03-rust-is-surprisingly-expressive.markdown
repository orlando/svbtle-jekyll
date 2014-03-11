---
layout: post
title: Rust is surprisingly expressive
date: September 03, 2013
category: code
customid: 9jplmuxnq7icay63xd1eh
---

Do you remember the first time you saw Rails' ActiveSupport library? I do: it totally blew my mind. The only dynamic language I had used up to that point was Perl, and it had a similarly mind-blowing effect on my young self. I thought that dynamic typing was mostly a requirement towards making this kind of expressiveness possible, but it turns out Rust can be just as expressive, while retaining type safety and static dispatch.

<br>

There was a time in the early days of Rails when its evangelists would show off snippets of what it let you do. These were often ActiveSupport extensions to the core language itself. It’d go something like this:

<br>

> Hey, have you tried Rails? Check this out:

> <code>irb(main):002:0> Time.now - 2.days
> => 2009-12-26 09:57:02 -0800
> irb(main):003:0> 2.days.ago
> => 2009-12-26 09:57:04 -0800</code>
