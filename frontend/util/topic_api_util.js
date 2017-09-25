//Doesn't take a user argument, since in the controller it uses the current_user as the user
export const fetchTopics = () => (
  $.ajax({
    method: 'GET',
    url: 'api/topics',
  })
);

export const fetchTopic = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/topics/${id}`,
  })
);

export const followTopic = (id) => (
  $.ajax({
    method: 'POST',
    url: `api/topics/follow`,
    data: {
      topic_id: id,
    }
  })
);

export const unfollowTopic = (id) => (
  $.ajax({
    method: 'POST',
    url: `api/topics/unfollow`,
    data: {
      topic_id: id,
    }
  })
);
