import axios from 'axios'

const gallery = axios.create({
  baseURL: 'http://localhost:8000/api/auth/gallery'
});

class GalleryService {
  async getAll() {
    return gallery.get();
  }

  async getOne(id) {
    return gallery.get('/' + id);
  }

  async createGallery(credentials) {
    try {
      await gallery.post('', credentials);
    } catch (e) {
      return e.response.data;
    }
  }

  async editGallery(id, credentials) {
    try {
      await gallery.patch('/' + id, credentials);
    } catch (e) {
      return e.response.data;
    }
  }

  async deleteGallery(id) {
    return gallery.delete('/' + id)
  }
}

export const galleryService = new GalleryService();