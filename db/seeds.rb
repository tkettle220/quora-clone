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
demo_user = User.create(email: "thomas.kilmer@yale.edu", password: "password")
dummy_user = User.create(email: "sgullapalli@gmail.com", password: "password")

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
a3 = Answer.create(body: 'Test answer 1 for good programmer', author_id: demo_user.id, question_id: q2.id)
a4 = Answer.create(body: 'Test answer 1 for strange sort', author_id: dummy_user.id, question_id: q3.id)


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

#Make users follow topics and questions
[t1, t3, q1, q3].each{|followable| demo_user.follow(followable)}
[t1, t2, q2, q3, q5].each{|followable| dummy_user.follow(followable)}

#Make users upvote questions and answers
[q3, a4, a3].each{|entity| demo_user.upvote(entity)}
[q1, q3, q6, a4].each{|entity| dummy_user.upvote(entity)}


#Make users downvote questions and answers
[q1, q2, a1].each{|entity| demo_user.downvote(entity)}
[q4, a1, a2].each{|entity| dummy_user.downvote(entity)}




#Give our users propics and names
demo_user.update_attributes(name: "Will Xu", pro_pic_url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17952972_10155238754978829_6171178937828086766_n.jpg?oh=d1bd2b6555ebcb13479addf2874a0f83&oe=5A4A61E8")
dummy_user.update_attributes(name: "Sachith Gullapalli", pro_pic_url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14642433_10154649038393035_50739788996994746_n.jpg?oh=532a963328339ecddfec271190e6175a&oe=5A39FFA4")

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
