//Doesn't take a user argument, since in the controller it uses the current_user as the user
export const fetchTopics = () => (
  $.ajax({
    method: 'GET',
    url: 'api/topics',
  })
);
