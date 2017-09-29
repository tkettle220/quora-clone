# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

QuestionsTopic.destroy_all
TopicsUser.destroy_all

User.destroy_all
demo_user = User.create(email: "thomas.kilmer@yale.edu", password: "password", name: "Will Xu", pro_pic_url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17952972_10155238754978829_6171178937828086766_n.jpg?oh=d1bd2b6555ebcb13479addf2874a0f83&oe=5A4A61E8")
user2 = User.create(email: "sgullapalli@gmail.com", password: "password", name: "Sachith Gullapalli", pro_pic_url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14642433_10154649038393035_50739788996994746_n.jpg?oh=532a963328339ecddfec271190e6175a&oe=5A39FFA4")
user3 = User.create(email: "becca_stone@hotmail.com", password: "password", name: "Rebecca Stone", pro_pic_url: "https://static.pexels.com/photos/324030/pexels-photo-324030.jpeg")
user4 = User.create(email: "dtandon@vision.com", password: "password", name: "Devansh Tandon", pro_pic_url: "https://scontent.xx.fbcdn.net/v/t1.0-1/c11.0.50.50/p50x50/17800343_10212311731050854_7713970108060183435_n.jpg?oh=3b07f29b9167e74437059fc74566b8b9&oe=5A53F81D")
user5 = User.create(email: "gyi1493@gmail.com", password: "password", name: "Grace Yi", pro_pic_url: "https://static.pexels.com/photos/157023/pexels-photo-157023.jpeg")



#Create Questions
Question.destroy_all
q1 = Question.create(body: 'What are the most common lies told by programmers?', author_id: demo_user.id)
q2 = Question.create(body: 'How can I know if a person is a good programmer or not?', author_id: demo_user.id)
q3 = Question.create(body: 'What is the strangest sorting algorithm?', author_id: demo_user.id)
q4 = Question.create(body: 'Why is the food at Google free for employees?', author_id: demo_user.id)
q5 = Question.create(body: 'If you were on death row, what would you request for your last meal?', author_id: user2.id)
q6 = Question.create(body: 'What was your weirdest date ever?', author_id: user2.id)
q7 = Question.create(body: 'What are some great truths of computer programming?', author_id: user3.id)
q8 = Question.create(body: 'When did you find out you were not young anymore?', author_id: demo_user.id)
q9 = Question.create(body: 'How do you explain to your girlfriend that sometimes you actually are thinking nothing?', author_id: user2.id)
q10 = Question.create(body: 'What is it like working at a Michelin-starred restaurant?', author_id: demo_user.id)
q11 = Question.create(body: "What are some famous bugs in the computer science world?", author_id: demo_user.id)

#Create Answers
Answer.destroy_all
a1 = Answer.create(body: "Usually after having to \"train\" a user how to use a feature that is painfully obvious and simple, and I mean Tinder simple...

\"No it's ok - I totally see how you could have missed that. For the next iteration I'll try to make it more intuitive.\"", author_id: user4.id, question_id: q1.id)

a2 = Answer.create(body: 'Client: “Could you make the software do XYZ?”

  Programmer: “No.”

  What the programmer really wants to say:

  “It’s software. Of course we could do it. But:

  it would take a very long time,
  you can’t afford it,
  we can’t sell it to anyone else because it’s a terrible idea,
  by the time we finish it, you won’t want it anymore.”
  “No” is just easier to say and is less insulting, especially when the client has a dozen of these ‘great’ ideas.
', author_id: user5.id, question_id: q1.id)


a3 = Answer.create(body: "<p><span style=\"color: rgb(51, 51, 51);\">As many people have mentioned you can’t say “A programmer thinks x” or “A programmer does x”.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">I don’t have many years experience in programming, probably far less than many people who answered this question, but I know a rule.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">I would say that that rule is something like this: “If a programmer can come up with a efficient, easily maintained, easy to understand and easy solution to a problem that means that they know what they are doing.”</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Of course many more factors are important, but I think this is “on the top of the list”.</span></p>", author_id: demo_user.id, question_id: q2.id)


a4 = Answer.create(body: "<p><a href=\"Slowsort - Wikipedia\" target=\"_blank\" style=\"color: rgb(43, 109, 173); background-color: initial;\">Slowsort - Wikipedia</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;A sorting algorithm based on the “multiply and surrender” principle (As opposed to divide and conquer) Basically it goes like:</span></p><pre class=\"ql-syntax\" spellcheck=\"false\">\n1  function slowSort(array,start,end) {\n2\t  if( start &gt;= end ) return; //Damn can't slow sort anymore\n3\t  middle = floor( (start+end)/2 );\n5\t\n6\t  //Recursively slowsort\n7\t  slowSort(array,start,middle);\n6\t  slowSort(array,middle+1,end);\n8\t\n9\t  //Compare and place max value at end of list\n10\t  if(  array[end] &lt; array[middle] )\n11\t   swap array[end] and array[middle]\n12\t\n13\t//Slowsort entire array without max value\n14\tslowsort(array,start,end-1);\n15  }\n</pre><p><br></p><p>\tSteps:</p><ul><li>Sort the first half recursively</li><li>Sort the second half recursively</li><li>Find the maximum of the whole array by comparing the middle with the end, placing maximum at the end of the list.</li><li>Recursively sort the entire list without the maximum.</li></ul><p><br></p>", author_id: user2.id, question_id: q3.id)

a5 = Answer.create(body: "<p><a href=\"https://en.wikipedia.org/wiki/Tetraodontidae\" target=\"_blank\" style=\"color: rgb(51, 51, 51);\"><strong>The pufferfish</strong></a><span style=\"color: rgb(51, 51, 51);\">: <img data-attachment-id=\"2786\" data-permalink=\"https://richcoast.wordpress.com/2014/01/07/quick-facts-about-the-pufferfish/pf01/#main\" data-orig-file=\"https://richcoast.files.wordpress.com/2014/01/pf01.jpg\" data-orig-size=\"450,337\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;}\" data-image-title=\"Pufferfish cool face\" data-image-description=\"\" data-medium-file=\"https://richcoast.files.wordpress.com/2014/01/pf01.jpg?w=300&amp;h=224\" data-large-file=\"https://richcoast.files.wordpress.com/2014/01/pf01.jpg?w=450\" class=\"alignnone size-medium wp-image-2786\" alt=\"Pufferfish cool face\" src=\"https://richcoast.files.wordpress.com/2014/01/pf01.jpg?w=300&amp;h=224\" width=\"300\" height=\"224\" srcset=\"https://richcoast.files.wordpress.com/2014/01/pf01.jpg?w=300&amp;h=224 300w, https://richcoast.files.wordpress.com/2014/01/pf01.jpg?w=150&amp;h=112 150w, https://richcoast.files.wordpress.com/2014/01/pf01.jpg 450w\" sizes=\"(max-width: 300px) 100vw, 300px\"> </span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">If you guys have read an article or two about the most deadly food, this little guy will probably be in there. Every type of pufferfish is poisonous, and it’s recommended that people eat the one with the lowest dose of toxins, called torafugu. The pufferfish’s poison is&nbsp;</span><strong style=\"color: rgb(51, 51, 51);\"><em>1200 times stronger than cyanide.&nbsp;</em></strong><span style=\"color: rgb(51, 51, 51);\">If prepared incorrectly, you would die a slow and painful death, as the toxin is a neurotoxin, called tertodotoxin(shortened to TTX). TTX blocks “the flow of sodium ions through the channel, thereby preventing action potential”, which basically means it blocks your nervous system from sending messages, which also shuts down your lungs. What this poison does is it You see,&nbsp;</span><em style=\"color: rgb(51, 51, 51);\">fugu&nbsp;</em><span style=\"color: rgb(51, 51, 51);\">is a Japanese(no i am not a weeb) dish when a pufferfish is cleaned and served raw. Even if I get poisoned, I’ll die either way.</span></p>", author_id: user2.id, question_id: q5.id)

a6 = Answer.create(body: "<ol><li>The bug is your fault</li><li>The bug is your fault</li><li>The bug is your fault</li><li>The bug is your fault</li><li>The bug is your fault.</li><li>No. The bug really IS your fault.</li><li>The bug is your fault. Because you made an assumption that wasn’t true.</li><li>The bug is your fault. And it won’t go away until you check your assumptions, find the one that isn’t true, and change it.</li></ol><p><br></p>", author_id: user4.id, question_id: q7.id)

a7 = Answer.create(body: "<ol><li><span style=\"color: rgb(144, 32, 0);\">Beautiful</span><span style=\"color: rgb(102, 102, 102);\"> </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> better than ugly</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Explicit</span><span style=\"color: rgb(102, 102, 102);\"> </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> better than </span><strong style=\"color: rgb(0, 112, 32);\">implicit</strong><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Simple</span><span style=\"color: rgb(102, 102, 102);\"> </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> better than complex</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Complex</span><span style=\"color: rgb(102, 102, 102);\"> </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> better than complicated</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Flat</span><span style=\"color: rgb(102, 102, 102);\"> </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> better than nested</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Sparse</span><span style=\"color: rgb(102, 102, 102);\"> </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> better than dense</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Readability</span><span style=\"color: rgb(102, 102, 102);\"> counts</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Special</span><span style=\"color: rgb(102, 102, 102);\"> cases aren</span><span style=\"color: rgb(64, 112, 160);\">'t special enough to break the rules.</span></li><li><span style=\"color: rgb(64, 112, 160);\">Although practicality beats purity.</span></li><li><span style=\"color: rgb(64, 112, 160);\">Errors should never pass silently.</span></li><li><span style=\"color: rgb(64, 112, 160);\">Unless explicitly silenced.</span></li><li><span style=\"color: rgb(64, 112, 160);\">In the face of ambiguity, refuse the temptation to guess.</span></li><li><span style=\"color: rgb(64, 112, 160);\">There should be one-- and preferably only one --obvious way to do it.</span></li><li><span style=\"color: rgb(64, 112, 160);\">Although that way may not be obvious at first unless you'</span><span style=\"color: rgb(102, 102, 102);\">re </span><span style=\"color: rgb(144, 32, 0);\">Dutch</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Now</span><span style=\"color: rgb(102, 102, 102);\"> </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> better than never</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">Although</span><span style=\"color: rgb(102, 102, 102);\"> never </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> often better than </span><span style=\"color: rgb(102, 102, 0);\">*</span><span style=\"color: rgb(102, 102, 102);\">right</span><span style=\"color: rgb(102, 102, 0);\">*</span><span style=\"color: rgb(102, 102, 102);\"> now</span><span style=\"color: rgb(102, 102, 0);\">.</span></li><li><span style=\"color: rgb(144, 32, 0);\">If</span><span style=\"color: rgb(102, 102, 102);\"> the implementation </span><strong style=\"color: rgb(0, 112, 32);\">is</strong><span style=\"color: rgb(102, 102, 102);\"> hard to explain</span><span style=\"color: rgb(102, 102, 0);\">,</span><span style=\"color: rgb(102, 102, 102);\"> it</span><span style=\"color: rgb(64, 112, 160);\">'s a bad idea.</span></li><li><span style=\"color: rgb(64, 112, 160);\">If the implementation is easy to explain, it may be a good idea.</span></li><li><span style=\"color: rgb(64, 112, 160);\">Namespaces are one honking great idea -- let'</span><span style=\"color: rgb(102, 102, 102);\">s </span><strong style=\"color: rgb(0, 112, 32);\">do</strong><span style=\"color: rgb(102, 102, 102);\"> more of those</span><span style=\"color: rgb(102, 102, 0);\">!</span></li></ol><p><br></p>", author_id: user2.id, question_id: q7.id)

a8 = Answer.create(body: "<p>That awful moment came when people started to offer me their seat on the metro! I was shocked-</p><ul><li>I don’t look&nbsp;<strong>that</strong>&nbsp;old,I thought.</li><li>Maybe I look tired today.</li><li>Perhaps my glance at the occupied seat was wrongly interpreted</li><li>Maybe they think my briefcase looks rather heavy …….</li></ul><p>These thoughts assailed me and of course, this was repeated as the years went by. That was a few years ago and now I have come to accept the truth.</p><p>But advancing years (I refuse to use the term ‘old age’ until I am 95!) brings with it some compensations. We can refer to the advancing years as “clouds” and we feel better straightaway!</p><p><strong>Perhaps Anais Nin puts it best when she says</strong></p><blockquote>“We do not grow absolutely, chronologically. We grow sometimes in one dimension, and not in another; unevenly. We grow partially. We are relative. We are mature in one realm, childish in another. The past, present, and future mingle and pull us backward, forward, or fix us in the present. We are made up of layers, cells, constellations.”&nbsp;</blockquote><blockquote>&nbsp;―&nbsp;<a href=\"https://www.goodreads.com/author/show/7190.Ana_s_Nin\" target=\"_blank\" style=\"color: rgb(43, 109, 173); background-color: initial;\">Anaïs Nin</a></blockquote><p><br></p>", author_id: user2.id, question_id: q8.id)

a9 = Answer.create(body: "<p>I know&nbsp;<em>exactly</em>&nbsp;when.</p><p><br></p><p>My career took off quickly after film school and a couple of entry level positions. I was blessed to find myself in the company of a wise, respected, sharing mentor, who taught me the business at a very young age. He promoted me four times in two years and introduced me to the producing team that added rocket fuel to my rising position in the industry. I was profiled in LA Magazine as one of the&nbsp;<em>HOT 100 UNDER 30</em>. I was the “kid” in an industry of elder peers.</p><p><br></p><p>By the time I was thirty I had been thanked at the Oscars and named President of a successful television production company. At thirty-one I raised the money to become an independent producer. I started making movies one after another.</p><p><br></p><p>One day - in my late thirties (maybe early forties) I was at lunch with an agent from the William Morris Agency. We were talking about my love of old movies and reputation for having an encyclopedic knowledge of The Marx Brothers and other thirties film comedians. The agent stopped me mid-sentence and said:</p><p><br></p><p><em>You need to come by the office and meet this new agent we just hired - Mike. He’s like a younger version of YOU.</em></p><p><br></p><p><strong>When did&nbsp;I&nbsp;stop being the younger version of me?</strong></p><p><br></p><p>Apparently right around then.</p><p>And for me - it was in that instant.</p><p><br></p><p>Hair started to gray, wrinkles appeared, I began reminiscing for the “golden age” of television. Somewhere along my journey I had left the county of&nbsp;<em>Wunderkind</em>&nbsp;and entered&nbsp;<em>Old Guy</em>&nbsp;territory. Never to return…</p>", author_id: user5.id, question_id: q8.id)

a10 = Answer.create(body: "<p>2012. I was a NYU Student.</p><p><br></p><p>Met this beautiful girl on campus. She was a sophomore from Chicago, IL.</p><p><br></p><p>So I asked her out.</p><p><br></p><p>Well, her sister was visiting her from Chicago that same weekend that we had our date planned.</p><p>Of course she didn't mention anything about her sister, but she ends up bringing her along on the date that I was so looking forward to.</p><p><br></p><p>Here comes her IDENTICAL TWIN sister.</p><p><br></p><p>I had no idea who was who all date long and didn’t find a way to ask either.</p><p>She later tells my friend she thinks that I am more into her sister than her. Very awkward. Much confused. And yes, very weird.</p><p><br></p><p>Was this a setup? Never found out.</p>", author_id: user2.id, question_id: q6.id)

a11 = Answer.create(body: "<p><span style=\"color: rgb(51, 51, 51);\">You: Hey, can we talk about something?</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Her: OK.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">You: Sometimes, you ask me what I’m thinking and I say “nothing”.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">The reason I say “nothing” is because what I’m thinking about is not tangible.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">My thoughts can be idle, vague, ill-defined, fragmented scraps of thoughts.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">You get irritated or become insistent when I say “nothing” which makes me feel pressure. It makes me feel you think I’m hiding something. It makes me feel you believe I am unwilling to share.</span></p><p><span style=\"color: rgb(51, 51, 51);\">It’s not a good feeling. It’s exhausting.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">I’d like to request that you believe me when I say “nothing.” Because, I really want to be a good boyfriend, but I don’t want to have to make stuff up about the nebula on my mind.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">In exchange, I will assume that if you have something to tell me you will. I will assume I do not have to pry it from you or get mad at you for not disclosing something that might not exist.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">In exchange, if you are sitting there saying nothing I will give you some space to just sit beside me in peaceful silence.</span></p>", author_id: user3.id, question_id: q9.id)

a12 = Answer.create(body: "<p>Instead of:</p><blockquote>Her: you're so quiet, what are you thinking about?</blockquote><blockquote>You: nothing!</blockquote><p>Try:</p><blockquote>Her: you're so quiet, what are you thinking about?</blockquote><blockquote>You: I was just spacing out for a second.</blockquote><p>Everyone can recognise that. You're still saying the same thing, you just come off more sincere.</p><blockquote>How do you explain to your [significant other] that sometimes you actually are thinking [of] nothing?</blockquote>", author_id: user5.id, question_id: q9.id)

a13 = Answer.create(body: "<p><em>Staring at the wall, thinking about nothing.</em></p><p><br></p><p><strong>Girlfriend</strong>: What are you thinking about?</p><p><strong>Devansh</strong>: Nothing.</p><p><strong>Girlfriend</strong>: You must be thinking about something.</p><p><strong>Devansh</strong>: I am not.</p><p><strong>Girlfriend</strong>: That’s not possible. You are thinking about something.</p><p><strong>Devansh</strong>: But I am not. Why would I lie?</p><p><strong>Girlfriend</strong>: Okay. You don’t want to tell.</p><p><strong>Devansh</strong>: Okay, listen.</p><p><strong>Girlfriend</strong>: What?</p><p><strong>Devansh</strong>: You looked good in that blue dress.</p><p><strong>Girlfriend</strong>: That’s so nice of you to say.</p><p><em>Wow. That was close.</em></p><p><br></p><p>You cannot make women believe that there are times when men actually think<em>&nbsp;about</em>nothing.</p><p>We just shut our brain for a few minutes and do nothing.</p><p><br></p><p><strong>Make something up, instead.</strong></p>", author_id: user4.id, question_id: q9.id)

a14 = Answer.create(body: "<p>Michelin-starred restaurant work is the same as any other restaurant work, except that all of the standards are higher. At a normal restaurant, the squeeze bottle that holds olive oil on the salad station will be like one of those refillable ketchup bottles from a diner. It will probably have a thin film of grease and salt on the outside.</p><p><img src=\"https://qph.ec.quoracdn.net/main-qimg-ce389124e79ad08d92952a80b0a8842b.webp\"></p><p>At a MIchelin-starred restaurant (or any other highly rated restaurant), it will be a Clairol tint-bottle (available at Sally Beauty Supply), because the necks are stronger and the tips are finer. It will be impeccably clean, because otherwise, your fingers will carry greasy fingerprints to the plates.</p><p><img src=\"https://qph.ec.quoracdn.net/main-qimg-0a0e77c502c763ef7df07dcbe4e71b04.webp\"></p><p>That’s it. That’s the main difference. A clean, precise oil bottle instead of a greasy, imprecise oil bottle. AND THEN APPLY THAT CONCEPT TO LITERALLY EVERY ASPECT OF THE OPERATION.</p>", author_id: user5.id, question_id: q10.id)

a15 = Answer.create(body: "<p>Not much except there are certain standards that&nbsp;<strong>MUST&nbsp;</strong>be held!</p><p>I worked at a high-end 1 Michelin starred restaurant for 3 years and have had to keep myself clean at all times. Here were some of the rules:</p><ul><li>I could not let the customers see me use the bathroom; but if I had to go, I had to do it fast.</li><li>Uniform must be kept clean at all times.</li><li>Must shave and have hair short or tied if long.</li><li>I could not carry a conversation for too long when they are dining, so they may finish their meal according to a schedule.</li><li>Must know ingredients very well; down to where some ingredients are from.</li><li>No slang.</li><li>Must always consult chefs to uphold a customer’s request.</li></ul><p>It was quite stressful dealing with the enormous pressure put on by the chefs and the owners to make sure the dinner services go swimmingly night-in and night-out!</p><p>Also, having lived in New York, I met a lot of celebrities and have gotten to become their friends! Some names include: Shane McMahon, David Blaine, Leonardo Dicaprio, and Matthew McConaughey!</p><p><img src=\"https://qph.ec.quoracdn.net/main-qimg-b873749fa79bd30fd99784ad28be0949.webp\"></p><p>(This wasn’t where I worked, just wanted to show the cleanliness)</p>", author_id: user2.id, question_id: q10.id)

a16 = Answer.create(body: "<p>I happened to watch the documentary&nbsp;<a href=\"http://www.imdb.com/title/tt1772925/\" target=\"_blank\" style=\"color: rgb(43, 109, 173); background-color: initial;\">Jiro Dreams of Sushi (2011)</a>&nbsp;in which the way employees and apprentices work at the restaurant&nbsp;<a href=\"https://en.wikipedia.org/wiki/Sukiyabashi_Jiro\" target=\"_blank\" style=\"color: rgb(43, 109, 173); background-color: initial;\">Sukiyabashi Jiro</a><strong>&nbsp;</strong>was also described. This little sushi restaurant in Tokyo has been awarded 3 stars by Michelin for several years in a row. Since no one has mentioned it, I guess this answer would be qualified enough.</p><p>Somewhere in the movie mentioned that the apprentices got to learn and practise basic techniques for about 10 years before being allowed to \"touch\" the real things. A guy even burst into tears when his egg sushi was finally accepted by the chef after about 200 times of rejection.</p><p>How about the chef, Jiro Ono? - you might wonder. He has been making sushi for over 70 years and hates holidays. His oldest son and also a sushi chef in his restaurant, Yoshikazu Ono, now is over 50 yrs old but still has no Jiro's permission to take over the restaurant. Chef Jiro doesn't think he is good enough.&nbsp;<strong>The plot twist</strong>: Yoshikazu, not Jiro, was the one who prepared the sushi for Michelin inspectors :)</p>", author_id: user3.id, question_id: q10.id)

a17 = Answer.create(body: "<p><span style=\"color: rgb(51, 51, 51);\">There are two ways you can do something in a three Michelin-Star restaurant – perfect, or absolutely wrong.&nbsp;</span><em style=\"color: rgb(51, 51, 51);\">\"We cannot use this garbage\"</em><span style=\"color: rgb(51, 51, 51);\">.&nbsp;There is no in-between.&nbsp;Yes, these restaurants do have access to the best produce, meat and fish in the world, but so could many other chefs who have the right venture capitalist funding them.&nbsp;If I had to choose one difference between a three star restaurant and a restaurant with one star or none, it would absolutely be attention to detail.&nbsp;&nbsp;Every single plate that leaves that kitchen is intended to be the best course that person has ever tasted, and I am willing to bet more often than not it is.&nbsp;That is why if you call today to get a reservation for two, you will have to start flipping your calendar quite a few pages forward.&nbsp;There are not many chefs on this planet capable of consistently creating food like this.</span></p><p><br></p><p><img class=\"landscape qtext_image zoomable_in zoomable_in_feed lazy_loaded lazy_loading\" src=\"https://qph.ec.quoracdn.net/main-qimg-a6862f0cbe2449766a3c5131912c5e30.webp\" master_src=\"https://qph.ec.quoracdn.net/main-qimg-7f65473be78e5b2dd3420ce23579ffe6\" master_w=\"2048\" master_h=\"2048\" style=\"opacity: 1; visibility: visible;\"></p>", author_id: user4.id, question_id: q10.id)

a18 = Answer.create(body: "<p>See that moth taped to the paper. That is the first computer bug. Literally.</p><p><br></p><p>That specific bug shorted a relay in the Harvard Mark II computer. Grace Murray Hopper found it </p><p>and put it in the log book.</p><p><br></p><p>Without that moth, we may have a different term for errors in a computer system.</p><p><br></p><p>I’d say that makes it the most famous computer bug ever.</p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\"><img src=\"https://qph.ec.quoracdn.net/main-qimg-3204104f539a588eb0f5680b8ab6912e.webp\"></span></p>", author_id: user5.id, question_id: q11.id)

#Create Topics
Topic.destroy_all
t1 = Topic.create(name: "Computer Programming", description: "Computer programming (often shortened to programming) is a process that leads from an original formulation of a computing problem to executable programs. It involves activities such as analysis, understanding, and generically solving such problems resulting in an algorithm, verification of requirements of the algorithm including its correctness and its resource consumption, implementation (commonly referred to as coding) of the algorithm in a target programming language, testing, debugging, and maintaining the source code, implementation of the build system and management of derived artefacts such as machine code of computer programs.")
t2 = Topic.create(name: "Food", description: "Food is about the ingredients that go into Cooking, perhaps according to Recipes.  Food is a substance that provides nutrition to living organisms (humans, animals, or plants).")
t3 = Topic.create(name: "Dating and Relationships", description: "This topic covers the essential human endeavor of finding someone you can be happy with, keeping them and yourself happy during the relationship, and how to deal with the inevitable problems that crop up when people are close.")
t5 = Topic.create(name: "Computer Science", description: "Computer Science is the scientific approach to computation. Questions about programming should also be added to Computer Programming")
t6 = Topic.create(name: "Life", description: "")
t7 = Topic.create(name: "Data Structures", description: "")
t8 = Topic.create(name: "Algorithms", description: "")
t9 = Topic.create(name: "Fine Dining", description: "")





#Add Questions to Topics
q1.topics += [t1,t5]
q2.topics += [t1,t5]
q3.topics += [t1,t5,t7]
q4.topics += [t1,t2,t9]
q5.topics += [t1,t6]
q6.topics += [t3,t6]
q7.topics += [t1,t5]
q8.topics += [t3,t6]
q9.topics += [t3]
q10.topics += [t2, t9]
q11.topics += [t1,t7]

#Create comments
Comment.destroy_all
c1 = Comment.build_from(a4, user5.id, "Hahah, this sort is hilarious")
c2 = Comment.build_from(a1, user2.id, "so true")
c3 = Comment.build_from(a18, user4.id, "But the log notation is \“First actual case of bug being found\” and was written contemporaneously with the taping of the moth to the paper. That indicates that the figurative use of a bug predated the literal finding of a moth in a relay...")

[c1,c2,c3].each{|c| c.save!}


#Make users follow topics and questions
[t1, t2, t3, q1, q3].each{|followable| demo_user.follow(followable)}
[t1, t2, q2, q3, q5].each{|followable| user2.follow(followable)}

#Make users upvote questions and answers
[q3, a4, a3].each{|entity| demo_user.upvote(entity)}
[q1, q3, q6, a4].each{|entity| user2.upvote(entity)}


#Make users downvote questions and answers
[a12, a2].each{|entity| demo_user.downvote(entity)}


# give topics, questions, and answers a random amount of initial follows/upvotes
Topic.all.each do |topic|
  topic.update_attribute(:num_initial_follows, 10000*rand)
end

Question.all.each do |question|
  question.update_attribute(:num_initial_follows, 500*rand)
end

Answer.all.each do |answer|
  answer.update_attribute(:num_initial_upvotes, 1000*rand)
end


#Give queestions, answers, and comments fake timestamps
Question.all.each do |question|
  some_days_ago = Time.at(Time.now.to_f -  365.days.to_f*rand)

  some_less_days_ago = Time.at(Time.now.to_f -  (Time.now.to_f-some_days_ago.to_f)*rand)

  question.update_attributes(created_at: some_days_ago, updated_at: some_less_days_ago)
end

Answer.all.each do |answer|
  question_created_ago = (Time.now.to_f - answer.question.created_at.to_f)

  some_days_ago = Time.at(Time.now.to_f -  question_created_ago*rand)

  some_less_days_ago = Time.at(Time.now.to_f -  some_days_ago.to_f*rand)

  answer.update_attributes(created_at: some_days_ago, updated_at: some_less_days_ago)

  answer.commentIds.each do |comment_id|
    comment = Comment.find(comment_id)
    comment_days_ago = Time.at(Time.now.to_f -  some_days_ago.to_f*rand)
    comment_less_days_ago = Time.at(Time.now.to_f -  comment_days_ago.to_f*rand)
    comment.update_attributes(created_at: comment_days_ago, updated_at: comment_less_days_ago)
  end
end
