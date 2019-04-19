class SearchService {
  filterArray(searchParams, originalArray) {
    let resultArray = [];
    if (searchParams.length > 0) {
      resultArray = originalArray.filter(
        gallery => gallery.title.includes(searchParams) ||
          gallery.description.includes(searchParams) ||
          gallery.user.first_name.includes(searchParams) ||
          gallery.user.first_name.includes(searchParams))
    } else {
      resultArray = originalArray
    }
    return resultArray;
  }
}

export const searchService = new SearchService();