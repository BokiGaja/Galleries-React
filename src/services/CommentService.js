import axios from 'axios'

const comment = axios.create({
  baseURL: 'http://localhost:8000/api/auth/comment'
});


class CommentService {
  async getCommentsForGallery(id) {
    const {data} = await comment.get('/' + id);
    return data;
  }

  async createComment(credentials) {
    try {
      await comment.post('', credentials);
    } catch (e) {
      return e.response.data;
    }
  }

  async deleteComment(id) {
    return comment.delete('/' + id);
  }
}

export const commentService = new CommentService();