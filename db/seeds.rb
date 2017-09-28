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
dummy_user = User.create(email: "sgullapalli@gmail.com", password: "password", name: "Sachith Gullapalli", pro_pic_url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14642433_10154649038393035_50739788996994746_n.jpg?oh=532a963328339ecddfec271190e6175a&oe=5A39FFA4")


#Create Questions
Question.destroy_all
q1 = Question.create(body: 'What are the most common lies told by programmers?', author_id: demo_user.id)
q2 = Question.create(body: 'How can I know if a person is a good programmer or not?', author_id: demo_user.id)
q3 = Question.create(body: 'What is the strangest sorting algorithm?', author_id: demo_user.id)
q4 = Question.create(body: 'Why is the food at Google free for employees?', author_id: demo_user.id)
q5 = Question.create(body: 'If you were on death row, what would you request for your last meal?', author_id: dummy_user.id)
q6 = Question.create(body: 'What was your weirdest date ever?', author_id: dummy_user.id)

#Create Answers
Answer.destroy_all
a1 = Answer.create(body: "Usually after having to \"train\" a user how to use a feature that is painfully obvious and simple, and I mean Tinder simple...

\"No it's ok - I totally see how you could have missed that. For the next iteration I'll try to make it more intuitive.\"", author_id: demo_user.id, question_id: q1.id)

a2 = Answer.create(body: 'Client: “Could you make the software do XYZ?”

  Programmer: “No.”

  What the programmer really wants to say:

  “It’s software. Of course we could do it. But:

  it would take a very long time,
  you can’t afford it,
  we can’t sell it to anyone else because it’s a terrible idea,
  by the time we finish it, you won’t want it anymore.”
  “No” is just easier to say and is less insulting, especially when the client has a dozen of these ‘great’ ideas.
', author_id: dummy_user.id, question_id: q1.id)


a3 = Answer.create(body: "<p><span style=\"color: rgb(51, 51, 51);\">As many people have mentioned you can’t say “A programmer thinks x” or “A programmer does x”.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">I don’t have many years experience in programming, probably far less than many people who answered this question, but I know a rule.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">I would say that that rule is something like this: “If a programmer can come up with a efficient, easily maintained, easy to understand and easy solution to a problem that means that they know what they are doing.”</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Of course many more factors are important, but I think this is “on the top of the list”.</span></p>", author_id: demo_user.id, question_id: q2.id)


a4 = Answer.create(body: "<p><a href=\"Slowsort - Wikipedia\" target=\"_blank\" style=\"color: rgb(43, 109, 173); background-color: initial;\">Slowsort - Wikipedia</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;A sorting algorithm based on the “multiply and surrender” principle (As opposed to divide and conquer) Basically it goes like:</span></p><pre class=\"ql-syntax\" spellcheck=\"false\">\n1  function slowSort(array,start,end) {\n2\t  if( start &gt;= end ) return; //Damn can't slow sort anymore\n3\t  middle = floor( (start+end)/2 );\n\t\n4\t  //Recursively slowsort\n5\t  slowSort(array,start,middle);\n6\t  slowSort(array,middle+1,end);\n7\t\n8\t  //Compare and place max value at end of list\n9\t  if(  array[end] &lt; array[middle] )\n10\t   swap array[end] and array[middle]\n11\t\n12\t//Slowsort entire array without max value\n13\tslowsort(array,start,end-1);\n14  }\n</pre><p><br></p><p>\tSteps:</p><ul><li>Sort the first half recursively</li><li>Sort the second half recursively</li><li>Find the maximum of the whole array by comparing the middle with the end, placing maximum at the end of the list.</li><li>Recursively sort the entire list without the maximum.</li></ul><p><br></p>", author_id: dummy_user.id, question_id: q3.id)

a5 = Answer.create(body: "<p><a href=\"https://en.wikipedia.org/wiki/Tetraodontidae\" target=\"_blank\" style=\"color: rgb(51, 51, 51);\"><strong>The pufferfish</strong></a><span style=\"color: rgb(51, 51, 51);\">: </span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">If you guys have read an article or two about the most deadly food, this little guy will probably be in there. Every type of pufferfish is poisonous, and it’s recommended that people eat the one with the lowest dose of toxins, called torafugu. The pufferfish’s poison is&nbsp;</span><strong style=\"color: rgb(51, 51, 51);\"><em>1200 times stronger than cyanide.&nbsp;</em></strong><span style=\"color: rgb(51, 51, 51);\">If prepared incorrectly, you would die a slow and painful death, as the toxin is a neurotoxin, called tertodotoxin(shortened to TTX). TTX blocks “the flow of sodium ions through the channel, thereby preventing action potential”, which basically means it blocks your nervous system from sending messages, which also shuts down your lungs. What this poison does is it You see,&nbsp;</span><em style=\"color: rgb(51, 51, 51);\">fugu&nbsp;</em><span style=\"color: rgb(51, 51, 51);\">is a Japanese(no i am not a weeb) dish when a pufferfish is cleaned and served raw. Even if I get poisoned, I’ll die either way.</span></p>", author_id: dummy_user.id, question_id: q5.id)

#Create Topics
Topic.destroy_all
t1 = Topic.create(name: "Computer Programming", description: "Computer programming (often shortened to programming) is a process that leads from an original formulation of a computing problem to executable programs. It involves activities such as analysis, understanding, and generically solving such problems resulting in an algorithm, verification of requirements of the algorithm including its correctness and its resource consumption, implementation (commonly referred to as coding) of the algorithm in a target programming language, testing, debugging, and maintaining the source code, implementation of the build system and management of derived artefacts such as machine code of computer programs.")
t2 = Topic.create(name: "Food", description: "Food is about the ingredients that go into Cooking, perhaps according to Recipes.  Food is a substance that provides nutrition to living organisms (humans, animals, or plants).")
t3 = Topic.create(name: "Dating and Relationships", description: "This topic covers the essential human endeavor of finding someone you can be happy with, keeping them and yourself happy during the relationship, and how to deal with the inevitable problems that crop up when people are close.")

#Add Questions to Topics
q1.topics += [t1]
q2.topics += [t1]
q3.topics += [t1]
q4.topics += [t1,t2]
q5.topics += [t1]
q6.topics += [t3]


#Create comments
c1 = Comment.build_from(a4, demo_user.id, "Hahah, this sort is hilarious")
c2 = Comment.build_from(a1, dummy_user.id, "so true")

[c1,c2].each{|c| c.save!}


#Make users follow topics and questions
[t1, t2, t3, q1, q3].each{|followable| demo_user.follow(followable)}
[t1, t2, q2, q3, q5].each{|followable| dummy_user.follow(followable)}

#Make users upvote questions and answers
[q3, a4, a3].each{|entity| demo_user.upvote(entity)}
[q1, q3, q6, a4].each{|entity| dummy_user.upvote(entity)}


#Make users downvote questions and answers
[q6, a5].each{|entity| demo_user.downvote(entity)}


#Give queestions and answers fake timestamps
Question.all.each do |question|
  some_days_ago = Time.at(Time.now.to_f -  30.days.to_f*rand)

  some_less_days_ago = Time.at(Time.now.to_f -  (Time.now.to_f-some_days_ago.to_f)*rand)

  question.update_attributes(created_at: some_days_ago, updated_at: some_less_days_ago)
end

Answer.all.each do |answer|
  question_created_ago = (Time.now.to_f - answer.question.created_at.to_f)

  some_days_ago = Time.at(Time.now.to_f -  question_created_ago*rand)

  some_less_days_ago = Time.at(Time.now.to_f -  some_days_ago.to_f*rand)

  answer.update_attributes(created_at: some_days_ago, updated_at: some_less_days_ago)
end
