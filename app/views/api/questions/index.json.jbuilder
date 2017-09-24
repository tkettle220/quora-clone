@questions.each do |question|
  json.set! question.id do
    json.partial! 'question', question: question, keywords: @keywords
  end
end
