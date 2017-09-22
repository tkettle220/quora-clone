@answers.each do |answer|
  json.set! answer.id do
    json.partial! 'answer', answer: answer
  end
end
