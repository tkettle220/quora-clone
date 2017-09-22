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
dummy_user = User.create(email: "jerrylau21@yahoo.com", password: "password")

#Create Questions
Question.destroy_all
q1 = Question.create(body: 'What are the most common lies told by programmers?', author_id: demo_user.id)
q2 = Question.create(body: 'How can I know if a person is a good programmer or not?', author_id: demo_user.id)
q3 = Question.create(body: 'What is the strangest sorting algorithm?', author_id: demo_user.id)
q4 = Question.create(body: 'Why is the food at Google free for employees?', author_id: demo_user.id)
q5 = Question.create(body: 'If you were on death row, what would you request for your last meal?', author_id: dummy_user.id)
q6 = Question.create(body: 'What was your weirdest date ever?', author_id: dummy_user.id)

#Create Answers
a1 = Answer.create(body: 'Test answer 1 for common lies', author_id: demo_user.id, question_id: q1.id)
a2 = Answer.create(body: 'Test answer 2 for common lies', author_id: dummy_user.id, question_id: q1.id)
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

#Subscribe Users to Topics
t1.subscribers += [demo_user,dummy_user]
t2.subscribers += [dummy_user]
t3.subscribers += [demo_user]
