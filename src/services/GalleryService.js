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
    return gallery.post('', credentials)
  }

  async editGallery(id, credentials) {
    return gallery.patch('/' + id, credentials);
  }

  async deleteGallery(id) {
    return gallery.delete('/' + id)
  }
}

export const galleryService = new GalleryService();