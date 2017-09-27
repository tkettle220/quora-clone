export const fetchTopics = data => (
  $.ajax({
    method: 'GET',
    url: 'api/topics',
    data
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
